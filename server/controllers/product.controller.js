import ProductsServices from "../services/products.services.js";

export default class ProductsController {
  constructor() {
    this.productsService = new ProductsServices();
  }

  getAllProducts = async (req, res) => {
    const products = await this.productsService.getAllProducts();
    res.json({ products });
  };
  setOneProduct = async (req, res) => {
    const product = await this.productsService.setOneProduct(req.body);
    res.json({ message: "Producto creado con exito", product });
  };
  // deleteOneProduct = async (req, res) => {};
  // updateOne = async (req, res) => {};
}
