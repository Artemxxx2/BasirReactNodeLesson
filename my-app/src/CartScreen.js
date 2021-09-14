let CartScreen = (props) =>{
    debugger
    const productId = props.match.params.id;
    const qty =props.location.search?Number(props.location.search.split('=')[1]):1
return (
<div className ='wrapper'>
    <h1>CartScreen</h1>
    <p>Add to Cart:ProductID:{productId}, qty = {qty}</p>
</div>
)}
export default CartScreen