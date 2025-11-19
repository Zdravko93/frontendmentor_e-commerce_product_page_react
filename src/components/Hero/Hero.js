import classes from "./Hero.module.css";

import HeroSlide from "./HeroSlide.js";

export default function Hero({ images }) {
  return (
    <section aria-label="Product image carousel">
      <HeroSlide classNames={classes} images={images} />
    </section>
  );
}
