export class Dashboard {
    constructor(page) {
      this.page = page;
      this.filter = page.locator(".layout-menu");
      this.productLocator = page.locator("[test-id='product-card']");
      this.productTitle = page.locator("h5");
      this.productCartBtn = page.locator("button[class='p-button p-component']");
      this.paginationLocator = page.locator(".paginated");
    }
  
    //extract individual elements from a product
    getProductElements = async (productLocator, elementLocator) => {
      const productCards = productLocator;
      const cardCount = await productCards.count();
      const elements = [];
      for (let i = 0; i < cardCount; i++) {
        const element = productCards.nth(i).locator(elementLocator);
        elements.push(element);
      }
      return elements;
    };
  }