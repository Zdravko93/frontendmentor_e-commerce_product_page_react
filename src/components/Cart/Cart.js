import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import classes from "./Cart.module.css";

import CartData from "./CartData.js";
import CartDeleteButton from "./CartDeleteButton.js";
import CartCheckoutButton from "./CartCheckoutButton.js";
import CartEmptyContainer from "./CartEmptyContainer.js";

// Custom hook
import { useFocusTrap } from "../../customHooks/useFocusTrap.js";

export default function Cart({
  totalCartItems,
  onResetCartItems,
  onCheckout,
  isCartOpen,
}) {
  const cartRef = useRef(null);

  // Focus first interactive element on open
  useEffect(() => {
    if (isCartOpen && cartRef.current) {
      const firstFocusable = cartRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }
  }, [isCartOpen]);

  const resetCartItems = () => {
    onResetCartItems();
  };

  // trap focus on the main container
  useFocusTrap({
    containerRef: cartRef,
    enabled: isCartOpen,
  });

  return ReactDOM.createPortal(
    <div
      className={classes.cart}
      role="region"
      aria-label="Shopping Cart"
      aria-atomic="true"
      tabIndex={-1} // allows programmatic focus, instead of tabbing the element (main container)
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
    </div>,
    document.getElementById("modal-root")
  );
}
