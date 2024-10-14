// @ts-check
const { test, expect } = require('@playwright/test');

test('intersection-observer-test', async ({ page }) => {
  await page.goto('https://kairi003.github.io/intersection-observer-test/');
  await expect(page.getByTestId('target-visible')).toBeVisible();
});

test('test-facebook', async ({ page }) => {
  await page.goto('https://www.facebook.com/karaoke.utahiroba');
  await page.locator('[aria-label="閉じる"]').click();
  await expect(page.locator('[aria-posinset="1"]')).toHaveCount(1);
  await expect(page.locator('[aria-posinset="2"]')).toHaveCount(1);
});
