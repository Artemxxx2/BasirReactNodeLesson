import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "./mainjsContainer";
import ProductDetailContainer from "./ProductDetailContainer";
import CartScreenContainer from "./CartScrennContainer";
import { useSelector } from "react-redux";

function App() {
let cart = useSelector((state) => {
  return state.cart.cartItems;
});
return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="center">
          <div>
            <Link to="/" className="amazona">
              amazona
            </Link>
          </div>
          {cart.length > 0 ? (
            <span className="outerSpan">
              {" "}
              <Link to="/cart" className="CartLink">
                Cart
              </Link>{" "}
              <span className="innerSpan">{cart.length}</span>
            </span>
          ) : (
            <span className="outerSpan">
              {" "}
              <Link to="/cart" className="CartLink">
                Cart
              </Link>
              <span className="innerSpan">0</span>
            </span>
          )}
          <Link to="/test">Link</Link>
          <div>
            <a href="signin.html">Sign in</a>
          </div>
        </header>
        {/* <main>  */}
        <Switch>
          <Route
            path="/cart/:id?"
            render={() => <CartScreenContainer></CartScreenContainer>}
          ></Route>
          <Route
            path="/product/:id"
            render={() => <ProductDetailContainer></ProductDetailContainer>}
          ></Route>
          <Route
            path="/"
            render={() => <MainContainer></MainContainer>}
          ></Route>
        </Switch>
        {/* </main> */}
        <footer className="footer center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
