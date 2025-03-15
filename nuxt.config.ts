// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
	tailwindcss: {
		config: {
			content: [
				"./components/**/*.{js,vue,ts}",
				"./layouts/**/*.vue",
				"./pages/**/*.vue",
				"./plugins/**/*.{js,ts}",
				"./app.vue",
				"./error.vue",
			],
			theme: {
				extend: {
					fontFamily: {
						robotoSlab: ["Roboto Slab", "serif"],
						shipporiAntique: ["Shippori Antique", "serif"],
						appleSystem: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
					},
					screens: {
						xs: "320px",
					},
				},
			},
		},
		viewer: true,
		cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
	},
});
