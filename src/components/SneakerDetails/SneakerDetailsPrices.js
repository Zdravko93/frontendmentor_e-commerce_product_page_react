import Card from "../Card/Card.js";

export default function SneakerDetailsPrices({ classNames }) {
  return (
    <Card>
      <div className={classNames["new-price"]}>
        <span className={classNames["current-price"]}>$125.00</span>
        <span className={classNames.discount}>50%</span>
      </div>
      <div className={classNames["old-price"]}>
        <span>$250.00</span>
      </div>
    </Card>
  );
}
