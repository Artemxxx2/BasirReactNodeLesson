import { connect } from "react-redux";
import Main from "./main";
let MapStateToProps=(state)=>{
return{

}
}
let MapDispatchtoProps =(dispatch)=>{

}

let MainContainer = connect(MapStateToProps,MapDispatchtoProps)(Main)
export default MainContainer