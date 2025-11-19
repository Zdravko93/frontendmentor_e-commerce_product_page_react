import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

export function useWindowWidth() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 150);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
