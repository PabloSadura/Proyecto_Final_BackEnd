import { Router } from "express";
import ProductsController from "../controllers/product.controller.js";
const productRouter = Router();

export default class ProductsRouter {
  constructor() {
    this.productsController = new ProductsController();
  }

  init() {
    productRouter.get("/", this.productsController.getAllProducts);
    productRouter.post("/", this.productsController.setOneProduct);
    productRouter.get("/:id", this.productsController.getById);
    productRouter.delete("/:id", this.productsController.deleteOneProduct);
    // productRouter.put("/:id", this.productsController.updateOne);
    return productRouter;
  }
}
