import React from "react";

import classes from "./Backdrop.module.css";

export default function Backdrop({ show, onClick }) {
  return show ? (
    <div className={classes.backdrop} onClick={onClick}></div>
  ) : null;
}
