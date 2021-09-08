import {
  PRODUCTDETAILSTFAIL,
  PRODUCTDETAILSTREQUEST,
  PRODUCTDETAILSTSUCCESS,
} from "../constants/productConstants";

let initalstate = {
    product:[],
    loading:true
};
let DetailReduser = (state = initalstate, action) => {
  switch (action.type) {
    case PRODUCTDETAILSTSUCCESS:
      return {loading:false,product:action.payload};

    case PRODUCTDETAILSTREQUEST:
      return {loading:true};
    case PRODUCTDETAILSTFAIL:
      return {loading:false,error:action.error};;
    default:
      return state;
  }
};
export default DetailReduser;
