import classes from "./CartCheckoutButton.module.css";

export default function CartCheckoutButton({ onCheckout, ariaLabel }) {
  return (
    <button
      className={classes["checkout-btn"]}
      onClick={onCheckout}
      aria-label={ariaLabel}
    >
      Checkout
    </button>
  );
}
