import dao from "../data/daos/factory.js";

export default class ProductsServices {
  constructor() {
    this.dao = dao;
  }

  getAllProducts = async () => {
    const products = await this.dao.getAll();
    return products;
  };
  setOneProduct = async (obj) => {
    const product = await this.dao.create(obj);
    return product;
  };
}
