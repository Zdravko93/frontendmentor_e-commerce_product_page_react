import classesDesktopMenu from "../DesktopHeader/DesktopMenu.module.css";
import classesMobileMenu from "../MobileHeader/MobileMenu.module.css";

import MenuLink from "./MenuLink.js";

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function MenuLinks({ isDesktopSize, isMenuOpen }) {
  return (
    <ul
      className={
        isDesktopSize
          ? classesDesktopMenu["desktop-menu"]
          : `${classesMobileMenu["mobile-menu"]} ${
              isMenuOpen ? classesMobileMenu.open : ""
            }`
      }
      aria-hidden={!isMenuOpen && !isDesktopSize}
    >
      {links.map((link, index) => (
        <MenuLink link={link} key={index} />
      ))}
    </ul>
  );
}
