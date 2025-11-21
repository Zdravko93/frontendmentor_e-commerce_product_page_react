import classes from "./Backdrop.module.css";

export default function Backdrop({ show }) {
  /* Backdrop is purely visual, screen readers should ignore it */
  return show ? (
    <div aria-hidden="true" className={classes.backdrop} tabIndex={-1}></div>
  ) : null;
}
