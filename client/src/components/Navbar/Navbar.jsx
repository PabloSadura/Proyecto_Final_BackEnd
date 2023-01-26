import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
const NavbarMenu = () => {
  const [user, setUser] = useState("Pablo");

  const logout = () => {
    setUser("");
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Anime FanStore</Navbar.Brand>
        <Nav className="">
          {!user ? (
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          ) : (
            <>
              <li className="mt-1 p-1">Bienvenido {user}</li>
              <Nav.Link href="/addProducts">Agregar Productos</Nav.Link>
              <Button
                variant="ligth"
                className="ms-3 p-1 border"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
