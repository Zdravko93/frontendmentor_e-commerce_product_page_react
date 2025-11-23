import MenuLinks from "../MenuLinks/MenuLinks.js";

export default function DesktopMenu({ isDesktopSize }) {
  return (
    <nav aria-label={`${isDesktopSize ? "Main menu" : "Mobile menu"}`}>
      <MenuLinks isDesktopSize={true} />
    </nav>
  );
}
