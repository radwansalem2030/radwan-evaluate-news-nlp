// Import the js file to test
const { checkUrl } = require("../src/client/js/urlChecker");

test("Testing handleSubmit exists", () => {
    expect(checkUrl).toBeDefined();
});

test("URL is valid", () => {
    const urlForCheck = checkUrl("https://en.wikipedia.org/wiki/YIFY");
    expect(urlForCheck).toBe(true);
});

test("URL is invalid", () => {
    const urlForCheck = checkUrl("Iamme.");
    expect(urlForCheck).toBe(false);
})