import { useState, useEffect } from "react";

import thumbnailOne from "../../../assets/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../../../assets/image-product-2-thumbnail.jpg";
import thumbnailThree from "../../../assets/image-product-3-thumbnail.jpg";
import thumbnailFour from "../../../assets/image-product-4-thumbnail.jpg";

import classes from "./ImageGallery.module.css";

import Image from "./Image.js";
import Thumbnails from "./Thumbnails.js";

const thumbnails = [thumbnailOne, thumbnailTwo, thumbnailThree, thumbnailFour];

export default function ImageGallery({
  images,
  activeThumbnailIndex,
  onImageClick,
  onThumbnailClick,
  isInLightBox,
}) {
  const [imageTransition, setImageTransition] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(activeThumbnailIndex);

  useEffect(() => {
    // Trigger the transition by first hiding the image
    setImageTransition(true);

    // Delay the actual image change to allow the transition to happen
    const timer = setTimeout(() => {
      setCurrentIndex(activeThumbnailIndex); // Update the image after transition starts
      setImageTransition(false); // Reset the transition
    }, 100); // Delay should match the transition time in your CSS

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [activeThumbnailIndex]);

  const handleImageClick = () => {
    // trigger only if not inside the lightbox
    if (!isInLightBox && onImageClick) {
      onImageClick(currentIndex); // normal gallery (not lightbox)
    }
  };

  return (
    <div className={classes["image-gallery"]}>
      <Image
        images={images}
        activeThumbnailIndex={currentIndex}
        classNames={classes}
        handleImageClick={handleImageClick}
        imageTransition={imageTransition}
      />
      <Thumbnails
        classNames={classes}
        thumbnails={thumbnails}
        onThumbnailClick={onThumbnailClick}
        activeThumbnailIndex={currentIndex}
      />
    </div>
  );
}
