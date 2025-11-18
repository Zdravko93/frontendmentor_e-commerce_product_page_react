import MenuLinks from "../MenuLinks/MenuLinks.js";

export default function MobileMenu({ isMenuOpen }) {
  return (
    <>
      <MenuLinks isDesktopSize={false} isMenuOpen={isMenuOpen} />
    </>
  );
}
