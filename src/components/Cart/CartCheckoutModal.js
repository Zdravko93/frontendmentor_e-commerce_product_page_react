import React, { useRef, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

import classes from "./CartCheckoutModal.module.css";
import Backdrop from "../Backdrop/Backdrop.js";
// Custom hooks
import { useFocusTrap } from "../../customHooks/useFocusTrap.js";
import { useNavigationKeys } from "../../customHooks/useNavigationKeys.js";

export default React.memo(function CartCheckoutModal({
  onCloseCheckoutModal,
  isCheckout,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isCheckout && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isCheckout]);

  useFocusTrap({
    containerRef: modalRef,
    enabled: isCheckout,
  });

  // Escape key to close modal
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

  return ReactDOM.createPortal(
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
    </>,
    document.getElementById("modal-root")
  );
});
