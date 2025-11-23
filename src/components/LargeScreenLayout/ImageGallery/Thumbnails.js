import React from "react";

import Thumbnail from "./Thumbnail.js";

export default React.memo(function Thumbnails({
  classNames,
  thumbnails,
  activeThumbnailIndex,
  onThumbnailClick,
}) {
  return (
    <div
      className={classNames["thumbnail-images"]}
      role="listbox"
      aria-label="Product image thumbnails"
    >
      {thumbnails.map((thumb, index) => (
        <Thumbnail
          key={index}
          index={index}
          activeThumbnailIndex={activeThumbnailIndex}
          classNames={index === activeThumbnailIndex ? classNames.active : ""}
          imagePath={thumb}
          onThumbnailClick={onThumbnailClick}
        />
      ))}
    </div>
  );
});
