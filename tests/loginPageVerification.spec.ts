import { test, expect } from '../src/fixtures/base';
import { users } from '../src/helpers/users';
import { goto } from '../src/pages/navigatable';


test.describe('Login Page Tests', () => {
  
  test('All elements om the Page', async ({page, app}) => {
    await goto(app.loginPage)
    await expect(page.locator('text=Welcome to Omni-dispatch TMS')).toBeVisible();
    await expect(page.locator('text=Log in to your account')).toBeVisible();
    await expect(app.loginPage.emeilField).toBeVisible();
    await expect(app.loginPage.passwordField).toBeVisible();
    await expect(app.loginPage.loginButton).toBeVisible();
    await expect(page.locator('a[href="/reset-password"]')).toContainText('Forgot password');
  })

  test('Login with incorrect credentials', async ({ page, app }) => {
    await goto(app.loginPage);
    await app.loginPage.login(users.notValidUser);
    await expect(page.locator('text=Wrong Email or password')).toBeVisible();
  })
})
  