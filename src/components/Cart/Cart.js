import classes from "./Cart.module.css";

import CartData from "./CartData.js";
import CartDeleteButton from "./CartDeleteButton.js";
import CartCheckoutButton from "./CartCheckoutButton.js";
import CartEmptyContainer from "./CartEmptyContainer.js";

export default function Cart({ totalCartItems, onResetCartItems, onCheckout }) {
  const resetCartItems = () => {
    onResetCartItems();
  };

  return (
    <div className={classes.cart}>
      <h3 className={classes["cart-title"]}>Cart</h3>
      {totalCartItems > 0 ? (
        <>
          <div className={classes["cart-details"]}>
            <div>
              <CartData totalCartItems={totalCartItems} />
              <CartDeleteButton
                className={classes["delete-btn"]}
                resetCartItems={resetCartItems}
              />
            </div>
          </div>
          <CartCheckoutButton onCheckout={onCheckout} />
        </>
      ) : (
        <div className={classes["cart-details"]}>
          <CartEmptyContainer />
        </div>
      )}
    </div>
  );
}
