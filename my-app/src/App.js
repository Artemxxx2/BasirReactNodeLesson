import "./App.css";
import {Link} from "react-router-dom" 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Cart/cartJsComponent";
import Main from './main'
import ProductDetail from "./ProductDetails/ProductDetail";
import data from "./data.js";

function App() {
  return (  
    <BrowserRouter>
    <div className="grid-container">
    <header className="center">
      <div><a href="index.html" className="amazona">amazona</a></div>
      <Link to='/cart'>Cart</Link>
      <Link to= '/test'>Link</Link>
      <div>
        <a href="signin.html">Sign in</a>
      </div>
    </header>
    <main> 
    <Switch>
     <Route  path='/cart' render={()=><Cart></Cart>}></Route>
     <Route  path='/product/:id' render={()=><ProductDetail data={data}></ProductDetail>}></Route>
     <Route  path='/' render={()=><Main></Main>}></Route>
     </Switch>
    </main>
    <footer className="footer center">All rights reserved</footer>
  </div>
  </BrowserRouter>  
  );
}

export default App;
