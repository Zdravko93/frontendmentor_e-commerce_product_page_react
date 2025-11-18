import classes from "./CartEmptyContainer.module.css";

export default function CartEmptyContainer() {
  return (
    <div className={classes["cart-empty-text-container"]}>
      <p>Your cart is empty.</p>
    </div>
  );
}
