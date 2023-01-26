import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [userData, setUserData] = useState({});
  const [access, setAccess] = useState(false);

  const URL = "http://localhost:8080/login";

  const validToUser = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  const accesslogin = async (e) => {
    e.preventDefault();
    const user = await axios.post(URL, userData);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        className="m-4 w-50 border p-4 rounded shadow "
        onSubmit={accesslogin}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresar su usuario"
            name="username"
            onBlur={validToUser}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onBlur={validToUser}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
        <Link to={"/register"} className="btn btn-primary ms-2">
          Registrarse
        </Link>
      </Form>
    </div>
  );
};

export default Login;
