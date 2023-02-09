import React from "react";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [regiterEmail, setRegisterEmail] = useState("");
  const [regiterUsername, setRegisterUsername] = useState("");
  const [regiterPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const URL = "http://localhost:8080/";

  const register = async () => {
    const user = {
      username: regiterUsername,
      email: regiterEmail,
      password: regiterPassword,
    };
    const newUser = await axios.post(`${URL}register`, user);
    console.log(newUser.data);
  };
  const login = async () => {
    const user = {
      username: loginUsername,
      password: loginPassword,
    };
    const newUser = await axios.post(`${URL}login`, user);
    console.log(newUser.data);
  };

  const getUser = async () => {
    const user = await axios.get(URL);
  };

  return (
    <div>
      <h1>Registrarse</h1>
      <input
        type="text"
        name="username"
        placeholder="Ingresar tu Usuario"
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Ingresar tu email"
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Ingresar tu password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>Submit</button>
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        placeholder="Ingresar tu usuario"
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Ingresar tu password"
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={login}>Submit</button>
      <button onClick={getUser}>GetUser</button>
    </div>
  );
};

export default Register;
