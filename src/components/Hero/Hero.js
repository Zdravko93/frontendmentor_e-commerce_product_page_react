import classes from "./Hero.module.css";

import HeroSlide from "./HeroSlide.js";

export default function Hero({ images, isInLightbox }) {
  return (
    <section aria-label="Product image carousel">
      <HeroSlide
        classNames={classes}
        images={images}
        isInLightbox={isInLightbox}
      />
    </section>
  );
}
