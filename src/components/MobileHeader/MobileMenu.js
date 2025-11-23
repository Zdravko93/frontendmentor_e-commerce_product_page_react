import { useEffect, useRef } from "react";

import MenuLinks from "../MenuLinks/MenuLinks.js";

// Custom hooks
import { useFocusTrap } from "../../customHooks/useFocusTrap.js";

export default function MobileMenu({
  isMenuOpen,
  isDesktopSize,
  onMenuToggle,
}) {
  const menuRef = useRef(null);

  // Close menu with Escape key
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onMenuToggle(); // closes the menu
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, onMenuToggle]);

  // trap focus
  useFocusTrap({
    containerRef: menuRef,
    enabled: isMenuOpen,
  });

  return (
    <nav ref={!isDesktopSize ? menuRef : null}>
      <MenuLinks isDesktopSize={false} isMenuOpen={isMenuOpen} />
    </nav>
  );
}
