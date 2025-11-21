import { useRef, useCallback } from "react";

import classes from "./CartCheckoutModal.module.css";
import Backdrop from "../Backdrop/Backdrop.js";
// Custom hook
import { useFocusTrap } from "../../customHooks/useFocusTrap.js";
import { useNavigationKeys } from "../../customHooks/useNavigationKeys.js";

export default function CartCheckoutModal({
  onCloseCheckoutModal,
  isCheckout,
}) {
  const modalRef = useRef(null);

  useFocusTrap({
    containerRef: modalRef,
    enabled: isCheckout,
  });

  // Escape key
  const handleKeyPress = useCallback(
    (key) => {
      if (key === "Escape") {
        onCloseCheckoutModal();
      }
    },
    [onCloseCheckoutModal]
  );

  useNavigationKeys({
    keys: ["Escape"],
    enabled: isCheckout,
    onKeyPress: handleKeyPress,
  });

  return (
    <>
      <div
        ref={modalRef}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
        className={classes["checkout-modal"]}
      >
        <h3>You have successfully submitted your order!</h3>
        <button onClick={onCloseCheckoutModal}>Close</button>
      </div>

      <Backdrop show={isCheckout} />
    </>
  );
}
