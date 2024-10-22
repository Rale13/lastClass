import { BillingInfoAPI } from "./billingInfo";
import { ENDPOINTS } from "../../../fixtures/http";

export class CustomersAPI extends BillingInfoAPI {
  constructor(page, token = "") {
    super(page, token);
    this.endpoint = ENDPOINTS["CUSTOMERS"];
  }

  async getCustomerBillingInfo(id) {
    return await this.getBillingInfo(this.endpoint, id)
  }

  async updateCustomerBillingInfo(id, payload) {
    return await this.updateBillingInfo(this.endpoint, id, payload)
  }
}