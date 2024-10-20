import { test } from '@playwright/test'
import { PageManager } from '../page-Objects/pageManager'

test.beforeEach("Open Playwright Web Application {string} ", async ({page}) => {
    const pm = new PageManager(page);
    await pm.loginToPlaywright().launchPlaywrightURL("https://playwright.dev/");
})

test('P1: Critical Test Case', async function ({page}) {
    const pm = new PageManager(page);
    await pm.loginToPlaywright().playwrightTest();
    await page.waitForTimeout(2000);
})

test.afterEach('parametrized methods', async ({page}) => {
    const pm = new PageManager(page);
    
    await pm.clickOnHomeIcon().navigateBackToHomePage();
    await page.waitForTimeout(2000)
    await pm.navigateBackToHomePage().BackHome();
    await page.waitForTimeout(2000)
})