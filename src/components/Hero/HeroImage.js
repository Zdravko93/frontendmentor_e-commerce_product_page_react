import React from "react";

export default function HeroImage({ classNames, image, index, isHidden }) {
  return (
    <button>
      <img
        className={`${classNames.sneakers} ${
          isHidden ? classNames.hidden : ""
        }`}
        src={image}
        alt={`Sneaker ${index + 1}`}
      />
    </button>
  );
}
