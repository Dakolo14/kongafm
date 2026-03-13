"use client";

import React, { useState } from "react";
import { ProductItem } from "@/types/components";
import styles from "./ProductShowcase.module.scss";

export interface ProductShowcaseProps {
  title: string; // "Product Showcase Videos"
  videos: ProductItem[];
  viewAllLink?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  videos,
  viewAllLink,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (e: React.MouseEvent<HTMLAnchorElement>, youtubeId?: string) => {
    if (youtubeId) {
      e.preventDefault();
      setSelectedVideo(youtubeId);
    }
  };

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
            href={video.link || "#"}
            onClick={(e) => handleVideoClick(e, video.youtubeId)}
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
              {video.duration && (
                <div className={styles.timeBadge}>{video.duration}</div>
              )}

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

      {/* YouTube Modal */}
      {selectedVideo && (
        <div className={styles.modal} onClick={() => setSelectedVideo(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video"
            >
              ✕
            </button>
            <div className={styles.iframeWrapper}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&modestbranding=1`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
