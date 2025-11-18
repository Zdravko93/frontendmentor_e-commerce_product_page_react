import classes from "./Hero.module.css";

import HeroSlide from "./HeroSlide.js";

export default function Hero({ images }) {
  return (
    <section>
      <HeroSlide classNames={classes} images={images} />
    </section>
  );
}
