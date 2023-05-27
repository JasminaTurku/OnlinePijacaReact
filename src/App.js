import { Switch, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Layout from "./pages/cart/Cart";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Layout />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
