import React from "react";

import logoImg from "../../assets/logo.svg";

export default function LogoImage({ className }) {
  return (
    <img
      className={className ? className : ""}
      src={logoImg}
      alt="Sneakers logotype"
    />
  );
}
