import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const NavbarMenu = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Anime FanStore</Navbar.Brand>
        <Nav className="">
          {!isAuthenticated ? (
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          ) : (
            <>
              <li className="mt-1 p-1">Bienvenido {user.name}</li>
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
