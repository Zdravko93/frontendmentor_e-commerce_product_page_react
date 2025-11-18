import classes from "./CartCheckoutModal.module.css";

import Backdrop from "../Backdrop/Backdrop.js";

export default function CartCheckoutModal({
  onCloseCheckoutModal,
  isCheckout,
}) {
  return (
    <>
      <div className={classes["checkout-modal"]}>
        <h3>You have successfully submitted your order!</h3>
        <button onClick={onCloseCheckoutModal}>Close</button>
      </div>

      <Backdrop show={isCheckout} />
    </>
  );
}
