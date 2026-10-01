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
 * A ref-based finite state machine: no re-renders, transitions are
 * plain function calls. A transition runs:
 *
 * 1. `guard` - any guard returning `false` prevents the transition
 *    (no teardown, no flip, no setup, `send` returns null)
 * 2. the current state's `teardown` undoes its establishment
 * 3. the state flips
 * 4. the destination state's `setup` establishes the incoming phase
 *
 * Every callback receives the edge context: the machine's `send`, so
 * a setup can arm a later action without closing over the machine
 * itself. An action with no edge from the current state is a stale
 * no-op (`send` returns null): races degrade instead of firing stale
 * side effects. Instantiated per hook call (stable identity, state on
 * the machine object); only tables are shared.
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
