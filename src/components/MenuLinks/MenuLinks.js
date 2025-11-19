import React from "react";

import classesDesktopMenu from "../DesktopHeader/DesktopMenu.module.css";
import classesMobileMenu from "../MobileHeader/MobileMenu.module.css";

import MenuLink from "./MenuLink.js";

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function MenuLinks({ isDesktopSize, isMenuOpen }) {
  return (
    <nav aria-label={`${isDesktopSize ? "Main menu" : "Mobile menu"}`}>
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
          <React.Fragment key={index}>
            <MenuLink link={link} />
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
