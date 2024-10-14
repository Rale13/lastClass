import { BaseAPI } from "./baseApi";
import { ENDPOINTS } from "../../../fixtures/http";

export class CustomersAPI extends BaseAPI {
  constructor(page, token = "") {
    super(page, token);
    this.endpoint = ENDPOINTS["CUSTOMERS"];
  }

  async getAllCustomers() {
    return await this.get(this.endpoint);
  }

  async getCustomer(id) {
    return await this.get(this.endpoint, id);
  }

  async getCustomerBillingInfo(id) {
    return await this.getBillingInfo(this.endpoint, id)
  }

  async updateCustomerBillingInfo(id, payload) {
    return await this.updateBillingInfo(this.endpoint, id, payload)
  }

  async updateCustomer(id, payload) {
    return await this.put(this.endpoint, id, payload);
  }

  async deleteCustomer(id) {
    return await this.delete(this.endpoint, id);
  }
}