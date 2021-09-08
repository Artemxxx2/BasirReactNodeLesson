import axios from "axios"
import { PRODUCTLISTFAIL, PRODUCTLISTREQUEST, PRODUCTLISTSUCCESS } from "../constants/productConstants"

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