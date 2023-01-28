export interface Feature {
	title: string;
	description: string;
	href: string;
}

export const FEATURES: Feature[] = [
	{
		title: 'Product Description',
		description: 'Create a product description given keywords and a product name',
		href: '/description'
	},
	{
		title: 'Feature Benefits',
		description: 'Turns a feature into a list of functional and social benefits.',
		href: '/benefits'
	}
];
