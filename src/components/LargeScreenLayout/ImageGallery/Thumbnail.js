export default function Thumbnail({
  classNames,
  imagePath,
  index,
  activeThumbnailIndex,
  onThumbnailClick,
}) {
  const isActive = index === activeThumbnailIndex;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onThumbnailClick(index);
    }
  };

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
}
