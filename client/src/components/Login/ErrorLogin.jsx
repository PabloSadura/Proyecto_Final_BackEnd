import React from "react";
import { Link } from "react-router-dom";

const ErrorLogin = () => {
  return (
    <div className="text-center mt-4">
      <h3>Usuario y/o Contraseña Incorrectos</h3>
      <Link to={"/login"}>Volver</Link>
    </div>
  );
};

export default ErrorLogin;
