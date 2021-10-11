import "./App.css";
let CartScreen = (props) =>{
    const productId = props.match.params.id;
    const qty =props.location.search?Number(props.location.search.split('=')[1]):1
return (
<main className='wrapper'>
    <h1>CartScreen</h1>
    <p>Add to Cart:ProductID:{productId}, qty = {qty}</p>
</main>
)}
export default CartScreen