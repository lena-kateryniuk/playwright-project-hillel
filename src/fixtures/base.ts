export * from '@playwright/test';

import { test as base } from '@playwright/test';
import { Steps } from '../steps';
import { API } from '../helpers/api';
import { APP } from '../helpers/app';


type MyFixtures = {
    steps: Steps;
    api: API;
    app: APP
};

export const test = base.extend<MyFixtures>({
    steps: async({app, api}, use) => await use(new Steps(app, api)),
    api: async({ page }, use) => await use(new API(page.request)),
    app: async({ page }, use) => await use(new APP(page))
    
  });