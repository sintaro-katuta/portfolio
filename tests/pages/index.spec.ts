import { test, expect } from '@playwright/test';

test('top page has title', async ({ page }) => {

  await page.goto('http://localhost:3000/');

  await expect(page.locator("#title")).toContainText('🌟 Welcome to My Portfolio! 👋');
});