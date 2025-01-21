import React from "react";

import MenuIconOpen from "./MenuIconOpen.js";
import MenuIconClose from "./MenuIconClose.js";

export default function MobileMenuButton({
  classNames,
  isMenuOpen,
  onMenuToggle,
}) {
  return (
    <button
      className={classNames["menu-btn"]}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen ? "true" : "false"}
      onClick={onMenuToggle}
    >
      {!isMenuOpen && (
        <MenuIconOpen ariaLabel="Open menu icon" ariaHidden="true" />
      )}
      {isMenuOpen && (
        <MenuIconClose ariaLabel="Close menu icon" ariaHidden="false" />
      )}
    </button>
  );
}
