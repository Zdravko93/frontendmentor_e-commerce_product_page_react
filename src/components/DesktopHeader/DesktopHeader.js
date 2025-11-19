import classes from "../MobileHeader/MobileHeader.module.css";
import classesDesktopMenu from "./DesktopHeader.module.css";

import DesktopMenu from "./DesktopMenu.js";
import LogoImage from "../LogoImage/LogoImage.js";
import CartProfileGroup from "../CartProfileGroup/CartProfileGroup.js";

export default function DesktopHeader({
  onCartToggle,
  totalCartItems,
  isCartOpen,
}) {
  return (
    <header
      className={`${classes.header} ${classesDesktopMenu["desktop-header"]}`}
    >
      <div className={classesDesktopMenu["logo-menu-group"]}>
        <LogoImage />
        <DesktopMenu />
      </div>
      <CartProfileGroup
        onCartToggle={onCartToggle}
        totalCartItems={totalCartItems}
        isCartOpen={isCartOpen}
      />
    </header>
  );
}
