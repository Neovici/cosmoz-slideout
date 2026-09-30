import '@neovici/cosmoz-button/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { html, nothing } from 'lit-html';

/**
 * A slotted close control dispatching `request-close`: the documented way for
 * any author-supplied chrome (here a `cz-header` stand-in) to ask the
 * surrounding `<cosmoz-slideout>` to close, vetoable via `preventDefault()`.
 */
export const requestClose = (e: Event) =>
	(e.currentTarget as HTMLElement).dispatchEvent(
		new Event('request-close', {
			bubbles: true,
			composed: true,
			cancelable: true,
		})
	);

const titleStyle =
	'margin: 0; font-size: var(--cz-text-lg, 1.125rem);' +
	' line-height: var(--cz-text-lg-line-height, 1.5rem);' +
	' font-weight: var(--cz-font-weight-medium, 500);' +
	' color: var(--cz-color-text-primary, #181d27);';

const subtitleStyle =
	'margin: 0; font-size: var(--cz-text-sm, 0.875rem);' +
	' line-height: var(--cz-text-sm-line-height, 1.25rem);' +
	' color: var(--cz-color-text-secondary, #535862);';

/**
 * Right-aligned content for the `footer` slot (actions row).
 */
export const footer = (content: unknown) =>
	html`<div
		slot="footer"
		style="display: flex; justify-content: flex-end; gap: 8px; margin-left: auto;"
	>
		${content}
	</div>`;

/**
 * cz-header stand-in for the stories (cz-header itself lives in the private
 * cosmoz-frontend workspace): same API shape - title/subtitle as content, a
 * suffix close control dispatching `request-close` - as plain markup.
 */
export const header = (
	title: string,
	{ subtitle }: { subtitle?: string } = {}
) =>
	html`<div
		slot="header"
		style="display: flex; align-items: flex-start; justify-content: space-between; gap: calc(var(--cz-spacing) * 3); min-width: 0;"
	>
		<div
			style="display: flex; flex-direction: column; gap: calc(var(--cz-spacing) * 1); min-width: 0;"
		>
			<h2 style=${titleStyle}>${title}</h2>
			${subtitle
				? html`<p style=${subtitleStyle}>${subtitle}</p>`
				: nothing}
		</div>
		<cosmoz-button
			variant="tertiary"
			size="sm"
			aria-label="Close"
			@click=${requestClose}
		>
			${xCloseIcon({ slot: 'prefix' })}
		</cosmoz-button>
	</div>`;
