import { ar } from "@nuxt/ui/runtime/locale/index.js";
import { expect, test } from "@playwright/test";

test("ブログ画面に記事が表示されているか", async ({ page }) => {
	await page.goto("http://localhost:3000/blog");

	const articles = page.locator(".article");

	const articlesCount = await articles.count();

	for (let i = 0; i < articlesCount; i++) {
		const title = await articles.nth(i).locator(".title").textContent();
		const appDescription = await articles.nth(i).locator(".like").textContent();

		expect(title).not.toBeNull();
		expect(appDescription).not.toBeNull();
	}
});
