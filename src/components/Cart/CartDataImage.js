import React from "react";

import sneakersImg from "../../assets/image-product-1.jpg";

import classes from "./CartDataImage.module.css";

export default function CartDataImage() {
  return (
    <img
      className={classes["cart-sneakers-img"]}
      src={sneakersImg}
      alt="Sneakers"
    />
  );
}
