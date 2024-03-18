import { test, expect } from '@playwright/test';
///* 

test('test metcado Libre', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');

  await page.locator('input[name=\'as_word\']').fill('Iphone')

  await page.keyboard.press('Enter')

  await page.pause()
  // Expects page to have a heading with the name of Installation.
});