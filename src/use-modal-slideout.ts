import { useCallback, useEffect, useHost } from '@pionjs/pion';
import { useAttribute } from './use-attribute';
import { useFullScreen } from './use-full-screen';
import { useHandleRequestClose } from './use-handle-request-close';
import { useImperativeApi } from './use-imperative-api';

/**
 * The modal slideout's lifecycle. The inner `dialog` owns dismissal via
 * the platform: an Esc (its `cancel` event, cancelable - the veto
 * bridges through `opened-changed`, so every close source shares one
 * funnel) and a backdrop click (the click's target is the dialog -
 * only `::backdrop` hits the bare dialog) funnel as close intents; the
 * dialog's own `close` is the record of the flip (the silent attribute
 * write re-renders, whose reconcile finds agreement). The flip itself
 * is an idempotent reconcile against `dialog.open`: `showModal()` owns
 * inertness, the focus trap and focus restoration.
 */
export const useModalSlideout = () => {
	const [opened, setOpened, reflectOpened] = useAttribute('opened');
	const open = useCallback(() => setOpened(true), [setOpened]);
	const close = useCallback(() => setOpened(false), [setOpened]);

	useHandleRequestClose({ opened, close });

	const host = useHost<HTMLElement>();

	useEffect(() => {
		const dialog = host.shadowRoot?.querySelector('dialog');
		if (!dialog) {
			return;
		}
		const isOpen = dialog.open;
		if (opened && !isOpen) {
			dialog.showModal();
		} else if (!opened && isOpen) {
			// the dismissal is done: dialog.close() has no veto; this is
			// the element's own programmatic flip, recorded by `close`
			dialog.close();
		}
		// `host` is the element's own (never reassigned); `opened` is
		// the only dep that can change
	}, [opened]);

	// the dialog's platform paths, bridged onto the funnel; no
	// cleanup: the listeners die with the dialog (a shadow child torn
	// down with the element), and the deps are identity-stable for the
	// element's lifetime - `host` is the element's own, `close` and
	// `reflectOpened` are `useCallback`s over a static `[name]`
	useEffect(() => {
		const dialog = host.shadowRoot?.querySelector('dialog');
		if (!dialog) {
			return;
		}
		// the cancelable dismissal veto: a preventDefault here aborts
		// the platform's close
		dialog.addEventListener('cancel', (e) => {
			if (close() === false) {
				e.preventDefault();
			}
		});
		// the record of the flip, whatever the closer
		dialog.addEventListener('close', () => reflectOpened(false));
		// the backdrop is the click target: only it hits the bare
		// dialog, so a click here is an outside click, funneled as a
		// close intent (cancelable)
		dialog.addEventListener('click', (e) => {
			if (e.target === dialog) {
				close();
			}
		});
	}, []);

	const { fullScreen, toggle } = useFullScreen();

	useImperativeApi({ open, close, toggleFullScreen: toggle });

	return { opened, open, close, fullScreen, toggleFullScreen: toggle };
};
