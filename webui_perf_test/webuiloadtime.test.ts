import { chromium, Browser, Page, ChromiumBrowserContext } from 'playwright';
import { test, expect } from '@playwright/test';


let browser: Browser;
let context: ChromiumBrowserContext;
let page: Page;

// beforeAll(async () => {
//   browser = await chromium.launch();
// });

// afterAll(async () => {
//   await browser.close();
// });

// beforeEach(async () => {
//   context = await browser.newContext();
//   page = await context.newPage();
// });

// afterEach(async () => {
//   await context.close();
// });

test('should measure the loading time of the page', async ({ page }) => {
    const browser = await chromium.launch({ headless: true });
// it('should measure the loading time of the page', async () => {
  const navigationPromise = page.waitForNavigation();
  const start = Date.now();

  await page.goto('https://youtube.com');
  await navigationPromise;

  const end = Date.now();
  const loadTime = end - start;

  console.log(`Page load time: ${loadTime}ms`);
  browser.close();
});
// function afterAll(arg0: () => Promise<void>) {
//     throw new Error('Function not implemented.');
// }

// function beforeEach(arg0: () => Promise<void>) {
//     throw new Error('Function not implemented.');
// }

// function beforeAll(arg0: () => Promise<void>) {
//     throw new Error('Function not implemented.');
// }

// function afterEach(arg0: () => Promise<void>) {
//     throw new Error('Function not implemented.');
// }

