import React, { useState, useRef, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const mobileSlides = [
  '/mobile-slide1.png',
  '/mobile-slide2.png',
  '/mobile-slide3.png',
];

const ANIM_MS   = 650;
const SWIPE_MIN = 40; // px

type Direction = 'next' | 'prev';

function getAnimClass(
  index: number,
  current: number,
  previous: number,
  direction: Direction,
  isInitialLoad: boolean,
): string {
  if (index === current) {
    return isInitialLoad ? 'mobile-slide active initial-fade' : `mobile-slide active mobile-${direction}-in`;
  }
  if (index === previous) {
    return `mobile-slide outgoing mobile-${direction}-out`;
  }
  return 'mobile-slide';
}

const MobileCarousel: React.FC = () => {
  const [current,       setCurrent]       = useState(0);
  const [previous,      setPrevious]      = useState(-1);
  const [direction,     setDirection]     = useState<Direction>('next');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const animating = useRef(false);

  const goTo = useCallback((next: number, dir: Direction) => {
    if (animating.current || next === current) return;
    animating.current = true;
    setIsInitialLoad(false);
    setDirection(dir);
    setPrevious(current);
    setCurrent(next);
    setTimeout(() => { animating.current = false; }, ANIM_MS);
  }, [current]);

  const goNext = useCallback(() => {
    goTo(current === mobileSlides.length - 1 ? 0 : current + 1, 'next');
  }, [current, goTo]);

  const goPrev = useCallback(() => {
    goTo(current === 0 ? mobileSlides.length - 1 : current - 1, 'prev');
  }, [current, goTo]);

  // Touch handling
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null || touchStartX.current === null) return;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > SWIPE_MIN) {
      if (dy > 0) goNext(); // swipe up → next
      else        goPrev(); // swipe down → prev
    }
    touchStartY.current = null;
    touchStartX.current = null;
  };

  return (
    <div
      className="mobile-carousel-wrapper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Up arrow */}
      <button
        className="mobile-carousel-nav up"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <ChevronUp size={22} />
      </button>

      {/* Slides */}
      <div
        className="mobile-slides-area"
        aria-live="polite"
        aria-atomic="true"
      >
        {mobileSlides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Content slide ${index + 1}`}
            className={getAnimClass(index, current, previous, direction, isInitialLoad)}
          />
        ))}
      </div>

      {/* Down arrow */}
      <button
        className="mobile-carousel-nav down"
        onClick={goNext}
        aria-label="Next slide"
      >
        <ChevronDown size={22} />
      </button>

      {/* Vertical dot indicators */}
      <div
        className="mobile-indicators"
        role="tablist"
        aria-label="Slide indicators"
      >
        {mobileSlides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
            className={`mobile-dot${index === current ? ' active' : ''}`}
            onClick={() => goTo(index, index > current ? 'next' : 'prev')}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
