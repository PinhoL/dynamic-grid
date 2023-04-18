describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    const pageMock = await browser.mock("https://google.com/");
    pageMock.respond("https://webdriver.io");
    await browser.url("https://google.com");
    console.log(await browser.getTitle()); // returns "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
  });
});
