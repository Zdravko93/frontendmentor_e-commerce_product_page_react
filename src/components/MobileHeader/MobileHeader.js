import React from "react";

import classes from "./MobileHeader.module.css";

import MobileMenuButton from "./MobileMenuButton.js";
import LogoImage from "../LogoImage/LogoImage.js";
import CartProfileGroup from "../CartProfileGroup/CartProfileGroup.js";

export default React.memo(function MobileHeader({
  isMenuOpen,
  onMenuToggle,
  onCartToggle,
  totalCartItems,
  isCartOpen,
}) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-container"]}>
          <div className={classes["menu-logotype-group"]}>
            <MobileMenuButton
              isMenuOpen={isMenuOpen}
              onMenuToggle={onMenuToggle}
              className={classes["menu-btn"]}
            />
            <LogoImage className={classes["logo-img"]} />
          </div>

          <CartProfileGroup
            onCartToggle={onCartToggle}
            totalCartItems={totalCartItems}
            isCartOpen={isCartOpen}
          />
        </div>
      </header>
    </>
  );
});
