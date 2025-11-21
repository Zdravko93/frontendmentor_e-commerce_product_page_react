export default function ArrowButton({
  className,
  arrowImage,
  onClick,
  ariaLabel,
}) {
  return (
    <button onClick={onClick} aria-label={ariaLabel} tabIndex={-1}>
      <img
        className={className ? className : ""}
        src={arrowImage}
        alt=""
        aria-hidden="true"
      />
    </button>
  );
}
