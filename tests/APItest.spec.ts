import { expect, test } from '../src/fixtures/base';
import { goto } from '../src/pages/navigatable';
import { LoginPage } from '../src/pages/pages/login-page';
import { TruckPage } from '../src/pages/pages/trucks-page';

test.describe('API Tests', () => {    
  test.beforeEach(async ({ steps, loginPage, driverPage }) => {
    await steps.login(loginPage, driverPage);
  })


  test('Correct email and name in me request', async ({ api }) => {
    const { name, email } = await api.get('me')
    await expect(name).toBe('Test User'); 
    await expect(email).toBe(process.env.EMAIL);
  })

  test('Correct number of drivers in a table', async ({ page, api }) => {
    const driversInTable = await page.locator('[class="v-data-table__tr"]').count();
    const { items } = await api.get('drivers')
    await expect(items.length).toBe(driversInTable);
  })

  test('Correct number of trucks in a table', async ({ page, truckPage, api }) => {
    await goto(truckPage);
    const trucksInTable = await page.locator('[class="v-data-table__tr"]').count();
    const { items } = await api.get('trucks');
    await expect(items.length).toBe(trucksInTable);
  })
})