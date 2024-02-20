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

const db = require('pg-promise')();

Given('I check fields in the {string} table', async function (tableName, dataTable) {
  // Convert the DataTable to a usable format
  const data = dataTable.rowsHash();

  // Build the SQL query
  let query = `SELECT * FROM ${tableName} WHERE `;

  // Add each column and value to the query
  for (const column in data) {
    query += `${column} = '${data[column]}' AND `;
  }

  // Remove the trailing ' AND '
  query = query.slice(0, -5);

  // Execute the query
  const result = await db.any(query);

  // Check that at least one row was returned
  if (result.length === 0) {
    throw new Error(`No rows found in ${tableName} with the specified criteria`);
  }
});

