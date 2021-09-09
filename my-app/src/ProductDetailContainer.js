import { connect } from "react-redux";
import { withRouter } from "react-router";
import { productDetails } from "./actions/actionCreators";
import ProductDetail from "./ProductDetails/ProductDetail";
let ProductDetailWithURL = withRouter(ProductDetail)
let MapStateToProps=(state)=>{
return{
    DetailReduser:state.DetailReduser
}
}
let ProductDetailContainer= connect(MapStateToProps,{
    productDetails:productDetails
})(ProductDetailWithURL)
export default ProductDetailContainer