import React, { useState, useEffect } from "react";

import "./App.css";

// images
import sneakersImgOne from "./assets/image-product-1.jpg";
import sneakersImgTwo from "./assets/image-product-2.jpg";
import sneakersImgThree from "./assets/image-product-3.jpg";
import sneakersImgFour from "./assets/image-product-4.jpg";
// components
import MobileHeader from "./components/MobileHeader/MobileHeader.js";
import Hero from "./components/Hero/Hero.js";
import SneakerDetails from "./components/SneakerDetails/SneakerDetails.js";
import Cart from "./components/Cart/Cart.js";
import MobileMenu from "./components/MobileHeader/MobileMenu.js";
import Backdrop from "./components/Backdrop/Backdrop.js";
import LargeScreenLayout from "./components/LargeScreenLayout/LargeScreenLayout.js";
import DesktopHeader from "./components/DesktopHeader/DesktopHeader.js";
import Lightbox from "./components/Lightbox/Lightbox.js";
import CartCheckoutModal from "./components/Cart/CartCheckoutModal.js";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Handle responsive design on larger screen sizes
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxActiveIndex, setLightboxActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isInLightbox, setIsInLightbox] = useState(false);

  const images = [
    sneakersImgOne,
    sneakersImgTwo,
    sneakersImgThree,
    sneakersImgFour,
  ];

  const handleLightboxOpen = (index) => {
    setLightboxActiveIndex(index);
    setIsLightboxOpen(true);
    setIsInLightbox(true);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleCartToggle = () => {
    if (isCheckout) return;
    setIsCartOpen((prevState) => !prevState);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleBackdropClick = () => {
    setIsMenuOpen(false);
  };

  const handleLightBoxThumbnailClick = (index) => {
    setLightboxActiveIndex(index);
  };

  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
    setIsInLightbox(false);
  };

  const addItem = () => {
    setCartItems((prevCartItems) => prevCartItems + 1);
  };

  const subtractItem = () => {
    if (cartItems === 0) {
      return;
    }
    setCartItems((prevCartItems) => prevCartItems - 1);
  };

  const addTotalItemsToCart = () => {
    setTotalCartItems((prevCartItems) => prevCartItems + cartItems);
    setCartItems(0);
  };

  const resetCartItems = () => {
    setTotalCartItems(0);
  };

  const handleCheckout = () => {
    setIsCheckout(true);
    setIsCartOpen(false);
    setTotalCartItems(0);
  };

  const handleCloseCheckoutModal = () => {
    setIsCheckout(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = screenWidth >= 768;

  return (
    <div className="container">
      {isLargeScreen ? (
        <DesktopHeader
          onCartToggle={handleCartToggle}
          totalCartItems={totalCartItems}
        />
      ) : (
        <MobileHeader
          isMenuOpen={isMenuOpen}
          onMenuToggle={handleMenuToggle}
          onCartToggle={handleCartToggle}
          totalCartItems={totalCartItems}
        />
      )}

      <main>
        {!isLargeScreen && <Hero images={images} />}
        {isLargeScreen ? (
          <LargeScreenLayout
            images={images}
            activeThumbnailIndex={activeIndex}
            onImageClick={handleLightboxOpen}
            onThumbnailClick={handleThumbnailClick}
            isInLightbox={isInLightbox}
            onAddItem={addItem}
            onSubtractItem={subtractItem}
            onAddTotalItems={addTotalItemsToCart}
            cartItems={cartItems}
          />
        ) : (
          <SneakerDetails
            onAddItem={addItem}
            onSubtractItem={subtractItem}
            onAddTotalItems={addTotalItemsToCart}
            cartItems={cartItems}
          />
        )}
        {!isLargeScreen && <MobileMenu isMenuOpen={isMenuOpen} />}
        {isMenuOpen && (
          <Backdrop show={isMenuOpen} onClick={handleBackdropClick} />
        )}
        {isCartOpen && (
          <Cart
            onAddItem={addItem}
            onSubtractItem={subtractItem}
            totalCartItems={totalCartItems}
            onResetCartItems={resetCartItems}
            onCheckout={handleCheckout}
          />
        )}
        {isCheckout && (
          <CartCheckoutModal
            onCloseCheckoutModal={handleCloseCheckoutModal}
            isCheckout={isCheckout}
          />
        )}
        {isLightboxOpen && isLargeScreen && (
          <Lightbox
            images={images}
            activeThumbnailIndex={lightboxActiveIndex}
            onThumbnailClick={handleLightBoxThumbnailClick}
            isLightboxOpen={isLightboxOpen}
            onLightboxClose={handleLightboxClose}
          />
        )}
      </main>
    </div>
  );
}

export default App;
