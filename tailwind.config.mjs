/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary:"#83AD31",
				secondary:"#005A50",
				tertiary:"#54C6BD",
				quaternary:"#B4C672"
			}
		},
	},
	plugins: [],
}
