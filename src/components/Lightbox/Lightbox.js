import { useState, useEffect, useRef, useCallback } from "react";

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
  const dialogRef = useRef(null);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(activeThumbnailIndex);
  }, [activeThumbnailIndex]);

  // Close on ESC
  useEffect(() => {
    if (!isLightboxOpen) return;

    // keypress events
    const handleKey = (e) => {
      if (e.key === "Escape") onLightboxClose();
      if (e.key === "ArrowLeft") handlePrevClick();
      if (e.key === "ArrowRight") handleNextClick();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isLightboxOpen, onLightboxClose, handlePrevClick, handleNextClick]);

  // Focus trap
  useEffect(() => {
    if (!isLightboxOpen || !dialogRef.current) return;

    const focusable = dialogRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trap);
    first?.focus();

    return () => document.removeEventListener("keydown", trap);
  }, [isLightboxOpen]);

  return (
    <>
      <Backdrop show={isLightboxOpen} />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Enlarged product image viewer"
        className={classes["lightbox-container"]}
      >
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
          ariaLabel="Previous image"
        />
        <ArrowButton
          className={classes["arrow-right"]}
          arrowImage={arrowRightImg}
          onClick={handleNextClick}
          ariaLabel="Next image"
        />
      </div>
    </>
  );
}
