export default function MenuLink({ link }) {
  return (
    <li>
      <a href={`#${link.toLowerCase()}`}>{link}</a>
    </li>
  );
}
