import { withRouter } from "react-router";
import  './ProductDetail.css'
let ProductDetail = (props) => {
  let URL = Number(props.match.params.id)
  
 const AllocatedProductData =  props.data.products.filter(el=> el.id === URL)
  return (
    <div>  
        {
          AllocatedProductData.map(el => {
            return<div className='wrapper'>
            <div >{el.img}</div>
            <div className='RightSide'>
              <li>{el.name}</li>
              <li>{el.description}</li>
              <li>{el.price}</li>
            </div>
            </div>
          }
          )
        }
 
    </div>
  );
};

let ProductDetailWithURL = withRouter(ProductDetail)
export default ProductDetailWithURL;
