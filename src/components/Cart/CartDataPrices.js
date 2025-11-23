import React from "react";

import classes from "./CartDataPrices.module.css";

export default React.memo(function CartDataPrices({ totalCartItems }) {
  const unitPrice = 125;
  const totalPrice = (unitPrice * totalCartItems).toFixed(2);

  return (
    <div
      aria-label={`Cart item details: Fall Limited Edition Sneakers, $${unitPrice} each, quantity ${totalCartItems}, total $${totalPrice}`}
    >
      <h4>Fall Limited Edition Sneakers</h4>
      <span className={classes["number-details"]}>
        {`$${unitPrice} x ${totalCartItems}`}
      </span>
      <span className={classes["total-price"]}>{`Total: $${totalPrice}`}</span>
    </div>
  );
});
