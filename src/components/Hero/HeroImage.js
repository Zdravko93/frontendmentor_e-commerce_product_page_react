import React from "react";

export default React.memo(function HeroImage({
  classNames,
  image,
  index,
  isHidden,
}) {
  return (
    <button aria-label={`View image ${index + 1} in fullscreen`}>
      <img
        className={`${classNames.sneakers} ${
          isHidden ? classNames.hidden : ""
        }`}
        src={image}
        alt={`Sneaker ${index + 1}`}
      />
    </button>
  );
});
