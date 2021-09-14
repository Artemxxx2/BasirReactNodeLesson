import "./App.css";
import {Link} from "react-router-dom" 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "./mainjsContainer";
import ProductDetailContainer from "./ProductDetailContainer";
import CartScreen from "./CartScreen";
import CartScreenContainer from "./CartScrennContainer";
function App() {
  return (  
    <BrowserRouter>
    <div className="grid-container">
    <header className="center">
      <div><Link to='/' className="amazona">amazona</Link></div>
      <Link to='/cart'>Cart</Link>
      <Link to= '/test'>Link</Link>
      <div>
        <a href="signin.html">Sign in</a>
      </div>
    </header>
    {/* <main>  */}
    <Switch>
     <Route  path='/cart/:id?' render={()=><CartScreenContainer></CartScreenContainer>}></Route>
     <Route  path='/product/:id' render={()=><ProductDetailContainer></ProductDetailContainer>}></Route>
     <Route  path='/' render={()=><MainContainer></MainContainer>}></Route>
     </Switch>
    {/* </main> */}
    <footer className="footer center">All rights reserved</footer>
  </div>
  </BrowserRouter>  
  );
}

export default App;
