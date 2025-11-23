import React, { useCallback } from "react";

export default React.memo(function Thumbnail({
  classNames,
  imagePath,
  index,
  activeThumbnailIndex,
  onThumbnailClick,
}) {
  const isActive = index === activeThumbnailIndex;

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onThumbnailClick(index);
      }
    },
    [index, onThumbnailClick]
  );

  return (
    <div
      className={classNames}
      role="option"
      aria-selected={isActive}
      aria-label={`Select image ${index + 1}`}
    >
      <button
        onClick={() => {
          onThumbnailClick(index);
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <img src={imagePath} alt={`Thumbnail ${index + 1}`} />
      </button>
    </div>
  );
});
