import ProductsServices from "../services/products.services.js";

export default class ProductsController {
  constructor() {
    this.productsService = new ProductsServices();
  }

  getAllProducts = async (req, res) => {
    try {
      const products = await this.productsService.getAllProducts();
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  setOneProduct = async (req, res) => {
    try {
      const product = await this.productsService.setOneProduct(req.body);
      res.status(200).json({ message: "Producto creado con exito" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
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
  updateOne = async (req, res) => {
    const { id } = req.params;
    const product = await this.productsService.updateByID(id, req.body);
    res.json({ message: "Producto Actualizado con exito", product });
  };
}
