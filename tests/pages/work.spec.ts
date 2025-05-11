
import { expect, test } from "@playwright/test";

test("ワーク画面にアプリケーションが表示されているか", async ({ page }) => {
	await page.goto("http://localhost:3000/work");

  const apps = page.locator(".app");

  const appCount = await apps.count();

  for (let i = 0; i < appCount; i++) {
    const appName = await apps.nth(i).locator(".app-name").textContent();
    const appDescription = await apps
      .nth(i)
      .locator(".app-description")
      .textContent();

    expect(appName).not.toBeNull();
    expect(appDescription).not.toBeNull();
  }
});