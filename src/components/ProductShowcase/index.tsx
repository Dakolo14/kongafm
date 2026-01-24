"use client";

import React from "react";
import styles from "./ProductShowcase.module.scss";

// 4. Data Interface: Define the props interface strictly
export interface ProductVideo {
  id: string;
  thumbnailUrl: string;
  duration: string; // e.g., "0:23"
  title: string;
  description: string;
  link: string;
}

export interface ProductShowcaseProps {
  title: string; // "Product Showcase Videos"
  videos: ProductVideo[];
  viewAllLink?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  videos,
  viewAllLink,
}) => {
  return (
    <section className={styles.productShowcase}>
      {/* 1. Header: Same layout as Timeline */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className={styles.viewAll}>
            View All
          </a>
        )}
      </div>

      {/* Grid / Slider Container */}
      <div className={styles.container}>
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            className={styles.card}
            aria-label={`Watch ${video.title}`}
          >
            <div className={styles.thumbnailWrapper}>
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className={styles.thumbnail}
              />
              {/* Time Badge overlaid in bottom-right */}
              <div className={styles.timeBadge}>{video.duration}</div>

              {/* Optional: Play icon overlay for better UX indicating video */}
              <div className={styles.playOverlay}>
                <div className={styles.playIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.videoTitle}>{video.title}</h3>
              <p className={styles.videoDescription}>{video.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
