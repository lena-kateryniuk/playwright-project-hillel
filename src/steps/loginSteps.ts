import { expect } from "@playwright/test";
import { goto } from "../pages/navigatable";
import { step } from "../helpers/step";
import { BaseSteps } from "./baseStep";
import { users } from "../helpers/users";

export class LoginSteps extends BaseSteps{
    @step ('Login User')
    async login() {
            await goto(this.app.loginPage);
            await this.app.loginPage.login(users.testUser)
            await this.app.loginPage.waitForLoadState();
            await goto(this.app.driversPage);
            await expect(this.app.driversPage.header.userName).toBeVisible(); 
    }
}