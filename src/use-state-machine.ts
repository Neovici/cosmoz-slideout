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
 * One state: what it establishes on entry (enter, run on every
 * entry) and its undo (exit, run on every exit and on the element's
 * disconnect); plus its edges.
 */
export type Row<State extends string, Action extends string> = {
	/** Establishes the phase on every entry. */
	enter?: ((ctx: EdgeCtx<State, Action>) => void | undefined)[];
	/** Undoes the phase's establishment. */
	exit?: ((ctx: EdgeCtx<State, Action>) => void | undefined)[];
	transitions: Partial<Record<Action, Edge<State, Action>>>;
};

type Table<State extends string, Action extends string> = Readonly<
	Record<State, Row<State, Action>>
>;

/**
 * A per-phase cleanup ledger: each row declares what its phase owns
 * (enter, run on every entry) and the symmetric undo of exactly that
 * (exit, run on every exit and on the element's disconnect), so
 * cleanup is declared once per phase instead of scattered through
 * effects and timers. A transition runs guard -> exit -> flip ->
 * enter, synchronously, never rendering - the state is bookkeeping
 * ("what to undo"), the user-visible truth lives in the DOM.
 *
 * An action with no edge from the current state returns null - stale
 * actions (a late settle after the phase resolved) are no-ops. The
 * machine is ref-carried: stable identity, no render subscriptions.
 *
 * ```ts
 * const machine = useStateMachine('idle', {
 *   idle: {
 *     transitions: {
 *       OPEN: { to: 'opening' },
 *     },
 *   },
 *   opening: {
 *     enter: [() => console.log('opening!')],
 *     exit: [() => console.log('leaving!')],
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
	const self = useRef<Machine<State, Action>>({
		state: initial,
		send(action) {
			const edge = transitions[self.state]?.transitions[action];
			if (!edge) {
				return null;
			}
			const ctx = { send: self.send };
			if (array(edge.guard).some((guard) => guard?.(ctx) === false)) {
				return null;
			}
			array(transitions[self.state].exit).forEach((t) => t?.(ctx));
			self.state = edge.to;
			array(transitions[edge.to].enter).forEach((s) => s?.(ctx));
			return edge.to;
		},
		is(state) {
			return self.state === state;
		},
	}).current as Machine<State, Action>;

	// the element's disconnect undoes the current phase
	useEffect(() => {
		const machine = self;
		return () => {
			array(transitions[machine.state].exit).forEach((t) =>
				t?.({ send: machine.send }),
			);
		};
	}, []);

	return self;
};
