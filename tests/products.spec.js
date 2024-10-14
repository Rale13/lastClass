import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/modules/ui/loginPage";
import { Dashboard } from "../pom/modules/ui/dashboard";
import { Headers } from "../pom/modules/ui/headers"
import { generateUserCredentials } from "../fixtures/userData";
import { URLS } from "../fixtures/pages";

let dashboard, loginPage, headers, cards;
const { registeredEmail, registeredPassword } = generateUserCredentials();

test.describe("products tests", () => {
  test.beforeAll("log in", async ({ browser }) => {
    const page = await browser.newPage();
    await page.goto(URLS["LOGIN"]);
    //instantiate pom's
    loginPage = new LoginPage(page);
    dashboard = new Dashboard(page);
    headers = new Headers(page);
    //log in
    loginPage.login(registeredEmail, registeredPassword);
    //assert that all elements are loaded
    await page.waitForURL(URLS["DASHBOARD"]);
    await page.waitForSelector(headers.loader, { state: "hidden" });
    cards = dashboard.productLocator;
  });

    test("put products in the cart", async () => {
    const cardBtns = await dashboard.getProductElements(
      cards, dashboard.productCartBtn
    )
    cardBtns.forEach((cardBtn) => {
      expect(cardBtn).toBeTruthy();
    });
  });

});