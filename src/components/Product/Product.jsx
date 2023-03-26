import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt={name} />
      </div>
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="product-price">Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
