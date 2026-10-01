import { useRef } from '@pionjs/pion';

export type EggTimer = {
	armed: number | undefined;
	/** Schedules the settle callback after the cap window. */
	arm(cb: () => void): void;
	/** Retires an armed settle. */
	clear(): void;
};

/**
 * The egg timer: one armed-or-not slot per surface. `arm` schedules a
 * callback after the cap window (the safety net behind the surface's
 * `translate` transitionend), `clear` retires an armed settle (it must
 * not fire detached or after the phase resolved some other way). The
 * machine never sees the scheduling - it hands callbacks.
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
