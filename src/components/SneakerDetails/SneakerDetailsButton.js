import React from "react";

export default React.memo(function SneakerDetailsButton({
  children,
  type,
  onAddItem,
  onSubtractItem,
  onAddTotalItems,
  ...props
}) {
  const addItem = () => onAddItem && onAddItem();

  const subtractItem = () => onSubtractItem && onSubtractItem();

  const addTotalItemsToCart = () => onAddTotalItems && onAddTotalItems();

  const handleClick = () => {
    if (type === "add") {
      addItem();
    } else if (type === "subtract") {
      subtractItem();
    } else if (type === "cart") {
      addTotalItemsToCart();
    }
  };

  return (
    <button
      type="button"
      className={props.className}
      onClick={handleClick}
      aria-label={!children ? props.altText : undefined} // use altText only if no children
    >
      <img src={props.image} alt={children ? "" : props.altText} />
      {children}
    </button>
  );
});
