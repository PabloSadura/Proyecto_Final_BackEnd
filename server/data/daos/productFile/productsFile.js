import fs from "fs";

export default class ProductsFile {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    if (fs.existsSync(this.path)) {
      const data = await fs.readFileSync(this.path, "utf-8");
      const products = JSON.parse(data);
      return products;
    }
    return [];
  }

  async create(obj) {
    const products = await this.getAll();
    const id = await this.#addId(products);
    const newProduct = { id, ...obj };
    products.push(newProduct);
    await fs.writeFileSync(this.path, JSON.stringify(products));
    return newProduct;
  }

  async getById(productId) {
    const products = await this.getAll();
    const index = this.#getIndex(products, productId);
    return products[index];
  }

  async deleteById(productId) {
    const products = await this.getAll();
    const index = this.#getIndex(products, productId);
    products.splice(index, 1);
    await fs.writeFileSync(this.path, JSON.stringify(products));
    return true;
  }
  async deleteAll() {
    return "";
  }
  async updateByID(productId, obj) {
    return "";
  }

  #getIndex = (array, id) => {
    return array.findIndex((el) => el.id === id);
  };

  #addId = async (array) => {
    let id = array.length === 0 ? 1 : array[array.length - 1].id + 1;
    return id;
  };
}
