import { connect } from "react-redux";
import { listProducts } from "./actions/actionCreators";
import Main from "./main";
let MapStateToProps=(state)=>{
return{
    productList:state.mainReduser
}
}


let MainContainer = connect(MapStateToProps,{
    listProducts
})(Main)
export default MainContainer