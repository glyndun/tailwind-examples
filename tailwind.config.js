module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
                current: 'currentColor',

				'github-background': '#0d1117',
				'github-header': '#161b22',
				'githib-orange': '#f78166',
				'github-primary-bg': '#238636',
				'github-primary-bg-hover': '#2ea043',
				'github-primary-border': '#2ea043',
				'github-primary-border-hover': '#3fb950',
				'github-text-color': '#c9d1d9',
				'github-bg-gray-button': '#21262d',
				'github-border-gray-button': '#30363d',
				'github-secondary-text-color': '#8b949e',
				'github-bg-gray': '#6e7681'

			},
			fontSize: {
				xxs: '0.5rem',
			},
			lineHeight: {
				'extra-loose': '2.5',
			},
			maxWidth: {
                'container-md': '68.5rem',
				'container-xl': '80rem',
            },
			boxShadow: {
                nav: 'inset 0 -1px 0 #21262d',
            },
		},
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			'source-sans-pro': [
				'Source Sans Pro',
				'Roboto',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			'segoe-ui': [
				'"Segoe UI"',
				'-apple-system',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace',
				],
			},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
