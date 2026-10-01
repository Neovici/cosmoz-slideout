import { array } from '@neovici/cosmoz-utils/array';
import { useEffect, useRef } from '@pionjs/pion';

export type Send<Action extends string, State extends string> = (
	action: Action,
) => State | null;

/**
 * What every edge callback receives: the machine's own transition
 * trigger.
 */
export type EdgeCtx<State extends string, Action extends string> = {
	send: Send<Action, State>;
};

/**
 * One transition edge: where it goes and what prevents it. Callbacks
 * receive the edge context and are given as (arrays of) optional
 * refs; `undefined` elements are skipped.
 */
export type Edge<State extends string, Action extends string> = {
	/** The destination state. */
	to: State;
	/** Any guard returning `false` prevents the transition entirely. */
	guard?: ((ctx: EdgeCtx<State, Action>) => boolean | void | undefined)[];
};

export type Machine<State extends string, Action extends string> = {
	state: State;
	send(action: Action): State | null;
	is(state: State): boolean;
};

/**
 * One state: its establishment (setup, run on every entry) and its
 * undo (teardown, run on exit via any edge and on the element's
 * disconnect); plus its edges.
 */
export type Row<State extends string, Action extends string> = {
	/** Establishes the phase on every entry. */
	setup?: ((ctx: EdgeCtx<State, Action>) => void | undefined)[];
	/** Undoes the phase's establishment. */
	teardown?: ((ctx: EdgeCtx<State, Action>) => void | undefined)[];
	transitions: Partial<Record<Action, Edge<State, Action>>>;
};

type Table<State extends string, Action extends string> = Readonly<
	Record<State, Row<State, Action>>
>;

/**
 * A per-state cleanup ledger - `useReducer` INVERTED: the reducer
 * schedules renders from actions; this runs effects from actions,
 * synchronously (guard -> teardown -> flip -> setup), never rendering;
 * the only state it keeps is "what to undo". Each row declares what
 * its phase OWNS and the symmetric undo of exactly that. Full
 * rationale: docs/state-machine-rationale.md.
 *
 * Not view state: what the user sees lives in the DOM (the `opened`
 * attribute, `:popover-open` truth) - the machine only knows which
 * phase is in flight, and writing its state re-renders nothing.
 *
 * An action with no edge (e.g. a late settle after the phase
 * resolved) returns null - races degrade to no-ops, never stale side
 * effects. Ref-carried: stable identity, no render subscriptions.
 *
 * ```ts
 * const machine = useStateMachine('idle', {
 *   idle: {
 *     transitions: {
 *       OPEN: { to: 'opening' },
 *     },
 *   },
 *   opening: {
 *     setup: [() => console.log('opening!')],
 *     teardown: [() => console.log('leaving!')],
 *     transitions: { SETTLE: { to: 'idle' } },
 *   },
 * });
 * machine.send('OPEN');  // 'idle' -> 'opening', logs both lines
 * machine.send('X');     // no edge -> null
 * machine.is('opening'); // true
 * ```
 */
export const useStateMachine = <State extends string, Action extends string>(
	initial: State,
	transitions: Table<State, Action>,
) => {
	// deferred `self` read inside `send`: the ctx's `send` is the
	// machine's own (created in this ref) - built lazily per dispatch
	const self = useRef<Machine<State, Action>>({
		state: initial,
		send(action) {
			const edge = transitions[self.state]?.transitions[action];
			if (!edge) {
				return null; // stale: no edge
			}
			const ctx = { send: self.send };
			if (array(edge.guard).some((guard) => guard?.(ctx) === false)) {
				return null; // prevented
			}
			array(transitions[self.state].teardown).forEach((t) => t?.(ctx));
			self.state = edge.to;
			array(transitions[edge.to].setup).forEach((s) => s?.(ctx));
			return edge.to;
		},
		is(state) {
			return self.state === state;
		},
	}).current as Machine<State, Action>;

	// disconnect: undo the current phase's establishment
	useEffect(() => {
		const machine = self;
		return () => {
			array(transitions[machine.state].teardown).forEach((t) =>
				t?.({ send: machine.send }),
			);
		};
	}, []);

	return self;
};
