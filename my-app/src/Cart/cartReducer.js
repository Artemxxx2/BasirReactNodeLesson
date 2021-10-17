import { CART_ADD_ITEM,CART_CHANGEVALUES_ITEM,CART_REMOVE_ITEM } from "../constants/productConstants";

let initalState ={
        cartItems:localStorage.getItem('cartitems') ? 
        JSON.parse(localStorage.getItem('cartitems')):
        []
}
export const cartReduser = (state=initalState,action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
         let item =action.payload;
         let existItem = state.cartItems.find(x=>{
            return item.product === x.product 
         })
         if (existItem) {
             return { cartItems:state.cartItems.map(el=>{
               return item.product === el.product ? item: el
             })}
         }
         else{
         return { cartItems: [...state.cartItems , item]}
        }
        case CART_REMOVE_ITEM:
            let find = state.cartItems.find(x=>{
                return x.product === action.id
            })
            let arr = JSON.parse(localStorage.getItem('cartitems'))
            let resarr = []
            for (let i = 0; i < arr.length; i++) {
               if (arr[i].product === find.product) {
                   continue
               }
               else{
                   resarr.push(arr[i])
               }
            }
            
            localStorage.removeItem('cartitems')
            let outputarr = JSON.stringify(resarr)
            localStorage.setItem('cartitems',outputarr)
            return{cartItems: localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[] }
            case CART_CHANGEVALUES_ITEM:
            let prevdata = JSON.parse(localStorage.getItem('cartitems'))
            for (let i = 0; i < prevdata.length; i++) {;
                if (prevdata[i].product === action.name) {
                    prevdata[i].qty = action.qty
                }
            }
            localStorage.removeItem('cartitems')
            let setdata = JSON.stringify(prevdata)
            localStorage.setItem('cartitems',setdata)
            return{cartItems: localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[] }
            
            default:
            return state    
        }    
}
export const CART_REMOVE_ITEM_ACTIONCREATOR = (id)=>{
    return { type:CART_REMOVE_ITEM,id:id}
}
export const CART_CHANGEVALUES_ITEM_ACTIONCREATOR = (qty,name)=>{
    return { type:CART_CHANGEVALUES_ITEM,qty:qty,name:name}
}