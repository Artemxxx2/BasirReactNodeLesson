import productDetailsCss from "./productDetailsCss.module.css";
let Productdetaildata = (props) => {
  const { id, price, description, img, name, rating, reviews } = props.product;
  return (
    <div className={productDetailsCss.wrapper}>
      <div className={productDetailsCss.imgwrapper}>
        <img className={productDetailsCss.img} src={img} alt="shoes" />{" "}
      </div>
      <div className={productDetailsCss.detailwrapper}>
        <ul>
          <li className={productDetailsCss.title}>{name}</li>
          <li>
            {rating} <span>{reviews} reviews</span>{" "}
          </li>
          <li>Price:{price}$</li>
          <li>description:</li>
          <li>{description}</li>
        </ul>
      </div>
      <div className={productDetailsCss.orderboxfinal}>
      <div className={productDetailsCss.orderbox}>
        <div className={productDetailsCss.firstBlock}>
          <div>price</div>
          <div>${price}</div>
        </div>
        <div className={productDetailsCss.secondBlock}>
          <div>status</div>
          <div>in Stock</div>
        </div>
      </div>
      <div className={productDetailsCss.btn}>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Productdetaildata;
