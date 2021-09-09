import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { productDetails } from "../actions/actionCreators";
import ErrorComponent from "../ErrorComponent";
import LoadComponent from "../LoadComponent";
import Productdetaildata from "../Productdetaildata";

import  './ProductDetail.css'
let ProductDetail = (props) => {
  let URL = Number(props.match.params.id) 
  let dispatch = useDispatch();
  let el = useSelector(state=> state.DetailReduser)
  const {loading,error,product} = el
  useEffect(()=>{
    dispatch(productDetails(URL))
  }, [dispatch])
  console.log(el);

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

let ProductDetailWithURL = withRouter(ProductDetail)
export default ProductDetailWithURL;
