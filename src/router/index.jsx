import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Purchase from "../pages/purchase/purchase";
import { BrowserRouter } from "react-router-dom";
import { homeRoute, cardRoute, loginRoute } from "./routes";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={homeRoute} element={<Home />} />
        <Route path={cardRoute} element={<Purchase />} />
        <Route path={loginRoute} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
