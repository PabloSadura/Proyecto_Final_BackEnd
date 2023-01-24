import fs from "fs";

export default class ProductsFile {
  constructor() {
    this.products = [];
  }
  async getAll() {
    if (fs.existsSync("products.txt")) {
      const data = await fs.readFileSync("products.txt", "utf-8");
      const products = JSON.parse(data);
      return products;
    }
    return false;
  }

  async create(obj) {
    const id = await this.#addId();
    const newProduct = { id, ...obj };
    this.products.push(newProduct);
    await fs.writeFileSync("products.txt", JSON.stringify(this.products));
    return newProduct;
  }

  async getById(productId) {
    return "";
  }

  async deleteById(productId) {
    return "";
  }
  async deleteAll() {
    return "";
  }
  async updateByID(productId, obj) {
    return "";
  }

  #getIndex = (id) => {
    return this.product.findIndex((el) => el.id === id);
  };

  #addId = () => {
    let id =
      this.products.length === 0
        ? 1
        : this.products[this.products.length - 1].id + 1;
    return id;
  };
}
