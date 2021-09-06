import "./App.css";
import {Link} from "react-router-dom" 
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./Cart/cartJsComponent";
import Main from './main'
function App() {
  
  return (  
     <div className="grid-container">
    <header className="center">
      <div><a href="index.html" className="amazona">amazona</a></div>
      <div>
        <a href="signin.html">Sign in</a>
      </div>
    </header>
    <main> 
    <BrowserRouter>
      <Route  path='/cart' exact component={Cart}></Route>
     <Link to='/'></Link>
     <Route  path='/' exact component={Main}></Route>
  
  </BrowserRouter>
    </main>
    <footer className="footer center">All rights reserved</footer>
  </div>  
  );
}

export default App;
