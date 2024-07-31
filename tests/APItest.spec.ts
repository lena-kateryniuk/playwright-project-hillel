import { expect, test } from '../src/fixtures/autoLogin';
import { goto } from '../src/pages/navigatable';

test.describe('API Tests', () => {    

  test('Correct email and name in me request', async ({ api, app }) => {
    await goto(app.driversPage);
    const { name, email } = await api.get('me')
    expect(name).toBe('Test User'); 
    expect(email).toBe("test@gmail.com");
  })

  test('Correct number of drivers in a table', async ({ page, api, app }) => {
    await goto(app.driversPage);
    await page.waitForSelector('[class="v-data-table__tr"]');
    const driversInTable = await page.locator('[class="v-data-table__tr"]').count();
    const { items } = await api.get('drivers')
    expect(items.length).toBe(driversInTable);
  })

  test('Correct number of trucks in a table', async ({ page, app, api }) => {
    await goto(app.trucksPage);
    await page.waitForSelector('[class="v-data-table__tr"]');
    const trucksInTable = await page.locator('[class="v-data-table__tr"]').count();
    const { items } = await api.get('trucks');
    expect(items.length).toBe(trucksInTable);
  })

  test('Replace digits with emojis in response Dims & payload', async ({ app, page }) => {
    const emojiMap = ['😀', '🫠', '😱', '🤤', '🤥', '🥵', '😎', '🤢', '👺', '👽️'];
    
    await page.route('**/api/v1/trucks?*', async route => {
      const response = await route.fetch();
      const json = await response.json();
      function changeNumber (number) {
        return number.toString().split('').map((item) => emojiMap[item]).join('');
      } 

      json.items = json.items.map((item) => {
        if (item.trailer) {
          item.trailer.payload = changeNumber(item.trailer.payload);
          item.trailer.length = changeNumber(item.trailer.length);
          item.trailer.min_width = changeNumber(item.trailer.min_width);
          item.trailer.min_height = changeNumber(item.trailer.min_height);
        }
        return item;
      });

      await route.fulfill({ 
        response, 
        json 
      });
    });

    await goto(app.trucksPage);
    await page.waitForSelector('table');
    await page.screenshot({ path: 'screenshot.png' });
  });

})