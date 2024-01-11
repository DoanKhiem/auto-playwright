import { test, expect } from '@playwright/test';
import { autoLogin } from './utils';
test.beforeEach(async ({ page }) => {
  await autoLogin(page, 'C23041201', 'ac-110');
});
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.tiktok.com/@dfreelearning/video/7301323562198060289?q=d%20free%20learning&t=1704959893975');

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
