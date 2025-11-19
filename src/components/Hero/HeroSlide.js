import { useState, useEffect, useCallback } from "react";

import arrowLeftImg from "../../assets/icon-previous.svg";
import arrowRightImg from "../../assets/icon-next.svg";

import HeroImage from "./HeroImage.js";
import ArrowButton from "./ArrowButton.js";

export default function HeroSlide({ classNames, images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false);

  const handlePrevClick = useCallback(() => {
    if (!isImageChanging) {
      setIsImageChanging(true);
    }
    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }, 200); // refrain from changing image instantly, and synchronize with flash effect
  }, [isImageChanging, images.length]);

  const handleNextClick = useCallback(() => {
    if (!isImageChanging) {
      setIsImageChanging(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 200); // refrain from changing image instantly, and synchronize with flash effect
    }
  }, [isImageChanging, images.length]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevClick();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNextClick();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrevClick, handleNextClick]);

  // Reset image changing state after transition
  useEffect(() => {
    setIsImageChanging(false);
    const timeout = setTimeout(() => setIsImageChanging(false), 500);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className={classNames.carousel}>
      <div aria-live="polite" className="sr-only">
        Image {activeIndex + 1} of {images.length}
      </div>

      <HeroImage
        index={activeIndex}
        image={images[activeIndex]}
        classNames={classNames}
        isHidden={isImageChanging}
      />
      <ArrowButton
        className={classNames["arrow-left"]}
        arrowImage={arrowLeftImg}
        onClick={handlePrevClick}
      />
      <ArrowButton
        className={classNames["arrow-right"]}
        arrowImage={arrowRightImg}
        onClick={handleNextClick}
      />
    </div>
  );
}
