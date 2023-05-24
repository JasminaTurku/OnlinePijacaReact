import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/home.js";
import Login from "./pages/login/login";
import Layout from "./pages/layout/Layout.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Layout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
