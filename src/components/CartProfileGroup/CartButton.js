import cartImg from "../../assets/icon-cart.svg";

import classes from "./CartButton.module.css";

export default function CartButton({ onCartToggle }) {
  return (
    <button className={classes["cart-btn"]} onClick={onCartToggle}>
      <img src={cartImg} alt="Shopping cart" />
    </button>
  );
}
