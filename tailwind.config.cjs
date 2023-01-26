/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#121212',
					secondary: '#1e1f20',
					border: '#414143'
				}
			}
		}
	},
	plugins: []
};
