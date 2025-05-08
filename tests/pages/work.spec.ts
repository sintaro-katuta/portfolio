
import { expect, test } from "@playwright/test";

test("ワーク画面にアプリケーションが表示されているか", async ({ page }) => {
	await page.goto("http://localhost:3000/work");

	await expect(page.locator(".app")).toBeVisible();

  const app = page.locator(".app");

  const appCount = await app.count();

  for (let i = 0; i < appCount; i++) {
    const appName = await app.nth(i).locator(".app-name").textContent();
    const appDescription = await app
      .nth(i)
      .locator(".app-description")
      .textContent();

    expect(appName).not.toBeNull();
    expect(appDescription).not.toBeNull();
  }
});