import { render, screen } from '@testing-library/svelte';
import html from 'svelte-htm';
import Button from './index.svelte';

describe('Button', () => {
	test('Should render', () => {
		const { getByText } = render(html`<${Button}>Click me!</${Button}>`);

		expect(getByText('Click me!')).toBeInTheDocument();
	});

	test('Shows spinner and loading text if isLoading', () => {
		const { rerender } = render(html`<${Button} isLoading>Click me!</${Button}>`);

		expect(screen.queryByText('Click me!')).toBeNull();

		rerender(html`<${Button} isLoading>Click me!</${Button}>`);

		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	test('Should be disabled', () => {
		const { getByRole } = render(html`<${Button} isLoading>Disabled</${Button}>`);

		expect(getByRole('button')).toBeDisabled();
	});
});
