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
    <div
      className={classes.cart}
      role="region"
      aria-label="Shopping Cart"
      aria-atomic="true"
    >
      <h3 className={classes["cart-title"]}>Cart</h3>
      {totalCartItems > 0 ? (
        <>
          <div className={classes["cart-details"]}>
            <div>
              <CartData totalCartItems={totalCartItems} />
              <CartDeleteButton
                className={classes["delete-btn"]}
                resetCartItems={resetCartItems}
                ariaLabel="Remove items from cart"
              />
            </div>
          </div>
          <CartCheckoutButton
            onCheckout={onCheckout}
            ariaLabel="Proceed to checkout"
          />
        </>
      ) : (
        <div className={classes["cart-details"]} aria-live="polite">
          <CartEmptyContainer />
        </div>
      )}
    </div>
  );
}
