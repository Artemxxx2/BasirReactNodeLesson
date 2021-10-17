import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "./actions/actionCreators";
import "./App.css";
import Cart from './cart.module.css'
import { CART_CHANGEVALUES_ITEM_ACTIONCREATOR, CART_REMOVE_ITEM_ACTIONCREATOR } from "./Cart/cartReducer";

let CartScreen = (props) =>{
    let state = useSelector((state) => {
        return state.cart.cartItems;
      });
    let dispatch = useDispatch()
    const productId = Number(props.match.params.id);
    const qty =props.location.search?Number(props.location.search.split('=')[1]):1
    useEffect(()=>{
        if (productId) {
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])
    
    function deleteItem(e) {
        let deletedItem = Number(e.target.name);

        dispatch(CART_REMOVE_ITEM_ACTIONCREATOR(deletedItem))
    }
    function changeQTY(e) {
        let qty = Number(e.target.value);
        let name = Number(e.target.name);
        dispatch(CART_CHANGEVALUES_ITEM_ACTIONCREATOR(qty,name))
    }
let totalcount=0;
for (let i = 0; i < state.length; i++) {
   totalcount+=state[i].qty*state[i].price
}
let totalqty=0;
for (let i = 0; i < state.length; i++) {
    totalqty+=state[i].qty
}
return (
<main className='wrapper'>
    <div className={Cart.subwrapper}> 
    <h1 className={Cart.title}>Shopping Cart</h1>
    <div className={Cart.finalwrapper}>
    <div className={Cart.checkout}>
        <p>Totalprice is:{totalcount} </p>
        <p>Totalqty is:{totalqty} </p>
        <button>Proceed to checkout</button>
        </div>
   {
         state.map(el=>{
            return <div className={Cart.commodityWrapper}>
                <div className= {Cart.ProductInfoWrapper}>
                <div className={Cart.ProductInfo}>
                <div ><img src={el.img} alt="" className={Cart.img}/></div>
                <div className={Cart.name}>{el.name}</div>
                <select value={el.qty} name={el.product}  onChange={changeQTY}>
                {
                  [...Array(el.countInStock).keys()].map(x=>{
                   return <option key={x+1} value={x+1}>{x+1}</option>
                  })
                  
                }
                </select>
                <div className={Cart.price}>{el.price}$</div>
                <button onClick={deleteItem} name={el.product} className={Cart.delete}>Delete</button>
                </div>
                </div>
            </div>
            
        }
        )
   }
   </div>
   </div>
</main>
)}
export default CartScreen