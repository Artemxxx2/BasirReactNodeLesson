import "./App.css";
import {Link} from "react-router-dom" 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Cart/cartJsComponent";
import MainContainer from "./mainjsContainer";
import ProductDetail from './ProductDetails/ProductDetail'
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
     <Route  path='/product/:id' render={()=><ProductDetail></ProductDetail>}></Route>
     <Route  path='/' render={()=><MainContainer></MainContainer>}></Route>
     </Switch>
    </main>
    <footer className="footer center">All rights reserved</footer>
  </div>
  </BrowserRouter>  
  );
}

export default App;
