import classes from "./CartDataPrices.module.css";

export default function CartDataPrices({ totalCartItems }) {
  return (
    <div>
      <h4>Fall Limited Edition Sneakers</h4>
      <span className={classes["number-details"]}>
        $125.00 x {totalCartItems}
      </span>
      <span className={classes["total-price"]}>
        ${(125 * totalCartItems).toFixed(2)}
      </span>
    </div>
  );
}
