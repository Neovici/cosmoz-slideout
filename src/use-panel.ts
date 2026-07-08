import { useCallback, useState } from '@pionjs/pion';

const slotFilled = (e: Event) =>
	(e.target as HTMLSlotElement).assignedElements().length > 0;

const hasSlotted = (host: HTMLElement, name: string) =>
	host.querySelector(`:scope > [slot="${name}"]`) !== null;

// tracks whether the panel's `header` / `footer` slots have projected content
// so their styled chrome is rendered only when populated
export const usePanel = (host: HTMLElement) => {
	const [hasHeaderContent, setHeader] = useState(hasSlotted(host, 'header'));
	const [hasFooterContent, setFooter] = useState(hasSlotted(host, 'footer'));

	return {
		hasHeaderContent,
		hasFooterContent,
		onHeaderSlot: useCallback((e: Event) => setHeader(slotFilled(e)), []),
		onFooterSlot: useCallback((e: Event) => setFooter(slotFilled(e)), []),
	};
};
