/**
 * A ref-based finite state machine: no re-renders, transitions are plain
 * function calls. Invalid transitions are ignored (the state stays), so
 * signal races (e.g. a settle arriving after the phase flipped) degrade
 * to no-ops instead of stale side effects.
 *
 * ```ts
 * const { ref, send, is } = useStateMachine('idle', {
 *   idle: { OPEN: 'opening' },
 *   opening: { SETTLE: 'idle', CLOSE: 'closing' },
 * });
 * send('OPEN');       // 'idle' -> 'opening'
 * send('SHUTDOWN');   // invalid -> stays 'opening'
 * is('opening');      // true
 * ref.current;        // 'opening'
 * ```
 */
export const useStateMachine = <State extends string, Action extends string>(
	initial: State,
	transitions: Readonly<Record<State, Partial<Record<Action, State>>>>,
) => {
	const ref = { current: initial } as { current: State };

	const send = ((action: Action) => {
		const next = transitions[ref.current]?.[action];
		if (next === undefined) {
			return null;
		}
		ref.current = next;
		return ref.current;
	}) as (action: Action) => State | null;

	const is = (state: State) => ref.current === state;

	return { ref, send, is } as const;
};
