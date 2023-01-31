import { render } from '@testing-library/svelte';
import LinkButton from './index.svelte';
import html from 'svelte-htm';

describe('LinkButton', () => {
	const href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

	test('Should render with the proper href', () => {
		const { getByText } = render(html`<${LinkButton} href=${href}>Watch video</${LinkButton}>`);

		const button = getByText('Watch video');

		expect(button.getAttribute('href')).toBe(href);
	});

	test('Should contain the correct attributes when isExternal is passed', () => {
		const { getByText } = render(
			html`<${LinkButton} href=${href} isExternal>Watch video</${LinkButton}>`
		);

		const button = getByText('Watch video');

		expect(button.getAttribute('target')).toBe('_blank');
		expect(button.getAttribute('rel')).toBe('noreferrer');
	});
});
