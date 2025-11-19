import MenuIconOpen from "./MenuIconOpen.js";
import MenuIconClose from "./MenuIconClose.js";

export default function MobileMenuButton({
  classNames,
  isMenuOpen,
  onMenuToggle,
}) {
  return (
    <button
      className={classNames["menu-btn"]}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      onClick={onMenuToggle}
    >
      {!isMenuOpen && <MenuIconOpen ariaHidden={isMenuOpen} />}
      {isMenuOpen && (
        <MenuIconClose ariaLabel="Close menu icon" ariaHidden={!isMenuOpen} />
      )}
    </button>
  );
}
