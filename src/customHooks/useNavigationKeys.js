import { useEffect } from "react";

export function useNavigationKeys({ keys = [], onKeyPress, enabled = true }) {
  useEffect(() => {
    if (!enabled) return;

    const handleKey = (e) => {
      if (keys.includes(e.key)) {
        onKeyPress(e.key);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [keys, enabled, onKeyPress]);
}
