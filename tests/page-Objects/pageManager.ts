import { Page } from "@playwright/test";
import LoginPage from './loginPage';
import BackHome from './backHomePage';
import HomeIcon from './homeIcon';

export class PageManager{

    private readonly page: Page
    private readonly loginPage: LoginPage;
    private readonly backHome: BackHome;
    private readonly homeIcon: HomeIcon;

    constructor(page: Page){
        this.page = page
        this.loginPage = new LoginPage(this.page);
        this.backHome = new BackHome(this.page);
        this.homeIcon = new HomeIcon(this.page);
    }

    loginToPlaywright(){
        return this.loginPage;
    }
    
    navigateBackToHomePage(){
        return this.backHome;
    }

    clickOnHomeIcon(){
       return this.homeIcon;
    }
}