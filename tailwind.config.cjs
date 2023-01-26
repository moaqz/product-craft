/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					dark: {
						primary: '#111',
						secondary: '#1a1a1a',
						border: '#2b2b2b'
					}
				}
			}
		}
	},
	plugins: []
};
