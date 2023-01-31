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
		title: 'Welcome Email',
		description: 'Give a warm welcome to your new customer or subscriber!',
		href: '/email'
	},
	{
		title: 'Discount Promotion',
		description: 'Create an elegant discount promotion message.',
		href: '/discount'
	}
];
