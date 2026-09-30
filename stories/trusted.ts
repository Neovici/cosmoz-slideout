import type { UserEvent } from '@vitest/browser/context';

/**
 * Vitest Browser Mode userEvent (Playwright-backed -> trusted OS-level key
 * events). Required for steps that exercise the platform close-request
 * pipeline (`CloseWatcher`), which ignores synthetic `dispatchEvent` keys.
 *
 * `@vitest/browser/context` throws at import time outside Vitest Browser Mode
 * (e.g. the static Storybook build), so this must never be imported at module
 * scope: the `null` result is the caller's cue to skip the step (it cannot
 * pass on synthetic input).
 */
export const trustedUserEvent = async (): Promise<UserEvent | null> => {
	try {
		const { userEvent } = await import('@vitest/browser/context');
		return userEvent;
	} catch {
		return null; // not in Vitest Browser Mode (static Storybook) -> skip
	}
};

/**
 * Resolve the trusted userEvent or, in its absence, emit a visible
 * `skip:` step (shows up in the Storybook interactions panel) and
 * resolve `null` for the caller to bail out of the step.
 */
type StepFn = (
	label: string,
	play: () => Promise<void> | void
) => Promise<void> | void;

export const skipUnlessTrusted = async (step: StepFn): Promise<UserEvent | null> => {
	const trusted = await trustedUserEvent();
	if (trusted) return trusted;
	await step('skip: Escape needs Vitest Browser Mode (trusted keys)', async () => undefined);
	return null;
};