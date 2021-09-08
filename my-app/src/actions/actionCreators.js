import axios from "axios"
import { PRODUCTDETAILSTFAIL, PRODUCTDETAILSTREQUEST, PRODUCTDETAILSTSUCCESS, PRODUCTLISTFAIL, PRODUCTLISTREQUEST, PRODUCTLISTSUCCESS } from "../constants/productConstants"

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
        const {data} = await axios.get(`api/products/${id}`)
        debugger
        dispatch({type:PRODUCTDETAILSTSUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:PRODUCTDETAILSTFAIL,error:error.message})
    }
}