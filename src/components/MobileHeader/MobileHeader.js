import React from "react";

import classes from "./MobileHeader.module.css";

import MobileMenuButton from "./MobileMenuButton.js";
import LogoImage from "../LogoImage/LogoImage.js";
import CartProfileGroup from "../CartProfileGroup/CartProfileGroup.js";

export default function MobileHeader({
  isMenuOpen,
  onMenuToggle,
  onCartToggle,
  totalCartItems,
}) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-container"]}>
          <div className={classes["menu-logotype-group"]}>
            <MobileMenuButton
              classNames={classes}
              isMenuOpen={isMenuOpen}
              onMenuToggle={onMenuToggle}
            />
            <LogoImage className={classes["logo-img"]} />
          </div>
          <CartProfileGroup
            onCartToggle={onCartToggle}
            totalCartItems={totalCartItems}
          />
        </div>
      </header>
    </>
  );
}
