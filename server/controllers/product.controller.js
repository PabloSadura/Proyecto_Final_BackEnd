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
  getById = async (req, res) => {
    const { id } = req.params;
    const product = await this.productsService.getById(Number(id));
    res.json({ product });
  };
  deleteOneProduct = async (req, res) => {
    const { id } = req.params;
    const product = await this.productsService.deleteById(id);
    res.json({ message: "Se elimino correctamente", product: product });
  };
  // updateOne = async (req, res) => {};
}
