import React from "react";

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
    className: classes.subtract,
    image: minusImg,
    altText: "Subtract",
  },
  {
    id: "add",
    className: classes.add,
    image: plusImg,
    altText: "Add",
  },
];

export default function SneakerDetails({
  onAddItem,
  onSubtractItem,
  onAddTotalItems,
  cartItems,
}) {
  return (
    <section className={classes["sneakers-details"]}>
      <SneakerDetailsText className={classes["sneakers-description"]} />
      <div className={classes["sneakers-price-info"]}>
        <SneakerDetailsPrices classNames={classes} />

        <div className={classes["btn-group"]}>
          <div className={classes["add-subtract-group"]}>
            {cartItems}
            {operationButtons.map((button) => (
              <SneakerDetailsButton
                key={button.id}
                className={button.className}
                image={button.image}
                altText={button.altText}
                onAddItem={button.altText === "Add" ? onAddItem : undefined}
                onSubtractItem={
                  button.altText === "Subtract" ? onSubtractItem : undefined
                }
              />
            ))}
          </div>
          <SneakerDetailsButton
            className={classes["add-btn"]}
            image={cartImg}
            altText="Cart"
            onAddTotalItems={onAddTotalItems}
          >
            Add to cart
          </SneakerDetailsButton>
        </div>
      </div>
    </section>
  );
}
