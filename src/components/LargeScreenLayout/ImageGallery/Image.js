import { useState, useEffect } from "react";

import Card from "../../Card/Card.js";

export default function Image({
  images,
  activeThumbnailIndex,
  handleImageClick,
  classNames,
  imageTransition,
}) {
  const [currentIndex, setCurrentIndex] = useState(activeThumbnailIndex);

  useEffect(() => {
    setCurrentIndex(activeThumbnailIndex);
  }, [activeThumbnailIndex]);

  return (
    <Card classNames={classNames["large-image"]}>
      <ul>
        {images &&
          images.length > 0 &&
          images.map(
            (image, index) =>
              index === currentIndex && (
                <li key={index}>
                  <img
                    className={
                      imageTransition ? classNames.hidden : classNames.visible
                    }
                    src={image || images[0]}
                    alt="Sneakers"
                    onClick={handleImageClick}
                  />
                </li>
              )
          )}
      </ul>
    </Card>
  );
}
