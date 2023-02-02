import React from "react";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProducts = () => {
  const [product, setProduct] = useState({});
  const URL = "http://localhost:8080/products";

  const addProduct = async (e) => {
    e.preventDefault();
    setProduct({
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      img: e.target.img.value,
    });
    const resp = await axios.post(URL, product);
    alert(resp.data);
    cleanForm(e);
  };
  const alert = (item) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${item.message}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const cleanForm = (e) => {
    e.target.name.value = "";
    e.target.description.value = "";
    e.target.price.value = 0;
    e.target.stock.value = 0;
    e.target.img.value = "";
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <form
          className="d-flex flex-column justify-content-center border rounded shadow p-4 mt-4"
          onSubmit={addProduct}
        >
          <label id="name" className="fw-bold">
            Titulo del producto
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingresar titulo"
          />
          <label id="description" className="mt-3 fw-bold">
            Descripción
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
          <label id="price" className="mt-3 fw-bold">
            Valor del Producto
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Ingresar Importe"
          />
          <label id="stock" className="mt-3 fw-bold">
            Stock del Producto
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            placeholder="Ingresar Stock"
          />
          <label id="img" className="mt-3 fw-bold">
            Adjuntar imagenes
          </label>
          <input type="file" name="img" id="img" className="" />
          <button type="submit" className="btn btn-secondary mt-4">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
