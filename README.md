SETUP INSTALLATION:

Axios Installation:
npm install axios
npm install --save-dev @types/axios

Command for running API:
npx ts-node api.ts

MySQL2 Installation:
npm install mysql2
npm install mysql2 @types/mysql2 --save


Command for running SQL DB:
npx ts-node sqldb.test.ts

Install Playwright:
npm install playwright

Command to execute Playwright:
npx ts-node google.test.ts
npx playwright test github-search.test.ts 

--> need to run to download Chromium
npx playwright install

Setup Allure:
npm i -D playwright @playwright/test
npm i -D experimental-allure-playwright
npm i -D allure-commandline

sudo npm install playwright @playwright/test experimental-allure-playwright allure-commandline --save-dev

Setting-up new Repo:
VSCODE: 
- Stage your files for commit:
    - git add .
- git remote add origin https://github.com/Karlolokal/Karlo_F3_Typescript-Playwright
    - git remote add origin <repository_url>
- git commit -m "Initial commit"
- git push -u origin main

// debug --> git remote remove origin
