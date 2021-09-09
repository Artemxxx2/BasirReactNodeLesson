import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import DetailReduser from "./Reducers/DetailReduser";
import reduser from "./Reducers/mainReduser";

const initialState = {
  products:[],
    loading:true
};
let redusers = combineReducers({
    mainReduser:reduser,
    DetailReduser:DetailReduser
})
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
let store = createStore(
    redusers,
    initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
