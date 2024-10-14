import { test, expect } from "@playwright/test"
import { BaseLoginAPI } from "../pom/modules/api/loginApi"
import { CustomersAPI } from "../pom/modules/api/customers"
import { VALID_LOGIN_PAYLOAD } from "../fixtures/userData";
import { generateRandomNumber } from "../fixtures/utils"

test.describe("customers API tests", () => {
    let loginAPI, customersAPI;
  
    test.beforeEach("get auth token", async ({ page }) => {
      loginAPI = new BaseLoginAPI(page);
      const loginResponse = await loginAPI.login(VALID_LOGIN_PAYLOAD);
      customersAPI = new CustomersAPI(page, loginResponse.auth.token);
    });

    test("should be able to update a customers billing info", async () => {
        const allCustomersResponse = await customersAPI.getAllCustomers();
        const numberOfCustomers = allCustomersResponse.customers.length;
        const randomId = generateRandomNumber(numberOfCustomers);
        const customerToUpdate = await customersAPI.getCustomerBillingInfo(randomId);
        const customerInfo = customerToUpdate.customer;
        const response = await customersAPI.updateCustomerBillingInfo(customerInfo.id, {
          first_name: `Updated ${customerInfo.first_name}`,
        });
        expect(customerInfo.first_name).not.toBe(response.customer.first_name);
        expect(response.customer.first_name).toBe(
          `Updated ${customerInfo.first_name}`
        );
      });

})