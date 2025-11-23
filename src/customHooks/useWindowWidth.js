import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

export function useWindowWidth() {
  const [isLargeScreen, setIsLargeScreen] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      const nextIsLarge = window.innerWidth >= 768;

      setIsLargeScreen((prev) => {
        if (prev !== nextIsLarge) return nextIsLarge; // only update if breakpoint changes
        return prev; // otherwise no re-render
      });
    }, 150);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
}
