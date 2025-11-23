import React from "react";

import deleteImg from "../../assets/icon-delete.svg";

export default React.memo(function CartDeleteButton({
  className,
  resetCartItems,
  ariaLabel,
}) {
  return (
    <button
      className={className}
      onClick={resetCartItems}
      aria-label={ariaLabel}
    >
      <img src={deleteImg} alt="Delete" />
    </button>
  );
});
