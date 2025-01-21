import React from "react";

import classes from "./CartProfileGroup.module.css";

import CartButton from "./CartButton.js";
import UserProfileButton from "./UserProfileButton.js";

export default function CartProfileGroup({ onCartToggle, totalCartItems }) {
  return (
    <div className={classes["cart-profile-group"]}>
      <div className={classes["cart-container"]}>
        <CartButton onCartToggle={onCartToggle} />
        {totalCartItems > 0 && (
          <span className={classes["cart-items-number"]}>{totalCartItems}</span>
        )}
      </div>
      <UserProfileButton />
    </div>
  );
}
