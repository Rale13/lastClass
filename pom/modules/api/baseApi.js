export class BaseAPI {
  constructor(page, token = "") {
    this.page = page;
    this.token = token;
  }

  async post(endpoint, payload) {
    const response = await this.page.request.post(endpoint, {
      headers: this.getHeaders(),
      data: payload,
    });

    const responseJson = await response.json();
    return responseJson;
  }

  async put(endpoint, id, payload) {
    const response = await this.page.request.put(`${endpoint}/${id}`, {
      headers: this.getHeaders(),
      data: payload,
    });

    const responseJson = await response.json();

    return responseJson;
  }

  async get(endpoint, id = "") {
    const response = await this.page.request.get(`${endpoint}/${id}`, {
      headers: this.getHeaders(),
    });

    const responseJson = await response.json();

    return responseJson;
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