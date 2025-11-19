import classes from "./LightboxCloseButton.module.css";

import LightboxCloseIcon from "./LightboxCloseIcon.js";

export default function LightboxCloseButton({ onLightboxClose }) {
  return (
    <button
      className={classes["lightbox-close-btn"]}
      onClick={onLightboxClose}
      aria-label="Close lightbox"
    >
      <LightboxCloseIcon />
    </button>
  );
}
