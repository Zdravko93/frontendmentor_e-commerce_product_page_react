import { useState, useEffect, useCallback } from "react";

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

// Image array
const images = [
  sneakersImgOne,
  sneakersImgTwo,
  sneakersImgThree,
  sneakersImgFour,
];

function App() {
  const [cart, setCart] = useState({ items: 0, total: 0, isCheckout: false });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // cart-related states
  const [imageState, setImageState] = useState({
    activeIndex: 0,
    lightboxIndex: 0,
    isLightboxOpen: false,
    isInLightbox: false,
  });

  const isLargeScreen = screenWidth >= 768;

  // --- Cart functions ---
  const addItem = useCallback(
    () => setCart((prev) => ({ ...prev, items: prev.items + 1 })),
    []
  );
  const subtractItem = useCallback(
    () => setCart((prev) => ({ ...prev, items: Math.max(prev.items - 1, 0) })),
    []
  );
  const addTotalItemsToCart = useCallback(
    () =>
      setCart((prev) => ({
        ...prev,
        total: prev.total + prev.items,
        items: 0,
      })),
    []
  );
  const resetCartItems = useCallback(
    () => setCart((prev) => ({ ...prev, total: 0 })),
    []
  );
  const handleCheckout = useCallback(
    () => setCart((prev) => ({ ...prev, total: 0, isCheckout: true })),
    []
  );
  const handleCloseCheckoutModal = useCallback(
    () => setCart((prev) => ({ ...prev, isCheckout: false })),
    []
  );

  // --- Menu & Cart toggles ---
  const handleCartToggle = useCallback(() => {
    if (!cart.isCheckout) setIsCartOpen((prev) => !prev);
  }, [cart.isCheckout]);

  const handleMenuToggle = useCallback(
    () => setIsMenuOpen((prev) => !prev),
    []
  );
  const handleBackdropClick = useCallback(() => setIsMenuOpen(false), []);

  // --- Image functions ---
  const handleThumbnailClick = useCallback(
    (index) => setImageState((prev) => ({ ...prev, activeIndex: index })),
    []
  );

  const handleLightboxOpen = useCallback(
    (index) =>
      setImageState({
        activeIndex: index,
        lightboxIndex: index,
        isLightboxOpen: true,
        isInLightbox: true,
      }),
    []
  );

  const handleLightboxClose = useCallback(
    () =>
      setImageState((prev) => ({
        ...prev,
        isLightboxOpen: false,
        isInLightbox: false,
      })),
    []
  );

  const handleLightBoxThumbnailClick = useCallback(
    (index) => setImageState((prev) => ({ ...prev, lightboxIndex: index })),
    []
  );

  // --- Handle resize ---
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // UI
  return (
    <div className="container">
      {isLargeScreen ? (
        <DesktopHeader
          onCartToggle={handleCartToggle}
          totalCartItems={cart.total}
        />
      ) : (
        <MobileHeader
          isMenuOpen={isMenuOpen}
          onMenuToggle={handleMenuToggle}
          onCartToggle={handleCartToggle}
          totalCartItems={cart.total}
        />
      )}

      <main>
        {!isLargeScreen && <Hero images={images} />}

        {isLargeScreen ? (
          <LargeScreenLayout
            images={images}
            activeThumbnailIndex={imageState.activeIndex}
            onImageClick={handleLightboxOpen}
            onThumbnailClick={handleThumbnailClick}
            isInLightbox={imageState.isInLightbox}
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
        {isMenuOpen && (
          <Backdrop show={isMenuOpen} onClick={handleBackdropClick} />
        )}
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
            onCloseCheckoutModal={handleCloseCheckoutModal}
            isCheckout={cart.isCheckout}
          />
        )}
        {imageState.isLightboxOpen && isLargeScreen && (
          <Lightbox
            images={images}
            activeThumbnailIndex={imageState.lightboxIndex}
            onThumbnailClick={handleLightBoxThumbnailClick}
            isLightboxOpen={imageState.isLightboxOpen}
            onLightboxClose={handleLightboxClose}
          />
        )}
      </main>
    </div>
  );
}

export default App;
