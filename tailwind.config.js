/** @type {import('tailwindcss').Config} */
import themeSwapper from 'tailwindcss-theme-swapper';

/* Themes */
const darkTheme = {
	colors: {
		accentColor: {
			dark: '#D90368',
			light: '#FFD400',
		},
		backgroundColor: {
			primary: '#541388', //#2E294E
		},
		textColor: {
			primary: '#F1E9DA',
		},
	},
};

const lightTheme = {
	colors: {
		accentColor: {
			dark: '#007090',
			light: '#FF88DC',
		},
		backgroundColor: {
			primary: '#F1E9DA',
		},
		textColor: {
			primary: '#2E294E',
		},
	},
};

const pinkTheme = {
	colors: {
		accentColor: {
			dark: '#7E5A9B',
			light: '#9CF6F6',
		},
		backgroundColor: {
			primary: '#EDADCA',
		},
		textColor: {
			primary: '#63458A',
		},
	},
};

/* Tailwind config */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				'full-app-side-spacing': '4rem',
			},
		},
	},
	plugins: [
		themeSwapper({
			themes: [
				{
					name: 'base',
					selectors: [':root'],
					theme: darkTheme,
				},
				{
					name: 'light',
					selectors: ['.light'],
					theme: lightTheme,
				},
				{
					name: 'pink',
					selectors: ['.pink'],
					theme: pinkTheme,
				},
			],
		}),
	],
};
