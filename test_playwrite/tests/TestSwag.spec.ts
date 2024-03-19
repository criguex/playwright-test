import { test } from '@playwright/test'
import { LoginPage } from './pageobjects/LoginPage';


test('swag test login standard_user', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    const actor = new LoginPage(page)
    await actor.loginWithCredentials('standard_user','secret_sauce')
    await actor.checkSuccessfulLogin()
});