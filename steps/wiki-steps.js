import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

When("I search for {string}", async function (query) {
    await this.page.locator("#searchInput").fill(query);
    await this.page.keyboard.press("Enter");
});

Then("I see {string} in the url", async function (query) {
    
    // // check url for every quarter secound
    // //if it contains, it will stop and do asserion within 5 sec
    // //if it does not contain and 10 attempts happen,
    // const timeout = 5000;

    // while (!this.page.utl().includes(query)) {
    //     await this.page.waitForTimeout(250);
    //     timeout -= 250;

    //     if (timeout === 0) break;
    // }
    // expect(this.page.url()).toContain(query);

    await this.page.waitForURL(`**/${query}`);
});

Then("I see {string} in the title", async function (query) {
    expect(await this.page.title()).toContain(query);
});

Then("I see {string} in the main heading", async function (query) {
    await expect(await this.page.getByRole("heading", { name: query }).first()).toBeVisible();
});
