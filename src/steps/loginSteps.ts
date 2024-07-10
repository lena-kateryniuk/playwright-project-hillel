import { test, expect } from "@playwright/test";
import { goto } from "../pages/navigatable";
import { DriverPage } from "../pages/pages/driver-page";
import { LoginPage } from "../pages/pages/login-page";
import { step } from "../helpers/step";

export class LoginSteps {
    @step ('Login User')
    async login(loginPage: LoginPage, driversPage: DriverPage) {
            await goto(loginPage);
            await loginPage.login(process.env.EMAIL, process.env.PASSWORD)
            await loginPage.waitForLoadState();
            await goto(driversPage);
            await expect(driversPage.header.userName).toBeVisible(); 
    }
}