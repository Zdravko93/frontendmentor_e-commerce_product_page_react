import classes from "./Cart.module.css";

import CartDataPrices from "./CartDataPrices.js";
import CartDataImage from "./CartDataImage.js";

export default function CartData({ totalCartItems }) {
  return (
    <div className={classes["cart-data"]}>
      <CartDataImage />
      <CartDataPrices totalCartItems={totalCartItems} />
    </div>
  );
}
