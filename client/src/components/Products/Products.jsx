import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import CardsProducts from "./CardsProducts/CardsProducts";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { isAuthenticated } = useAuth0();
  const URL = "http://localhost:8080/products/";

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get(URL);
      const { products } = resp.data;
      setProducts(products);
    }
    fetchData();
  }, []);

  if (isAuthenticated) {
    return (
      <>
        <div className="container">
          <div className="row mt-4 justify-content-between ">
            {products.map((el) => (
              <CardsProducts product={el} key={el._id} />
            ))}
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default Products;
