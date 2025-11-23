import React from "react";

export default React.memo(function MenuLink({ link }) {
  return (
    <li>
      <a href={`#${link.toLowerCase()}`}>{link}</a>
    </li>
  );
});
