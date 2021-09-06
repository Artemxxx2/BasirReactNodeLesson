import Rating from "./AppMaintainComonent/Rating";
import data from "./data.js";
import {Link} from "react-router-dom" 
import { BrowserRouter, Route } from "react-router-dom";
import Cart from "./Cart/cartJsComponent";

let Main = (props) =>{
return (
<div className ='wrapper'>
 { data.products.map((el) => {
    
    return (
      
      <div className="row center">
        <div className="card">
          <Link to={'/product/' + el.id} >
            <img src={el.img} alt="" />
            </Link>
          <div className="card-body">
            <Link to='/product/' ></Link>
              <h2>{el.name}</h2>
            
            <Rating rating={el.rating} reviews={el.reviews}/>
            <div className="price">{el.price}$</div>
          </div>
        </div>
      </div>
     
  )})} 
</div>
)}
export default Main