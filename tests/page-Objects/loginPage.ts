import { Locator, Page, expect } from '@playwright/test'
import { HelperBase } from './helpeBase'

export default class LoginPage extends HelperBase{
 
    readonly getStarted: Locator
    readonly testConfiguration: Locator

    constructor(page: Page){
        super(page)
        this.getStarted = page.getByRole('link', { name: 'Get started' });
        this.testConfiguration = page.getByText('Test configuration');
    }

     async launchPlaywrightURL(URL: string){
        await this.page.goto(URL);
        await this.waitForNumberOfSeconds(2);
    }

    async playwrightTest(){
        await this.getStarted.click();
        await expect(this.testConfiguration).toBeVisible();
        console.log("on home page")
        console.log("testConfiguration is visible")
    }
   
}