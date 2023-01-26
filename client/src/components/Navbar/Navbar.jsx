import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  const [userApp, setUserApp] = useState("");

  const URL = "http://localhost:8080/";
  useEffect(() => {
    async function userLogin() {
      const resp = await axios.get(URL);
      const { user } = resp.data;
      setUserApp(user);
    }
    userLogin();
  }, []);

  const logout = () => {
    setUserApp("");
  };
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Anime FanStore</Navbar.Brand>
        <Nav className="">
          {!userApp ? (
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          ) : (
            <>
              <li className="mt-1 p-1">Bienvenido</li>
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
