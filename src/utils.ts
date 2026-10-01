/**
 * Safety net behind `transitionend` for firing the `open`/`close` settle
 * events; `transitionend` is the primary signal, so this only has to exceed
 * any duration an author might configure (including slow-motion dev
 * tweaks). Under reduced motion no transition runs and the cap fires alone.
 */
export const settleCapMs = 1000;
