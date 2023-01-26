import React from "react";
import { Card, Button } from "react-bootstrap";

const CardsProducts = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-2 p-1">
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title className="text-center">{product.name}</Card.Title>
        <div className="d-flex justify-content-between">
          <Card.Text>$ {product.price}</Card.Text>
          <Card.Text>Stock: {product.stock}</Card.Text>
        </div>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default CardsProducts;
