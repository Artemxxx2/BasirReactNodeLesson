let Rating = (props) => {
    debugger
  return (
    <div className="rating">
      <span>
        <i
          className={
            props.rating >= 1
              ? "fa fa-star"
              : props.rating >= 0.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            props.rating >= 2
              ? "fa fa-star"
              : props.rating >= 1.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            props.rating >= 3
              ? "fa fa-star"
              : props.rating >= 2.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            props.rating >= 4
              ? "fa fa-star"
              : props.rating >= 3.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
        <i
          className={
            props.rating >= 5
              ? "fa fa-star"
              : props.rating >= 4.5
              ? ".fa-star-half-o"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span className='review'>{props.reviews} reviews</span>
    </div>
  );
};
export default Rating;
