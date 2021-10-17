import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import DetailReduser from "./Reducers/DetailReduser";
import reduser from "./Reducers/mainReduser";
import {cartReduser} from './Cart/cartReducer'

let redusers = combineReducers({
    mainReduser:reduser,
    DetailReduser:DetailReduser,
    cart:cartReduser
})
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
let store = createStore(
    redusers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
