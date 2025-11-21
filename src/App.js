import { useState } from "react";

import "./App.css";

// Images
import sneakersImgOne from "./assets/image-product-1.jpg";
import sneakersImgTwo from "./assets/image-product-2.jpg";
import sneakersImgThree from "./assets/image-product-3.jpg";
import sneakersImgFour from "./assets/image-product-4.jpg";

// Components
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

// Custom Hooks
import { useWindowWidth } from "./customHooks/useWindowWidth";
import { useCart } from "./customHooks/useCart";
import { useLightbox } from "./customHooks/useLightbox";

// Image array
const images = [
  sneakersImgOne,
  sneakersImgTwo,
  sneakersImgThree,
  sneakersImgFour,
];

function App() {
  // Window width
  const screenWidth = useWindowWidth();
  const isLargeScreen = screenWidth >= 768;

  // Cart logic
  const {
    cart,
    addItem,
    subtractItem,
    addTotalItemsToCart,
    resetCartItems,
    checkout,
    closeCheckout,
  } = useCart();

  // Lightbox logic
  const {
    activeIndex,
    lightboxIndex,
    isLightboxOpen,
    isInLightbox,
    openLightbox,
    closeLightbox,
    selectThumbnail,
    setActiveIndex,
  } = useLightbox();

  // Menu & Cart toggles
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleCart = () => {
    if (!cart.isCheckout) setIsCartOpen((prev) => !prev);
  };

  const handleCheckout = () => {
    setIsCartOpen(false); // close the cart
    checkout(); // open the checkout modal
  };

  return (
    <div className="container">
      {isLargeScreen ? (
        <DesktopHeader
          onCartToggle={toggleCart}
          totalCartItems={cart.total}
          isCartOpen={isCartOpen}
        />
      ) : (
        <MobileHeader
          isMenuOpen={isMenuOpen}
          onMenuToggle={toggleMenu}
          onCartToggle={toggleCart}
          totalCartItems={cart.total}
          isCartOpen={isCartOpen}
        />
      )}

      <main>
        {!isLargeScreen && <Hero images={images} isInLightbox={isInLightbox} />}

        {isLargeScreen ? (
          <LargeScreenLayout
            images={images}
            activeThumbnailIndex={activeIndex}
            onImageClick={openLightbox}
            onThumbnailClick={setActiveIndex}
            isInLightbox={isInLightbox}
            onAddItem={addItem}
            onSubtractItem={subtractItem}
            onAddTotalItems={addTotalItemsToCart}
            cartItems={cart.items}
          />
        ) : (
          <SneakerDetails
            onAddItem={addItem}
            onSubtractItem={subtractItem}
            onAddTotalItems={addTotalItemsToCart}
            cartItems={cart.items}
          />
        )}

        {!isLargeScreen && <MobileMenu isMenuOpen={isMenuOpen} />}
        {isMenuOpen && <Backdrop show={isMenuOpen} />}
        {isCartOpen && (
          <Cart
            onAddItem={addItem}
            onSubtractItem={subtractItem}
            totalCartItems={cart.total}
            onResetCartItems={resetCartItems}
            onCheckout={handleCheckout}
          />
        )}
        {cart.isCheckout && (
          <CartCheckoutModal
            onCloseCheckoutModal={closeCheckout}
            isCheckout={cart.isCheckout}
          />
        )}
        {isLightboxOpen && isLargeScreen && (
          <Lightbox
            images={images}
            activeThumbnailIndex={lightboxIndex}
            onThumbnailClick={selectThumbnail}
            isLightboxOpen={isLightboxOpen}
            onLightboxClose={closeLightbox}
          />
        )}
      </main>
    </div>
  );
}

export default App;
