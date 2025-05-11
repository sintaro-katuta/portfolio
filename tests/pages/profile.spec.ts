import { expect, test } from "@playwright/test";

test("プロフィール画面にメインが表示されているか", async ({ page }) => {
	await page.goto("http://localhost:3000/profile");

	await expect(page.locator(".main")).toContainText("趣味");

	await expect(page.locator(".main")).toContainText("得意な言語");

	await page
		.locator(".main")
		.screenshot({ path: "tests/screenshot/profile-content.png" });
});

test("プロフィール画面にサイドバーが表示されているか", async ({ page }) => {
	await page.goto("http://localhost:3000/profile");

	await expect(page.locator(".side-bar")).toContainText("勝田紳太郎");

	await expect(page.locator(".side-bar")).toContainText("Japan,Osaka");

	await expect(page.locator(".side-bar")).toContainText("WebDev");
});

test("プロフィール画面のQiitaのリンクが動作するか", async ({ page }) => {
	await page.goto("http://localhost:3000/profile");

	await page.getByRole("link").locator("#Qiita").click();

	await expect(page).toHaveURL("https://qiita.com/sintaro-katuta");
});

test("プロフィール画面のGithubのリンクが動作するか", async ({ page }) => {
	await page.goto("http://localhost:3000/profile");

	await page.getByRole("link").locator("#Github").click();

	await expect(page).toHaveURL("https://github.com/sintaro-katuta");
});
