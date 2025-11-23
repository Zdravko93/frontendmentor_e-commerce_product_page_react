import { forwardRef } from "react";

import MenuIconClose from "./MenuIconClose.js";
import MenuIconOpen from "./MenuIconOpen.js";

const MobileMenuButton = forwardRef(function MobileMenuButton(
  { isMenuOpen, onMenuToggle, className },
  ref
) {
  return (
    <button
      ref={ref}
      className={className}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      onClick={onMenuToggle}
    >
      {isMenuOpen ? (
        <MenuIconClose ariaHidden={isMenuOpen} />
      ) : (
        <MenuIconOpen ariaHidden={isMenuOpen} />
      )}
    </button>
  );
});

export default MobileMenuButton;
