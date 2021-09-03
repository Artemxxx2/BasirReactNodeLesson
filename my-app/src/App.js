import "./App.css";
import data from "./data.js";
import Rating from "./AppMaintainComonent/Rating";
function App() {
  let productData = data.products.map((el) => {
    
    return (
      <div className="row center">
        <div className="card">
          <a href="product.html">
            <img src={el.img} alt="" />
          </a>
          <div className="card-body">
            <a href="product.html">
              <h2>{el.name}</h2>
            </a>
            <Rating rating={el.rating} reviews={el.reviews}/>
            <div className="price">{el.price}$</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="grid-container">
      <header className="center">
        <div>
          <a href="index.html" className="amazona">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>
      <main>{productData}</main>
      <footer className="footer center">All rights reserved</footer>
    </div>
  );
}

export default App;
