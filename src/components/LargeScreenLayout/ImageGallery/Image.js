import React, { useState, useEffect } from "react";

import Card from "../../Card/Card.js";

export default React.memo(function Image({
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
        {images
          .filter((_, i) => i === currentIndex) // only the active image
          .map((image, index) => (
            <li key={index}>
              <button
                className={
                  imageTransition ? classNames.hidden : classNames.visible
                }
                onClick={handleImageClick}
              >
                <img
                  src={image || images[0]}
                  alt={`Product ${currentIndex + 1} of ${images.length}`}
                />
              </button>
            </li>
          ))}
      </ul>
    </Card>
  );
});
