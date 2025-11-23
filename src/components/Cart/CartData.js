import React from "react";

import classes from "./Cart.module.css";

import CartDataPrices from "./CartDataPrices.js";
import CartDataImage from "./CartDataImage.js";

export default React.memo(function CartData({ totalCartItems }) {
  return (
    <div
      className={classes["cart-data"]}
      role="group"
      aria-label={`Cart item: ${totalCartItems} items`}
    >
      <CartDataImage />
      <CartDataPrices totalCartItems={totalCartItems} />
    </div>
  );
});
