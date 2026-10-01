import { array } from '@neovici/cosmoz-utils/array';
import { useEffect, useRef } from '@pionjs/pion';

export type Send<Action extends string, State extends string> = (
	action: Action,
) => State | null;

/**
 * What every edge callback receives: the hook-supplied `context`
 * (opaque to the machine) plus the machine's own transition trigger.
 */
export type EdgeCtx<State extends string, Action extends string, C> = C & {
	send: Send<Action, State>;
};

/**
 * One transition edge: where it goes and what prevents it. Callbacks
 * receive the edge context and are given as (arrays of) optional
 * refs; `undefined` elements are skipped.
 */
export type Edge<State extends string, Action extends string, C> = {
	/** The destination state. */
	to: State;
	/** Any guard returning `false` prevents the transition entirely. */
	guard?: ((ctx: EdgeCtx<State, Action, C>) => boolean | void | undefined)[];
};

export type Machine<State extends string, Action extends string> = {
	state: State;
	send(action: Action): State | null;
	is(state: State): boolean;
};

/**
 * One state: its establishment (setup, run on every entry) and its
 * undo (teardown, run on exit via any edge and on the element's
 * disconnect - the state is preserved across, so reconnect can
 * re-establish via a resume send); plus its edges.
 */
export type Row<State extends string, Action extends string, C> = {
	/** Establishes the phase on every entry. */
	setup?: ((ctx: EdgeCtx<State, Action, C>) => void | undefined)[];
	/** Undoes the phase's establishment. */
	teardown?: ((ctx: EdgeCtx<State, Action, C>) => void | undefined)[];
	transitions: Partial<Record<Action, Edge<State, Action, C>>>;
};

type Table<State extends string, Action extends string, C> = Readonly<
	Record<State, Row<State, Action, C>>
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
 * Every callback receives the edge context: the hook-supplied
 * `context` (per-instance constants, e.g. DOM refs) plus the machine's
 * `send`, so a commit can arm a later action without closing over the
 * machine. An action with no edge from the current state is a stale
 * no-op (`send` returns null): races degrade instead of firing stale
 * side effects. Instantiated per hook call (stable identity, state on
 * the machine object); tables and context are shared.
 *
 * ```ts
 * const machine = useStateMachine(
 *   'idle',
 *   {
 *     idle: {
 *       transitions: {
 *         OPEN: { to: 'opening' },
 *       },
 *     },
 *     opening: {
 *       setup: [({ host }) => host.setAttribute('open', '')],
 *       teardown: [({ host }) => host.removeAttribute('open')],
 *       transitions: { SETTLE: { to: 'idle' } },
 *     },
 *   },
 *   { host: document.body },
 * );
 * machine.send('OPEN');  // 'idle' -> 'opening', sets the attribute
 * machine.send('X');     // no edge -> null
 * machine.is('opening'); // true
 * ```
 */
export const useStateMachine = <
	State extends string,
	Action extends string,
	C = Record<never, never>,
>(
	initial: State,
	transitions: Table<State, Action, C>,
	context?: C,
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
			const ctx: EdgeCtx<State, Action, C> = {
				...(context as C),
				send: self.send,
			};
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

	// disconnect: undo the current phase's establishment - the state is
	// preserved (a re-appended element resumes per its `opened`
	// attribute); reconnect re-runs the effects and the resume send
	// re-establishes via the self-heal edges
	useEffect(() => {
		const machine = self;
		return () => {
			array(transitions[machine.state].teardown).forEach((t) =>
				t?.({ ...(context as C), send: machine.send }),
			);
		};
	}, []);

	return self;
};
