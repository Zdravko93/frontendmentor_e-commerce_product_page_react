import React from "react";

export default React.memo(function SneakerDetailsText({ className }) {
  return (
    <>
      <h1>Sneaker Company</h1>
      <h2>Fall Limited Edition Sneakers</h2>
      <p className={className}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
    </>
  );
});
