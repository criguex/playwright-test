import { test, expect } from '@playwright/test'
import { LoginPage } from './pageobjects/LoginPage'

test.describe('Login', () => {
  test('should login with standard user', async ({ page }) => {
    await page.goto('/')
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('standard_user', 'secret_sauce')
    await loginPage.checkSuccessfulLogin()
    await expect(page).toHaveURL(/inventory/)
  })

  test('should reject locked out user', async ({ page }) => {
    await page.goto('/')
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('locked_out_user', 'secret_sauce')
    const error = page.locator('[data-test="error"]')
    await expect(error).toContainText('Sorry, this user has been locked out')
  })

  test('should reject invalid credentials', async ({ page }) => {
    await page.goto('/')
    const loginPage = new LoginPage(page)
    await loginPage.loginWithCredentials('invalid_user', 'wrong_password')
    const error = page.locator('[data-test="error"]')
    await expect(error).toBeVisible()
  })
})
