import { useState, useCallback } from "react";

export function useCart() {
  const [cart, setCart] = useState({
    items: 0,
    total: 0,
    isCheckout: false,
  });

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

  const checkout = useCallback(
    () => setCart((prev) => ({ ...prev, isCheckout: true, total: 0 })),
    []
  );

  const closeCheckout = useCallback(
    () => setCart((prev) => ({ ...prev, isCheckout: false })),
    []
  );

  return {
    cart,
    addItem,
    subtractItem,
    addTotalItemsToCart,
    resetCartItems,
    checkout,
    closeCheckout,
  };
}
