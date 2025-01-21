import React from "react";

export default function Card({ children, classNames }) {
  return <div className={classNames}>{children}</div>;
}
