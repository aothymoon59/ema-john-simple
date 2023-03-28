import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let productQuantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    productQuantity = productQuantity + product.quantity;
  }

  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>order summary</h4>
      <p>Selected Items: {productQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Shipping: ${totalShipping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
