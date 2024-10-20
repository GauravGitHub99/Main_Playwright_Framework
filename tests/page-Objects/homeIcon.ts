import { Locator, Page } from '@playwright/test'
import { HelperBase } from './helpeBase';

export default class HomeIcon extends HelperBase{

    readonly homePage: Locator

    constructor(page: Page){
        super(page)
        this.homePage = page.locator("//a[@aria-label='Home page']");
    }

    async navigateBackToHomePage(){
        await this.homePage.click();
        console.log("click on home symbol to navigate back")
        await this.waitForNumberOfSeconds(2);
    }

}