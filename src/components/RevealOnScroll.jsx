import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Reveals children when they enter the viewport.
 * - Hidden until visible
 * - Plays "rise + fade" once by default
 */
const RevealOnScroll = ({
  children,
  delay = 0,
  once = true,
  className = "",
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}) => {
  const elRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const style = useMemo(
    () => ({ "--sb-delay": typeof delay === "number" ? `${delay}ms` : delay }),
    [delay]
  );

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // If already visible (e.g. navigation back), don't re-observe.
    if (isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, once, rootMargin, threshold]);

  return (
    <div
      ref={elRef}
      className={`sb-reveal-up ${isVisible ? "is-visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;

