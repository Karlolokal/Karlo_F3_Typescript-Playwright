import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test.setTimeout(60000); //timeout

test('GitHub search test', async ({ page }) => {
  const browser = await chromium.launch({ headless: true });
  page = await browser.newPage();

  await page.goto('https://github.com');
  await page.fill('id=user_email', 'test@test.com');

  // await page.waitForTimeout(50000);

  // Replace with the actual button selector
  await page.click('.btn-mktg'); //class identifier used


  await browser.close();
});
