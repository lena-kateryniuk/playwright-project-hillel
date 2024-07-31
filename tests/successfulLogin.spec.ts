import { test, expect } from '../src/fixtures/autoLogin';


test ('Successful login with correct credentials', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Test User' })).toBeVisible();
});
