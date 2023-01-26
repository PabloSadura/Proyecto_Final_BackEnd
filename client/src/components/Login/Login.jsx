import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form className="m-4 w-50 border p-4 rounded shadow">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresar su email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
