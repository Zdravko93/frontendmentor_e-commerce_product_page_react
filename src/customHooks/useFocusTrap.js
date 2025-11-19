import { useEffect } from "react";

export function useFocusTrap({
  containerRef,
  enabled = true,
  initialFocus = null,
}) {
  useEffect(() => {
    if (!enabled || !containerRef?.current) return;

    const focusable = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (initialFocus) {
      initialFocus.focus();
    } else {
      first.focus();
    }

    const trap = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [enabled, containerRef, initialFocus]);
}
