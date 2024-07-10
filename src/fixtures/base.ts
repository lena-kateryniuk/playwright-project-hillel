export * from '@playwright/test';

import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/pages/login-page';
import { DriverPage } from '../pages/pages/driver-page';
import { TruckPage } from '../pages/pages/trucks-page';
import { Steps } from '../steps';


type MyFixtures = {
    loginPage: LoginPage;
    driverPage: DriverPage;
    truckPage: TruckPage;
    steps: Steps;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => await use(new LoginPage(page)),
    driverPage: async ({ page }, use) => await use(new DriverPage(page)),
    truckPage: async ({ page }, use) => await use(new TruckPage(page)),
    steps: async({}, use) => await use(new Steps())
  });