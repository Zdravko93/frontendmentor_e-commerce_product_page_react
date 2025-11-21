import { useEffect } from "react";

export function useFocusTrap({ containerRef, enabled = true }) {
  useEffect(() => {
    if (!enabled || !containerRef?.current) return;

    const container = containerRef.current;

    // Focus modal container initially
    container.focus();

    const focusable = containerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

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

    // Prevent changing focus to elements outside modal
    const handleClickOutside = (e) => {
      if (!container.contains(e.target)) {
        e.preventDefault();
        container.focus();
      }
    };

    document.addEventListener("keydown", trap);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", trap);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enabled, containerRef]);
}
