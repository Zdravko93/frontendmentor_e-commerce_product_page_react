import minusImg from "../../assets/icon-minus.svg";
import plusImg from "../../assets/icon-plus.svg";
import cartImg from "../../assets/icon-cart.svg";

import classes from "./SneakerDetails.module.css";

import SneakerDetailsText from "./SneakerDetailsText.js";
import SneakerDetailsPrices from "./SneakerDetailsPrices.js";
import SneakerDetailsButton from "./SneakerDetailsButton.js";

const operationButtons = [
  {
    id: "subtract",
    type: "subtract",
    className: classes.subtract,
    image: minusImg,
    altText: "Remove one item from cart",
  },
  {
    id: "add",
    type: "add",
    className: classes.add,
    image: plusImg,
    altText: "Add one item to cart",
  },
];

export default function SneakerDetails({
  onAddItem,
  onSubtractItem,
  onAddTotalItems,
  cartItems,
}) {
  return (
    <section
      className={classes["sneakers-details"]}
      aria-label="Sneaker product details"
    >
      <SneakerDetailsText className={classes["sneakers-description"]} />
      <div className={classes["sneakers-price-info"]}>
        <SneakerDetailsPrices classNames={classes} />

        <div className={classes["btn-group"]}>
          <div className={classes["add-subtract-group"]}>
            <span aria-live="polite" className="sr-only">
              {cartItems} items selected
            </span>

            {cartItems}
            {operationButtons.map((button) => (
              <SneakerDetailsButton
                key={button.id}
                className={button.className}
                image={button.image}
                altText={button.altText}
                type={button.type}
                onAddItem={
                  button.altText === "Add one item to cart"
                    ? onAddItem
                    : undefined
                }
                onSubtractItem={
                  button.altText === "Remove one item from cart"
                    ? onSubtractItem
                    : undefined
                }
              />
            ))}
          </div>

          <SneakerDetailsButton
            className={classes["add-btn"]}
            image={cartImg}
            altText="Add all selected items to cart"
            type="cart"
            onAddTotalItems={onAddTotalItems}
          >
            Add to cart
          </SneakerDetailsButton>
        </div>
      </div>
    </section>
  );
}
