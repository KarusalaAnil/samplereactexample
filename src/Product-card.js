function ProductCard({image,price,rating,title}){
    // console.log(props);
    return (
        <div className="card">
        <img src={image} alt="myimg"/>
        <p>{title}</p>
        <p>{price}</p>
        <p>{rating.rate}</p>
        </div>
    )
}
export default ProductCard;