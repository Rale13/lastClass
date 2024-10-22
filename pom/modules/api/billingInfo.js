export class BillingInfoAPI {
    constructor(page, token = "") {
      this.page = page;
      this.token = token;
    }
  
    async getBillingInfo(endpoint, id) {
      const response = await this.page.request.get(
        `${endpoint}/${id}/billing-info`,
        {
          headers: this.getHeaders(),
        }
      );
  
      const responseJson = await response.json();
  
      return responseJson;
    }
  
    async updateBillingInfo(endpoint, id, payload) {
      const response = await this.page.request.put(
        `${endpoint}/${id}/billing-info`,
        {
          headers: this.getHeaders(),
          data: payload,
        }
      );
  
      const responseJson = await response.json();
  
      return responseJson;
    }
  
    //getters
    getToken() {
      return this.token;
    }
  
    getHeaders() {
      return {
        Accept: "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      };
    }
  }
  