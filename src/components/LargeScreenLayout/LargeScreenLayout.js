import React from "react";

import classes from "./LargeScreenLayout.module.css";

import ImageGallery from "./ImageGallery/ImageGallery.js";
import SneakerDetails from "../SneakerDetails/SneakerDetails.js";

export default React.memo(function LargeScreenLayout({
  images,
  activeThumbnailIndex,
  onImageClick,
  onThumbnailClick,
  isInLightBox,
  onAddItem,
  onSubtractItem,
  onAddTotalItems,
  cartItems,
}) {
  return (
    <section
      className={classes["large-screen-layout"]}
      aria-label="Product preview and details"
    >
      <ImageGallery
        images={images}
        activeThumbnailIndex={activeThumbnailIndex}
        onImageClick={!isInLightBox ? onImageClick : () => {}} // DO NOT trigger if in <Lightbox /> component
        onThumbnailClick={onThumbnailClick}
        isInLightBox={isInLightBox}
      />
      <SneakerDetails
        onAddItem={onAddItem}
        onSubtractItem={onSubtractItem}
        onAddTotalItems={onAddTotalItems}
        cartItems={cartItems}
      />
    </section>
  );
});
