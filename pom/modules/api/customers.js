import { BaseAPI } from "./baseApi";
import { ENDPOINTS } from "../../../fixtures/http";

export class CustomersAPI extends BaseAPI {
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