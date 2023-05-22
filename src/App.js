import style from "./App.module.css";
import Header from "./pages/components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.js";
import FooterComponents from "./pages/components/FooterComponents";
import { useSelector, useDispatch } from "react-redux";
import Login from "./pages/login/login";
import { selectLogin } from "./redux/auth/slice";
import Products from "./pages/components/Products";
import Cart from "./pages/components/Cart";
import CartItems from "./pages/components/CartItems";
import Layout from "./pages/layout/Layout.js";

function App() {
  const login = useSelector(selectLogin);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);

  return (
    <div className={style.container}>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* <Product /> */}
        </Route>
        <Route path="/cart">
          <div>
            <Layout />
          </div>
        </Route>
        <Route path="/login">{login ? <Login /> : <Home />}</Route>
      </Switch>
    </div>
  );
}

export default App;
