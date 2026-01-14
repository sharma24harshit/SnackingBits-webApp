import { useEffect, useRef, useState } from "react";

export default function InfiniteCarousel({
  items,
  interval = 4000,
  transitionDuration = 700,
  className = "",
}) {
  const [index, setIndex] = useState(1);
  const trackRef = useRef(null);
  const totalSlides = items.length;
  const trackSlidesCount = totalSlides + 2;
  const slideWidthPct = 100 / trackSlidesCount;

  // Clone first & last slide
  const slides = [
    items[totalSlides - 1],
    ...items,
    items[0],
  ];

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  // Handle infinite looping without jump
  useEffect(() => {
    if (!trackRef.current) return;

    if (index === totalSlides + 1) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(1);
      }, transitionDuration);
    }

    if (index === 0) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(totalSlides);
      }, transitionDuration);
    }
  }, [index, totalSlides, transitionDuration]);

  // Restore transition after instant jump
  useEffect(() => {
    if (!trackRef.current) return;

    requestAnimationFrame(() => {
      trackRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    });
  }, [index, transitionDuration]);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{
          width: `${trackSlidesCount * 100}%`,
          transform: `translateX(-${index * slideWidthPct}%)`,
        }}
      >
        {slides.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{ width: `${slideWidthPct}%` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
