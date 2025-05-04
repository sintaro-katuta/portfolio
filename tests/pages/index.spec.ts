import { expect, test } from "@playwright/test";

test("トップ画面にタイトルが表示されているか", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	await expect(page.locator("#title")).toContainText(
		"🌟 Welcome to My Portfolio! 👋",
	);
});
