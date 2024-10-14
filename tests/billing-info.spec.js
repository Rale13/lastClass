import { test, expect } from "@playwright/test";
import { BaseLoginAPI } from "../pom/modules/api/loginApi";
import { CustomersAPI } from "../pom/modules/api/customers";
import { VALID_LOGIN_PAYLOAD } from "../fixtures/userData";
import {generateRandomString } from "../fixtures/utils"

test.describe("customers API tests", () => {
  let loginAPI, customersAPI, userId;

  test.beforeEach("get auth token", async ({ page }) => {
    loginAPI = new BaseLoginAPI(page);
    const loginResponse = await loginAPI.login(VALID_LOGIN_PAYLOAD);
    userId = loginResponse.user.id;
    customersAPI = new CustomersAPI(page, loginResponse.auth.token);
  });

  test("should be able to update a customers billing info", async () => {
    //const cardholderName = generateRandomString();
    const customerToUpdate = await customersAPI.getCustomerBillingInfo(userId);
    const response = await customersAPI.updateCustomerBillingInfo(userId, {
            cardholder: `New ${customerToUpdate.billing_info.cardholder}`,
            card_type: "Visa",
            card_number: "4111111131111111",
            cvv: 911,
            card_expiration_date: "12/24",
    });
    console.log(response)
    expect(customerToUpdate.billing_info.cardholder).not.toBe(response.billing_info.cardholder);
  });
});
