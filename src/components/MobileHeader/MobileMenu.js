import { useEffect, useCallback, useRef } from "react";

import MenuLinks from "../MenuLinks/MenuLinks.js";

// Custom hooks
import { useFocusTrap } from "../../customHooks/useFocusTrap.js";

export default function MobileMenu({
  isMenuOpen,
  isDesktopSize,
  onMenuToggle,
}) {
  const menuRef = useRef(null);

  const handleEscape = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onMenuToggle();
      }
    },
    [onMenuToggle]
  );

  // Close menu with Escape key
  useEffect(() => {
    if (!isMenuOpen) return;

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, handleEscape]);

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
