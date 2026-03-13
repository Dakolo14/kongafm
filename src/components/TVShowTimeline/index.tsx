"use client";

import React, { useRef, useState, useEffect } from "react";
import { ShowTimelineProps } from "@/types/components";
import { isShowLive } from "@/utils/timeUtils";
import styles from "./TVShowTimeline.module.scss";

const TVShowTimeline: React.FC<ShowTimelineProps> = ({
  title,
  shows,
  viewAllLink,
  variant = "tv",
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [liveShows, setLiveShows] = useState<Record<string, boolean>>({});

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPos =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scroll({
        left: newScrollPos,
        behavior: "smooth",
      });

      // Update arrow visibility
      setTimeout(() => {
        if (scrollContainerRef.current) {
          setShowLeftArrow(scrollContainerRef.current.scrollLeft > 0);
          setShowRightArrow(
            scrollContainerRef.current.scrollLeft <
              scrollContainerRef.current.scrollWidth -
                scrollContainerRef.current.clientWidth -
                10,
          );
        }
      }, 10);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setShowLeftArrow(scrollContainerRef.current.scrollLeft > 0);
      setShowRightArrow(
        scrollContainerRef.current.scrollLeft <
          scrollContainerRef.current.scrollWidth -
            scrollContainerRef.current.clientWidth -
            10,
      );
    }
  };

  // Check which shows are live and update every minute
  useEffect(() => {
    const checkLiveStatus = () => {
      const updatedLiveStatus: Record<string, boolean> = {};
      shows.forEach((show) => {
        updatedLiveStatus[show.id] = isShowLive(show.time);
      });
      setLiveShows(updatedLiveStatus);
    };

    // Initial check
    checkLiveStatus();

    // Update every minute
    const interval = setInterval(checkLiveStatus, 60000);
    return () => clearInterval(interval);
  }, [shows]);

  return (
    <section className={styles.tvShowTimeline}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className={styles.viewAll}>
            View All
          </a>
        )}
      </div>

      <div className={styles.carouselWrapper}>
        {showLeftArrow && (
          <button
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={() => scroll("left")}
            aria-label="Scroll left"
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
        )}

        <div
          className={styles.carousel}
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {shows.map((show) => (
            <div
              key={show.id}
              className={styles.showCard}
            >
              <div className={styles.imageContainer}>
                <img
                  src={show.imageUrl}
                  alt={show.showName}
                  className={styles.image}
                />
                {(show.badge || liveShows[show.id]) && (
                  <div className={styles.badge}>
                    {liveShows[show.id] ? "LIVE" : show.badge}
                  </div>
                )}
              </div>
              <div className={styles.info}>
                <h3 className={styles.showName}>{show.showName}</h3>
                <p className={styles.time}>{show.time}</p>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
          <button
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={() => scroll("right")}
            aria-label="Scroll right"
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
        )}
      </div>
    </section>
  );
};

export default TVShowTimeline;
