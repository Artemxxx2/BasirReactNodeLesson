import { useEffect } from "react";
import ErrorComponent from "../ErrorComponent";
import LoadComponent from "../LoadComponent";
import Productdetaildata from "../Productdetaildata";

import  './ProductDetail.css'
let ProductDetail = (props) => {
  
  let URL = Number(props.match.params.id) 
  let el =  props.DetailReduser
  const {loading,error,product} = el
  useEffect(()=>{
    props.productDetails(URL)
  }, [props.productDetails])

  return (
    <div>  
       {
          loading ? (<LoadComponent></LoadComponent>):
            error ? (<ErrorComponent error = {error}></ErrorComponent>):
            (<Productdetaildata product={product} ></Productdetaildata>)
       }
 
    </div>
  );
};


export default ProductDetail;
