import cartImg from "../../assets/icon-cart.svg";

import classes from "./CartButton.module.css";

export default function CartButton({ onCartToggle, isCartOpen }) {
  return (
    <button
      className={classes["cart-btn"]}
      onClick={onCartToggle}
      aria-expanded={isCartOpen}
      aria-controls="cart-panel"
      aria-hidden={isCartOpen ? "false" : "true"}
    >
      <img src={cartImg} alt="Shopping cart" />
    </button>
  );
}
