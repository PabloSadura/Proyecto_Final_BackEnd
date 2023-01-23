import fs from "fs";

export default class ProductsFile {
  constructor() {
    this.path = path;
  }

  async getAll() {
    return "";
  }

  async create(product) {
    return "";
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
      this.product.length === 0
        ? 1
        : this.product[this.product.length - 1].id + 1;
    return id;
  };
}
