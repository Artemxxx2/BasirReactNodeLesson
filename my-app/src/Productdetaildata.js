import productDetailsCss from "./productDetailsCss.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
let Productdetaildata = (props) => {
  const { id, price, description, img, name, rating, reviews, countInStock  } = props.product;
  const [qty,setQTY] = useState(1)
  let dispatch = useDispatch()
  let state = useSelector(state => state)
  console.log(state, props);
  const addEventHandler = () =>{
    props.history.push(`/cart/${id}?qty=${qty}`)
  }
  // useEffect =(() =>{

  // },[])
  return (
    <div className={productDetailsCss.wrapper}>
      <div className={productDetailsCss.imgwrapper}>
        <img className={productDetailsCss.img} src={img} alt="shoes" />{" "}
      </div>
      <div className={productDetailsCss.detailwrapper}>
        <ul>
          <li className={productDetailsCss.title}>{name}</li>
          <li>
            {rating} <span>{reviews} reviews</span>{" "}
          </li>
          <li>Price:{price}$</li>
          <li>description:</li>
          <li>{description}</li>
        </ul>
      </div>
      <div className={productDetailsCss.orderboxfinal}>
      <div className={productDetailsCss.orderbox}>
        <div className={productDetailsCss.firstBlock}>
          <div>price</div>
          <div>${price}</div>
        </div>
        <div className={productDetailsCss.secondBlock}>
          <div>status</div>
          <div>in Stock</div>
        </div>
        <div className={productDetailsCss.thirdBlock}>
        <div>QTY</div>
         {
           countInStock > 0 ?
           <div className={productDetailsCss.row}>
             <div className={productDetailsCss.QTY}>
              <select value={qty} onChange={e=>{
                setQTY(e.target.value)
              }}>
                {
                  [...Array(countInStock).keys()].map(x=>{
                   return <option key={x+1} value={x+1}>{x+1}</option>
                  })
                  
                }
              </select>
             </div>
           </div>
           :
           <div className="p">ad</div>

         }
        </div>
      </div>
      <div className={productDetailsCss.btn}>
        {
          countInStock > 0 ?
            <a href='#' onClick={addEventHandler}>Add To Cart</a>:
            <p>Product is not in stock</p>
          
        }
        </div>
      </div>
    </div>
  );
};
export default Productdetaildata;
