import { test, expect } from '@playwright/test';
  
test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
});

test.describe("Calculator", () => {
    test("add 5 + 7", async ({ page }) => {
        await page.click('.btn:has-text("5")');
        await page.click('div.btn:has-text("+")');
        await page.click('div.btn:has-text("7")');
        await page.click('div.btn:has-text("=")');
        expect(await page.innerText('#input')).toBe('12');
    });

    test("add 5 ++ 7", async ({ page }) => {
        await page.click('.btn:has-text("5")');
        await page.click('div.btn:has-text("+")');
        await page.click('div.btn:has-text("+")');
        await page.click('div.btn:has-text("7")');
        await page.click('div.btn:has-text("=")');
        expect(await page.innerText('#input')).toBe('Error');
        await page.click('div.btn:has-text("4")');
        expect(await page.innerText('#input')).toBe('4');
    });

    test("add 4 + 6 * 2 / 4", async ({ page }) => {
        await page.click('.btn:has-text("4")');
        await page.click('div.btn:has-text("+")');
        await page.click('div.btn:has-text("6")');
        await page.click('div.btn:has-text("×")');
        await page.click('div.btn:has-text("2")');
        await page.click('div.btn:has-text("÷")');
        await page.click('div.btn:has-text("4")');
        await page.click('div.btn:has-text("=")');
        expect(await page.innerText('#input')).toBe('7');
    });
});