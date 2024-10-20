
import { Locator, Page, expect } from '@playwright/test'
import { HelperBase } from './helpeBase'

export default class BackHome extends HelperBase{

    readonly asstertHomePage: Locator

    constructor(page: Page){
        super(page)
        this.asstertHomePage = page.locator("//a[@href='/docs/intro']")
    }
    
    async BackHome(){  
        await expect(this.page).toHaveURL('https://playwright.dev/', {timeout: 3000});
        console.log("verified that I came back to home")
        await this.waitForNumberOfSeconds(2);
    }
    
}

