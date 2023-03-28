import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice * 7) / 100;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h4>order summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <p>Shipping: ${totalShipping.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
