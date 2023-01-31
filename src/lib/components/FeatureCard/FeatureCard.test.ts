import { render } from '@testing-library/svelte';
import html from 'svelte-htm';
import FeatureCard from './index.svelte';

describe('FeatureCard', () => {
	const title = 'Product Description';
	const description = 'Create a product description given keywords and a product name';
	const href = '/description';

	test('Should render with the correct values', () => {
		const { getByRole, getByText } = render(
			html`<${FeatureCard} title=${title} description=${description} href=${href} />`
		);

		expect(getByText(title)).toBeInTheDocument();
		expect(getByText(description)).toBeInTheDocument();

		const link = getByRole('link');
		expect(link.getAttribute('href')).toBe('/description');
	});
});
