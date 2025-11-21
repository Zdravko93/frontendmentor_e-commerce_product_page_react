import { useEffect } from "react";

export function useFocusTrap({ containerRef, enabled = true }) {
  useEffect(() => {
    if (!enabled || !containerRef?.current) return;

    const container = containerRef.current;
    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    const trapFocus = (e) => {
      if (e.key !== "Tab") return;

      const focusable = Array.from(
        container.querySelectorAll(focusableSelectors)
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (!container.contains(e.target)) {
        e.preventDefault();
        container.querySelector(focusableSelectors)?.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", trapFocus);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enabled, containerRef]);
}
