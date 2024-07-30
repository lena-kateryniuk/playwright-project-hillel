import { Page } from "@playwright/test";
import { LoginPage } from "../pages/pages/login-page";
import { DriverPage } from "../pages/pages/driver-page";
import { TruckPage } from "../pages/pages/trucks-page";


export class APP {
  constructor(readonly page: Page) {}

  readonly loginPage = new LoginPage(this.page);
  readonly driversPage = new DriverPage(this.page);
  readonly trucksPage = new TruckPage(this.page)
}