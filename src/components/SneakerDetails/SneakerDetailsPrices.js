import Card from "../Card/Card.js";

export default function SneakerDetailsPrices({ classNames }) {
  return (
    <Card>
      <div role="group" aria-label="Pricing information">
        <div
          className={classNames["new-price"]}
          aria-label="Current price $125, 50% off"
        >
          <span className={classNames["current-price"]}>$125.00</span>
          <span className={classNames.discount}>50%</span>
        </div>
        <div className={classNames["old-price"]}>
          <span aria-label="original-price $250">$250.00</span>
        </div>
      </div>
    </Card>
  );
}
