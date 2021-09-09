import {Link} from "react-router-dom" 
import { useEffect } from "react";
import LoadComponent from "./LoadComponent";
import ErrorComponent from "./ErrorComponent";
import { listProducts } from "./actions/actionCreators";
import maincss from './main.module.css'

let Main = (props) =>{
  const {loading,error,products} = props.productList
    useEffect(()=>{  
      props.listProducts()
    }, [listProducts])
    
return (
<div className ={maincss.wrapper}>

  {loading ? (<LoadComponent></LoadComponent>):
  error ? (<ErrorComponent error = {error}></ErrorComponent>):
  products.map((el) => {
    
    return (
      
      <div className={maincss.gridobject}>
        <div className="card">
          <Link to={'/product/' + el.id} >
            <img src={el.img} alt="" />
            </Link>
          <div className="card-body">
            <Link to='/product/' ></Link>
              <h2>{el.name}</h2>
            
              <span>
        <i
          className={
            el.rating >= 1
              ? "fa fa-star"
              : el.rating >= 0.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            el.rating >= 2
              ? "fa fa-star"
              : el.rating >= 1.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            el.rating >= 3
              ? "fa fa-star"
              : el.rating >= 2.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            el.rating >= 4
              ? "fa fa-star"
              : el.rating >= 3.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            el.rating >= 5
              ? "fa fa-star"
              : el.rating >= 4.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <div></div>
      </span>
      <span className='review'>{el.reviews} reviews</span>
            <div className="price">{el.price}$</div>
          </div>
        </div>
      </div>
     
  )})
}
  
</div>
)}
export default Main