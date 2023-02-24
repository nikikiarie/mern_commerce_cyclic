import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes,Redirect, Route, Navigate, useNavigate } from "react-router-dom";
import Cart from "./pages/Cart";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";


function App() {
  const user = useSelector((state)=>state.user.user)
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={user ? <Cart /> :<Navigate to={'/login'}/>} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:cat" element={<ProductList />} />
        <Route path="/success" element={<Success />} />


      </Routes>
    </Router>
  );
}

export default App;
