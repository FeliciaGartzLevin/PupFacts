/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'full-app-side-spacing': '4rem',
			},
		},
	},
	plugins: [],
};
