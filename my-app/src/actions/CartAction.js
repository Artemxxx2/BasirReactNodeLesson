import axios from "axios"

export const addToCart = (productId,qty) =>async(dispatch,getstate)=>{
    const {data} = await axios.get(`/api/products/${productId}`)
    dispatch({
        type
    })
}