"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Banner.module.scss";

export interface BannerSlide {
  id: string;
  imageUrl: string;
  title?: string;
  description?: string;
  link?: string;
}

interface BannerProps {
  slides: BannerSlide[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function Banner({
  slides,
  autoplay = true,
  autoplayInterval = 5000,
}: BannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  // Autoplay Effect
  useEffect(() => {
    if (!autoplay || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, slides.length, currentSlide]); // Depend on currentSlide resets timer interaction

  // Sync Mobile Scroll with State
  useEffect(() => {
    if (mobileContainerRef.current) {
      const container = mobileContainerRef.current;
      const slide = container.children[currentSlide] as HTMLElement;
      if (slide) {
        // Calculate target scroll position
        const targetScroll = slide.offsetLeft;

        // Only scroll if significantly different to allow manual scroll without fighting
        if (Math.abs(container.scrollLeft - targetScroll) > 20) {
          isProgrammaticScroll.current = true;
          container.scrollTo({
            left: targetScroll,
            behavior: "smooth",
          });

          // Reset lock after animation
          // Use longer timeout (1000ms) to handle the long "rewind" scroll from last to first slide
          // This prevents handleMobileScroll from hijacking the state during the transition
          const timeout = setTimeout(() => {
            isProgrammaticScroll.current = false;
          }, 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [currentSlide]);

  const handleMobileScroll = () => {
    if (mobileContainerRef.current && !isProgrammaticScroll.current) {
      const container = mobileContainerRef.current;
      const index = Math.round(
        container.scrollLeft / (container.scrollWidth / slides.length),
      );

      if (index !== currentSlide && index >= 0 && index < slides.length) {
        setCurrentSlide(index);
      }
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className={styles.banner}>
        <div className={styles.emptySlide}>No slides available</div>
      </div>
    );
  }

  return (
    <div className={styles.bannerContainer}>
      {/* ============================================ */}
      {/* DESKTOP VIEW: Slider (Hidden on Mobile)      */}
      {/* ============================================ */}
      <div className={styles.desktopView}>
        <div className={styles.banner}>
          {/* Slides */}
          <div className={styles.slidesWrapper}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${styles.slide} ${
                  index === currentSlide ? styles.active : ""
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.title || `Slide ${index + 1}`}
                  className={styles.slideImage}
                />
                {(slide.title || slide.description) && (
                  <div className={styles.slideContent}>
                    {slide.title && (
                      <h2 className={styles.slideTitle}>{slide.title}</h2>
                    )}
                    {slide.description && (
                      <p className={styles.slideDescription}>
                        {slide.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                className={styles.navButton + " " + styles.prevButton}
                onClick={goToPrevious}
                aria-label="Previous slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className={styles.navButton + " " + styles.nextButton}
                onClick={goToNext}
                aria-label="Next slide"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ============================================ */}
      {/* MOBILE VIEW: H-Scroll List (Visible on Mobile) */}
      {/* ============================================ */}
      <div
        className={styles.mobileView}
        ref={mobileContainerRef}
        onScroll={handleMobileScroll}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.mobileSlide}>
            <img
              src={slide.imageUrl}
              alt={slide.title || "Banner"}
              className={styles.mobileImage}
            />
          </div>
        ))}
      </div>

      {/* ============================================ */}
      {/* SHARED DOTS INDICATOR (Active for Both)      */}
      {/* ============================================ */}
      {slides.length > 1 && (
        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
