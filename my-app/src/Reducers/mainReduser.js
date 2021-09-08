import { PRODUCTLISTFAIL, PRODUCTLISTREQUEST, PRODUCTLISTSUCCESS } from "../constants/productConstants";
let initalState = {
    products:[],
    loading:true
};




let reduser = (state = initalState, action) => {
  switch (action.type) {
    case PRODUCTLISTREQUEST:
      return { loading: true };
    case PRODUCTLISTSUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTLISTFAIL:
      return { type: PRODUCTLISTFAIL, error: action.error };
    default:
      return state;
  }
};
export default  reduser