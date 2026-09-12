import { test, expect } from '@playwright/test'
import { LoginPage } from './pageobjects/LoginPage'
import { InventoryPage } from './pageobjects/InventoryPage'

test.describe('Inventory Page', () => {
  let inventoryPage: InventoryPage

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('standard_user', 'secret_sauce')
    inventoryPage = new InventoryPage(page)
    await inventoryPage.assertOnInventoryPage()
  })

  test('should display 6 products', async () => {
    const count = await inventoryPage.getProductCount()
    expect(count).toBe(6)
  })

  test('should sort products A to Z by default', async () => {
    await inventoryPage.sortBy('az')
    const prices = await inventoryPage.getProductPrices()
    const sorted = [...prices].sort((a, b) => a - b)
    expect(prices).not.toEqual(sorted) // prices unsorted when sorted by name
  })

  test('should sort products by price low to high', async () => {
    await inventoryPage.sortBy('lohi')
    const prices = await inventoryPage.getProductPrices()
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1])
    }
  })

  test('should sort products by price high to low', async () => {
    await inventoryPage.sortBy('hilo')
    const prices = await inventoryPage.getProductPrices()
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeLessThanOrEqual(prices[i - 1])
    }
  })

  test('should add product to cart and update badge', async () => {
    await inventoryPage.addProductToCartByName('Sauce Labs Backpack')
    const badge = await inventoryPage.getCartItemCount()
    expect(badge).toBe('1')
  })
})
