import { useState, useCallback } from "react";

export function useLightbox() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isInLightbox, setIsInLightbox] = useState(false);

  const openLightbox = useCallback((index) => {
    setActiveIndex(index);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    setIsInLightbox(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setIsInLightbox(false);
  }, []);

  const selectThumbnail = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  return {
    // state
    activeIndex,
    lightboxIndex,
    isLightboxOpen,
    isInLightbox,

    // actions
    openLightbox,
    closeLightbox,
    selectThumbnail,
    setActiveIndex,
  };
}
