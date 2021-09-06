import Rating from "./AppMaintainComonent/Rating";
import data from "./data.js";

let Main = (props) =>{
return (
<div className ='wrapper'>
{ data.products.map((el) => {
    
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
  
  )})}
</div>
)}
export default Main