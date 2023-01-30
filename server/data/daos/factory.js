import ProductsFile from "./productFile/productsFile.js";
import ProductosMem from "./productMem/productsMem.js";
import ProductMongo from "./productDB/productsBD.js";
import { productsModel } from "../models/products.model.js";

let dao;

const variableEntorno = "FILE";

switch (variableEntorno) {
  case "FILE":
    dao = new ProductsFile("products.txt");
    break;
  case "MEM":
    dao = new ProductosMem();
    break;
  default:
    dao = new ProductMongo(productsModel);
    break;
}

export default dao;
