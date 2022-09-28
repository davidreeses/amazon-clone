import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="prouct__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        alt="the lean startup cover"
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
