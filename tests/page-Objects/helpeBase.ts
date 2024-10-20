import { Page } from '@playwright/test'

export class HelperBase{


    // please store all the reusable components here

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async waitForNumberOfSeconds(timeInSecond: number){
        await this.page.waitForTimeout(timeInSecond * 1000);
    }
}