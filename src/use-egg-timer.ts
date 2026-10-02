import { useRef } from '@pionjs/pion';

export type EggTimer = {
	armed: number | undefined;
	/** Schedules the settle callback after the cap window. */
	arm(cb: () => void): void;
	/** Retires an armed settle. */
	clear(): void;
};

/**
 * The settle cap: `arm` schedules a callback after the cap window -
 * the backstop behind the surface's `translate` transitionend
 * (reduced motion, zero duration, a transition the platform cut
 * short); `clear` retires an armed callback, which must not fire
 * after the phase resolved another way.
 */
export const useEggTimer = (): EggTimer => {
	const self = useRef<EggTimer>({
		armed: undefined,
		arm(cb) {
			self.armed = window.setTimeout(cb, 1000);
		},
		clear() {
			window.clearTimeout(self.armed);
		},
	}).current as EggTimer;
	return self;
};
