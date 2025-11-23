import { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";

import arrowLeftImg from "../../assets/icon-previous.svg";
import arrowRightImg from "../../assets/icon-next.svg";

import classes from "./Lightbox.module.css";

import ImageGallery from "../LargeScreenLayout/ImageGallery/ImageGallery.js";
import Backdrop from "../Backdrop/Backdrop.js";
import LightboxCloseButton from "./LightboxCloseButton.js";
import ArrowButton from "../Hero/ArrowButton.js";

// Custom hook
import { useNavigationKeys } from "../../customHooks/useNavigationKeys.js";
import { useFocusTrap } from "../../customHooks/useFocusTrap.js";

export default function Lightbox({
  images,
  activeThumbnailIndex,
  onThumbnailClick,
  isLightboxOpen,
  onLightboxClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(activeThumbnailIndex);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null); // lightbox close button ref (passed down to LightboxCloseButton)

  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  useEffect(() => {
    setCurrentIndex(activeThumbnailIndex);
  }, [activeThumbnailIndex]);

  // Automatically set focus on close button on lightbox open
  useEffect(() => {
    if (isLightboxOpen) {
      closeBtnRef.current?.focus();
    }
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen || !dialogRef.current) return;

    const container = dialogRef.current;
    const handleTab = (e) => {
      const focusable = Array.from(
        container.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.key === "Tab") {
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isLightboxOpen]);

  // Keypress events
  const handleKeyPress = useCallback(
    (key) => {
      if (key === "ArrowLeft") handlePrevClick();
      if (key === "ArrowRight") handleNextClick();
      if (key === "Escape") onLightboxClose();
    },
    [handlePrevClick, handleNextClick, onLightboxClose]
  );

  useNavigationKeys({
    keys: ["ArrowLeft", "ArrowRight", "Escape"],
    enabled: isLightboxOpen,
    onKeyPress: handleKeyPress,
  });

  // Focus trap
  useFocusTrap({
    containerRef: dialogRef,
    enabled: isLightboxOpen,
  });

  return ReactDOM.createPortal(
    <>
      <Backdrop show={isLightboxOpen} />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Enlarged product image viewer"
        className={classes["lightbox-container"]}
        tabIndex={0}
      >
        <LightboxCloseButton
          ref={closeBtnRef}
          onLightboxClose={onLightboxClose}
        />

        <ImageGallery
          images={images}
          activeThumbnailIndex={currentIndex}
          onThumbnailClick={onThumbnailClick}
          isInLightBox={true}
        />

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
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
