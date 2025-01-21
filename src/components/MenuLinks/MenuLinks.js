import React from "react";

import classesDesktopMenu from "../DesktopHeader/DesktopMenu.module.css";
import classesMobileMenu from "../MobileHeader/MobileMenu.module.css";

import MenuLink from "./MenuLink.js";

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function MenuLinks({ isDesktopSize, isMenuOpen }) {
  return (
    <nav>
      <ul
        className={
          isDesktopSize
            ? classesDesktopMenu["desktop-menu"]
            : `${classesMobileMenu["mobile-menu"]} ${
                isMenuOpen ? classesMobileMenu.open : ""
              }`
        }
      >
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <MenuLink link={link} />
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
