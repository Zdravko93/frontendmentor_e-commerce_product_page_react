import React from "react";

export default function ArrowButton({ className, arrowImage, onClick }) {
  return (
    <button onClick={onClick}>
      <img
        className={className ? className : ""}
        src={arrowImage}
        alt="Previous"
      />
    </button>
  );
}
