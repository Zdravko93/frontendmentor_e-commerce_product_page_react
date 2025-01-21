import React from "react";

export default function Thumbnail({
  classNames,
  imagePath,
  index,
  onThumbnailClick,
}) {
  return (
    <div className={classNames}>
      <button
        onClick={() => {
          onThumbnailClick(index);
        }}
      >
        <img src={imagePath} alt="Thumbnail of sneakers" />
      </button>
    </div>
  );
}
