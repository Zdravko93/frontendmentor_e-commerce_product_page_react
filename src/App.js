import { useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";

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
  const isLargeScreen = useWindowWidth();

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

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  const toggleCart = useCallback(() => {
    if (!cart.isCheckout) setIsCartOpen((prev) => !prev);
  }, [cart.isCheckout]);

  const handleCheckout = useCallback(() => {
    setIsCartOpen(false); // close the cart
    checkout(); // open the checkout modal
  }, [checkout]);

  return (
    <>
      {/* SEO  */}
      <Helmet>
        <title>
          Frontend Mentor - E-Commerce Product Page | Fall Limited Edition
          Sneakers
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zdravko" />
        <meta
          name="description"
          content="Fall Limited Edition Sneakers - stylish, low-profile, and perfect for casual wear. Durable rubber sole for any weather."
        />
        <meta
          property="og:title"
          content="Frontend Mentor - E-Commerce Product Page | Fall Limited Edition
          Sneakers"
        />
        <meta
          property="og:description"
          content="Fall Limited Edition Sneakers - stylish, low-profile, and perfect for casual wear."
        />
        <meta property="og:image" content={images[0]} />
        <link
          rel="canonical"
          href="https://zdravko93.github.io/frontendmentor_e-commerce_product_page_react/"
        />
      </Helmet>

      <div className="container">
        {isLargeScreen ? (
          <DesktopHeader
            onCartToggle={toggleCart}
            totalCartItems={cart.total}
            isCartOpen={isCartOpen}
            isDesktopSize={isLargeScreen}
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
          {!isLargeScreen && (
            <Hero images={images} isInLightbox={isInLightbox} />
          )}

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

          {!isLargeScreen && (
            <MobileMenu
              isMenuOpen={isMenuOpen}
              isDesktopSize={isLargeScreen}
              onMenuToggle={toggleMenu}
            />
          )}
          {isMenuOpen && <Backdrop show={isMenuOpen} />}
          {isCartOpen && (
            <Cart
              onAddItem={addItem}
              onSubtractItem={subtractItem}
              totalCartItems={cart.total}
              onResetCartItems={resetCartItems}
              onCheckout={handleCheckout}
              isCartOpen={isCartOpen}
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
    </>
  );
}

export default App;
