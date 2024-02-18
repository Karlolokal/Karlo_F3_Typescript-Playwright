import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

// Define your test
test('Google search for "Typescript"', async ({ page }) => {
  await page.goto('https://google.com');
  await page.fill('input[name=q]', 'Typescript');
  await page.press('input[name=q]', 'Enter');
//   await page.waitForNavigation();

  // Add your assertions (optional)
  await expect(page).toHaveTitle('Typescript - Google Search');

  // You can add more test steps here if needed

  // Example: Click a link
  // await page.click('a[href="https://www.typescriptlang.org/"]');

  // Example: Verify something else
  // await expect(page).toHaveText('TypeScript is a superset of JavaScript');

  // You can add more assertions or steps as required

  // Close the browser
  await page.context().close();
});
