import { test, expect } from '@playwright/test';
import { ParabankLoginPage } from '../../page-objects/ParabankLoginPage';

test('Login with invalid credentials should fail', async ({ page }) => {
    const loginPage = new ParabankLoginPage(page);
    await loginPage.goto();
    await loginPage.login('randomUser', 'randomPass');
    await expect(loginPage.errorMessage).toHaveText('The username and password could not be verified.');
  });