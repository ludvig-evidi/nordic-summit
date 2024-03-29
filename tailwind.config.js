/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system'],
				Display: ['Lexend', 'ui-sans-serif', 'system-ui', '-apple-system']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		logs: false,
		themes: ['dark'],
		darkTheme: 'dark'
	}
}
