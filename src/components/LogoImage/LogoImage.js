import React from "react";

import logoImg from "../../assets/logo.svg";

// Stateless, pure static component - I think it's good for memo
export default React.memo(function LogoImage({ className }) {
  return (
    <img
      className={className ? className : ""}
      src={logoImg}
      alt="Sneakers logotype"
    />
  );
});
