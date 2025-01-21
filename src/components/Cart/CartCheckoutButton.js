import React from "react";

import classes from "./CartCheckoutButton.module.css";

export default function CartCheckoutButton({ onCheckout }) {
  return (
    <button className={classes["checkout-btn"]} onClick={onCheckout}>
      Checkout
    </button>
  );
}
