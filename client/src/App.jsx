import NavbarMenu from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorLogin from "./components/Login/ErrorLogin";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ErrorRegister from "./components/Register/ErrorRegister";
import Products from "./components/Products/Products";
import AddProducts from "./components/Products/AddProducts/AddProducts";
import { UserContext, UserProvider } from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/addProducts" element={<AddProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/errorRegister" element={<ErrorRegister />} />
          <Route path="/errorLogin" element={<ErrorLogin />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
