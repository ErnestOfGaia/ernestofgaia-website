import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideImages = [
  '/slide1.png',
  '/slide2.png',
  '/slide3.png',
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState<number>(-1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const nextSlide = () => {
    setIsInitialLoad(false);
    setDirection('next');
    setPreviousSlide(currentSlide);
    setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsInitialLoad(false);
    setDirection('prev');
    setPreviousSlide(currentSlide);
    setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsInitialLoad(false);
    setDirection(index > currentSlide ? 'next' : 'prev');
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        className="carousel-nav prev"
        onClick={prevSlide}
        aria-label="Previous slide"
        style={{ position: 'absolute', left: '0', zIndex: 10 }}
      >
        <ChevronLeft size={32} />
      </button>

      {/* aria-live announces slide changes to screen readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'relative',
          width: '100%',
          height: '75vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {slideImages.map((src, index) => {
          let statusClass = 'inactive';
          if (index === currentSlide) {
            statusClass = isInitialLoad ? 'active initial-fade' : `active ${direction}-in`;
          } else if (index === previousSlide) {
            statusClass = `outgoing ${direction}-out`;
          }

          return (
            <img
              key={index}
              src={src}
              alt={`Content slide ${index + 1}`}
              className={`gallery-slide ${statusClass}`}
            />
          );
        })}
      </div>

      <button
        className="carousel-nav next"
        onClick={nextSlide}
        aria-label="Next slide"
        style={{ position: 'absolute', right: '0', zIndex: 10 }}
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide indicators */}
      <div
        className="carousel-indicators"
        role="tablist"
        aria-label="Slide indicators"
        style={{
          position: 'absolute',
          bottom: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {slideImages.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            style={{ width: '10px', height: '10px', borderRadius: '50%', padding: 0 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
