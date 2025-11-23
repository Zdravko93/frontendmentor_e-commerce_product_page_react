import React, { forwardRef } from "react";

import classes from "./LightboxCloseButton.module.css";

import LightboxCloseIcon from "./LightboxCloseIcon.js";

const LightboxCloseButton = React.memo(
  forwardRef(function LightboxCloseButton({ onLightboxClose }, ref) {
    return (
      <button
        ref={ref}
        className={classes["lightbox-close-btn"]}
        onClick={onLightboxClose}
        aria-label="Close lightbox"
      >
        <LightboxCloseIcon />
      </button>
    );
  })
);

export default LightboxCloseButton;
