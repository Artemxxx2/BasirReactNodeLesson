import axios from "axios"
import { PRODUCTDETAILSTFAIL, PRODUCTDETAILSTREQUEST, PRODUCTDETAILSTSUCCESS, PRODUCTLISTFAIL, PRODUCTLISTREQUEST, PRODUCTLISTSUCCESS,CART_ADD_ITEM } from "../constants/productConstants"

export const  listProducts = () =>async(dispatch)=>{
    dispatch({
        type:PRODUCTLISTREQUEST
    })
    try{
        const {data} = await axios.get('api/products')
        dispatch({type:PRODUCTLISTSUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:PRODUCTLISTFAIL,error:error.message})
    }
}

export const productDetails = (id) =>async(dispatch)=>{
    
    dispatch({
        type:PRODUCTDETAILSTREQUEST
    })
    try{
        const {data} = await axios.get(`/api/product/${id}`)
        
        dispatch({type:PRODUCTDETAILSTSUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:PRODUCTDETAILSTFAIL,error:error.message})
    }
}

export const addToCart = (productid,qty) =>async(dispatch,getState)=>{
    let {data} = await axios.get(`/api/product/${productid}`)
    dispatch(
        {type:CART_ADD_ITEM,
        payload:{
            name:data.name,
            img:data.img,
            price:data.price,
            countInStock:data.countInStock,
            product:data.id,
            qty:qty
        }
        }
    )
    localStorage.setItem('cartitems',JSON.stringify(getState().cart.cartItems))
    
}