import { useEffect, useRef } from '@pionjs/pion';

export const useSurfaceLabel = (host: HTMLElement) => {
	const ours = useRef<string | null>(null);

	useEffect(() => {
		const slot = host.shadowRoot?.querySelector('slot');
		if (!slot) {
			return;
		}

		const surface = () =>
			host.shadowRoot?.querySelector<HTMLElement>('[popover]') ?? undefined;

		const setLabel = (label: string | null) => {
			const s = surface();
			if (label === null) {
				host.removeAttribute('aria-label');
				s?.removeAttribute('aria-label');
				ours.current = null;
			} else {
				host.setAttribute('aria-label', label);
				s?.setAttribute('aria-label', label);
				ours.current = label;
			}
		};

		const apply = (heading: string | null | undefined) => {
			if (host.hasAttribute('aria-labelledby')) return;
			const current = host.getAttribute('aria-label');
			const authored = current !== null && current !== ours.current;
			if (authored) {
				return;
			}

			if (heading) {
				setLabel(heading);
			} else if (ours.current !== null) {
				setLabel(null);
			}
		};

		const slotted = () =>
			slot.assignedElements({ flatten: true })[0] as
				| (HTMLElement & { heading?: string })
				| undefined;

		const headingOf = (el: ReturnType<typeof slotted>) =>
			el?.heading ?? el?.getAttribute('heading') ?? undefined;

		let mo: MutationObserver | undefined;
		const sync = () => {
			mo?.disconnect();
			const el = slotted();
			if (el) {
				mo = new MutationObserver(() => apply(headingOf(el)));
				mo.observe(el, { attributes: true, attributeFilter: ['heading'] });
			}
			apply(headingOf(el));
		};

		slot.addEventListener('slotchange', sync);
		sync();

		return () => {
			slot.removeEventListener('slotchange', sync);
			mo?.disconnect();
			if (
				ours.current !== null &&
				host.getAttribute('aria-label') === ours.current
			) {
				setLabel(null);
			}
		};
	}, []);
};
