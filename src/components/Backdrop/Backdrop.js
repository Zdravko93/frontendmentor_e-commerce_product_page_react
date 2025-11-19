import classes from "./Backdrop.module.css";

export default function Backdrop({ show, onClick }) {
  /* Backdrop is purely visual, screen readers should ignore it */
  return show ? (
    <div
      aria-hidden="true"
      className={classes.backdrop}
      onClick={onClick}
    ></div>
  ) : null;
}
