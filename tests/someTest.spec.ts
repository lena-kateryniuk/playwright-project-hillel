import { test } from '../src/fixtures/base';

test.describe('API Tests', () => {
    test.beforeEach (async ({ steps, loginPage, driverPage }) => {
        await steps.login(loginPage, driverPage)
        await steps.someStep1()
        await steps.someStep2()
      })
      
      test('Some test', async ({ page }) => {
        console.log('Hello')
      })
})