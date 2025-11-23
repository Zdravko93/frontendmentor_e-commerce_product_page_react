import React from "react";

import classes from "./CartCheckoutButton.module.css";

export default React.memo(function CartCheckoutButton({
  onCheckout,
  ariaLabel,
}) {
  return (
    <button
      className={classes["checkout-btn"]}
      onClick={onCheckout}
      aria-label={ariaLabel}
    >
      Checkout
    </button>
  );
});
