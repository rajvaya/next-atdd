import { test, expect } from "@playwright/test";

test("Check Logo is Loading ", async ({ page }) => {
  await page.goto("http://localhost:3000");
    const logo = await page.waitForSelector("img")
});


test("Check Login title", async ({ page }) => {
    await page.goto("http://localhost:3000");

    console.log(page.locator("text=Login"));
    expect(page.locator("text=Login"))
    
});
