import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login-page';
import { goto } from '../src/pages/navigatable';

test.describe('Login Page Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach (async ({ page }) => {
    loginPage = new LoginPage(page)
  })
  
  test('All elements om the Page', async ({ page }) => {
    
    await goto(loginPage)
    await expect(page.locator('text=Welcome to Omni-dispatch TMS')).toBeVisible();
    await expect(page.locator('text=Log in to your account')).toBeVisible();
    await expect(loginPage.emeilField).toBeVisible();
    await expect(loginPage.passwordField).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(page.locator('a[href="/reset-password"]')).toContainText('Forgot password');
  })

  test ('Successful login with correct credentials', async ({ page }) => {
    await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
    await expect(page.getByRole('button', { name: 'Test User' })).toBeVisible();
  });

  test('Login with incorrect credentials', async ({ page }) => {
    await loginPage.login(process.env.EMAIL, 'aaa');
    await expect(page.locator('text=Wrong Email or password')).toBeVisible();
  })
})
  