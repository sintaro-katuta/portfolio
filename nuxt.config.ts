// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@nuxt/ui"],
	css: ["~/assets/css/main.css"],
	runtimeConfig: {
		public: {
			QIITA_ACCESS_TOKEN: process.env.QIITA_ACCESS_TOKEN,
		},
	},
});
