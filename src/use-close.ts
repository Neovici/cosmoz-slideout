import { useCallback, useEffect, useRef } from '@pionjs/pion';
import type { SlideoutElement } from './types';
import { useAttribute } from './use-attribute';
import { animationTimeoutMs } from './utils';

const restoreFocus = (opener: HTMLElement | null | undefined) => {
	if (opener?.isConnected) opener.focus({ preventScroll: true });
};

export const useClose = (host: SlideoutElement) => {
	const [opened, setOpened] = useAttribute(host, 'opened');

	const lc = useRef({
		opener: null as HTMLElement | null,
		shouldRestore: false,
		closing: false,
		opening: false,
		closeTimer: 0,
		openTimer: 0,
		watcher: null as CloseWatcher | null,
	});

	const settleOpen = useCallback(() => {
		const s = lc.current!;
		if (!s.opening) return;
		s.opening = false;
		window.clearTimeout(s.openTimer);
		host.dispatchEvent(new Event('open', { bubbles: true }));
	}, []);

	const finish = useCallback(() => {
		const s = lc.current!;
		if (!s.closing) return;
		s.closing = false;
		window.clearTimeout(s.closeTimer);
		s.watcher?.destroy();
		s.watcher = null;

		if (s.shouldRestore) restoreFocus(s.opener);

		host.dispatchEvent(new Event('close', { bubbles: true }));
		host.onClose?.();
	}, []);

	const open = useCallback(() => {
		if (!host.opened) setOpened(true);
	}, []);
	const close = useCallback(() => {
		if (host.opened) setOpened(false);
	}, []);

	const attachWatcher = useCallback(
		(watcher: CloseWatcher | null) => {
			const s = lc.current!;
			s.watcher?.destroy();
			if (!watcher) {
				s.watcher = null;
				return;
			}
			watcher.oncancel = (e) => {
				if (!setOpened(false)) e.preventDefault();
			};
			s.watcher = watcher;
		},
		[setOpened],
	);

	const activate = useCallback(() => {
		const s = lc.current!;
		// capture the opener before the browser's popover focusing steps move
		// focus into the slotted `[autofocus]` content (or the surface, when the
		// author marks it); no focus() calls here.
		s.opener = document.activeElement as HTMLElement | null;
		s.closing = false;
		window.clearTimeout(s.closeTimer);

		if (!host.matches(':popover-open')) {
			host.showPopover();
		}
		attachWatcher(
			!host.noEscape && 'CloseWatcher' in window ? new CloseWatcher() : null,
		);

		s.opening = true;
		window.clearTimeout(s.openTimer);
		s.openTimer = window.setTimeout(settleOpen, animationTimeoutMs(host));
	}, [attachWatcher]);

	const deactivate = useCallback(() => {
		const s = lc.current!;
		s.opening = false;
		window.clearTimeout(s.openTimer);

		if (!host.matches(':popover-open')) {
			return;
		}

		s.shouldRestore = host.contains(document.activeElement);
		s.closing = true;
		window.clearTimeout(s.closeTimer);
		s.closeTimer = window.setTimeout(finish, animationTimeoutMs(host));
		host.hidePopover();
	}, []);

	useEffect(() => {
		const onTransitionEnd = (e: TransitionEvent) => {
			if (e.target !== host || e.propertyName !== 'translate') {
				return;
			}
			if (lc.current!.closing) {
				finish();
			} else {
				settleOpen();
			}
		};
		const onKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && !host.noEscape && host.opened) {
				e.preventDefault();
				close();
			}
		};
		const onRequestClose = (e: Event) => {
			if (host.opened && !e.defaultPrevented) {
				e.stopPropagation();
				close();
			}
		};

		host.addEventListener('transitionend', onTransitionEnd as EventListener);
		if (!('CloseWatcher' in window)) {
			document.addEventListener('keydown', onKeydown);
		}
		host.addEventListener('request-close', onRequestClose);

		return () => {
			window.clearTimeout(lc.current!.closeTimer);
			window.clearTimeout(lc.current!.openTimer);
			attachWatcher(null);
			host.removeEventListener(
				'transitionend',
				onTransitionEnd as EventListener,
			);
			if (!('CloseWatcher' in window)) {
				document.removeEventListener('keydown', onKeydown);
			}
			host.removeEventListener('request-close', onRequestClose);
		};
	}, [attachWatcher, close]);

	useEffect(() => {
		if (opened) {
			activate();
		} else {
			deactivate();
		}
	}, [opened]);

	return { close, open };
};
