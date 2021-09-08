import { connect } from "react-redux";
import { listProducts } from "./actions/actionCreators";
import Main from "./main";
let MapStateToProps=(state)=>{
return{
    productList:state.mainReduser
}
}
let MapDispatchtoProps =(dispatch)=>{
    
}

let MainContainer = connect(MapStateToProps,MapDispatchtoProps)(Main)
export default MainContainer