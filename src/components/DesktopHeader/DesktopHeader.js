import React from "react";

import classes from "../MobileHeader/MobileHeader.module.css";
import classesDesktopMenu from "./DesktopHeader.module.css";

import DesktopMenu from "./DesktopMenu.js";
import LogoImage from "../LogoImage/LogoImage.js";
import CartProfileGroup from "../CartProfileGroup/CartProfileGroup.js";

// Cut render frequency with React.memo
export default React.memo(function DesktopHeader({
  onCartToggle,
  totalCartItems,
  isCartOpen,
  isDesktopSize,
}) {
  return (
    <header
      className={`${classes.header} ${classesDesktopMenu["desktop-header"]}`}
    >
      <div className={classesDesktopMenu["logo-menu-group"]}>
        <LogoImage />
        <DesktopMenu isDesktopSize={isDesktopSize} />
      </div>
      <CartProfileGroup
        onCartToggle={onCartToggle}
        totalCartItems={totalCartItems}
        isCartOpen={isCartOpen}
      />
    </header>
  );
});
