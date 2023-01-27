export interface Feature {
	title: string;
	description: string;
	href: string;
}

export const FEATURES: Feature[] = [
	{
		title: 'Product Description',
		description: 'Product description given specified input keywords, audience, and tone of voice',
		href: '/description'
	},
	{
		title: 'Product Benefits',
		description:
			'Turns a product description into a list of functional, emotional, and social benefits.',
		href: '/benefits'
	}
];
