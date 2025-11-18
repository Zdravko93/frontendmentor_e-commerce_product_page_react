import Thumbnail from "./Thumbnail.js";

export default function Thumbnails({
  classNames,
  thumbnails,
  activeThumbnailIndex,
  onThumbnailClick,
}) {
  return (
    <div className={classNames["thumbnail-images"]}>
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
}
