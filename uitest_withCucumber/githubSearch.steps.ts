// import { chromium } from 'playwright';
const { chromium } = require('playwright');
// import { Given, When, Then } from '@cucumber/cucumber';
const { Given, When, Then } = require('@cucumber/cucumber');

let page;
let browser;

Given('I am on the GitHub homepage', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://github.com');
});

When('I fill in the search field', async () => {
  await page.fill('id=user_email', 'test@test.com');
});

Then('I should see the search results', async () => {
  // Replace with the actual button selector
  await page.click('.btn-mktg'); //class identifier used
  await browser.close();
});
