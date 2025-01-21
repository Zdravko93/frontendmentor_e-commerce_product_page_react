import React, { useState, useEffect } from "react";

import arrowLeftImg from "../../assets/icon-previous.svg";
import arrowRightImg from "../../assets/icon-next.svg";

import classes from "./Lightbox.module.css";

import ImageGallery from "../LargeScreenLayout/ImageGallery/ImageGallery.js";
import Backdrop from "../Backdrop/Backdrop.js";
import LightboxCloseButton from "./LightboxCloseButton.js";
import ArrowButton from "../Hero/ArrowButton.js";

export default function Lightbox({
  images,
  activeThumbnailIndex,
  onThumbnailClick,
  isLightboxOpen,
  onLightboxClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(activeThumbnailIndex);

  useEffect(() => {
    setCurrentIndex(activeThumbnailIndex);
  }, [activeThumbnailIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Backdrop show={isLightboxOpen} />
      <div className={classes["lightbox-container"]}>
        <LightboxCloseButton onLightboxClose={onLightboxClose} />
        <ImageGallery
          images={images}
          activeThumbnailIndex={currentIndex}
          onThumbnailClick={onThumbnailClick}
          isInLightBox={true}
        />
      </div>
      <div className={classes["arrows-positional-container"]}>
        <ArrowButton
          className={classes["arrow-left"]}
          arrowImage={arrowLeftImg}
          onClick={handlePrevClick}
        />
        <ArrowButton
          className={classes["arrow-right"]}
          arrowImage={arrowRightImg}
          onClick={handleNextClick}
        />
      </div>
    </>
  );
}
