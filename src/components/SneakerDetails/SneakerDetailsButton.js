export default function SneakerDetailsButton({
  children,
  onAddItem,
  onSubtractItem,
  onAddTotalItems,
  ...props
}) {
  const addItem = () => {
    onAddItem();
  };

  const subtractItem = () => {
    onSubtractItem();
  };

  const addTotalItemsToCart = () => {
    onAddTotalItems();
  };

  const handleClick = () => {
    if (props.altText === "Add") {
      addItem();
    } else if (props.altText === "Subtract") {
      subtractItem();
    } else if (props.altText === "Cart") {
      addTotalItemsToCart();
    }
  };

  return (
    <button className={props.className} onClick={handleClick}>
      <img src={props.image} alt={props.altText} />
      {children}
    </button>
  );
}
