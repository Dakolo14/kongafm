"use client";

import React from "react";
import styles from "./SellBanner.module.scss";

interface SellBannerProps {
  imageUrl?: string;
  link?: string;
  altText?: string;
  // Responsive options
  mobileImageUrl?: string;
  mobileLink?: string;
  desktopImageUrl?: string;
  desktopLink?: string;
}

const SellBanner: React.FC<SellBannerProps> = ({
  imageUrl,
  link = "#",
  altText = "Promotional Banner",
  mobileImageUrl,
  mobileLink,
  desktopImageUrl,
  desktopLink,
}) => {
  // If responsive props are provided, use them; otherwise fall back to single imageUrl
  const hasMobileVersion = mobileImageUrl && mobileLink;
  const hasDesktopVersion = desktopImageUrl && desktopLink;

  return (
    <section className={styles.sellBanner}>
      {hasMobileVersion && hasDesktopVersion ? (
        <>
          {/* Mobile/Tablet Banner */}
          <a href={mobileLink} className={styles.bannerLink} aria-label="Promotional offer">
            <img
              src={mobileImageUrl}
              alt={altText}
              className={`${styles.bannerImage} ${styles.mobileImage}`}
            />
          </a>
          {/* Desktop Banner */}
          <a href={desktopLink} className={styles.bannerLink} aria-label="Promotional offer">
            <img
              src={desktopImageUrl}
              alt={altText}
              className={`${styles.bannerImage} ${styles.desktopImage}`}
            />
          </a>
        </>
      ) : (
        <a href={link} className={styles.bannerLink} aria-label="Promotional offer">
          <img
            src={imageUrl}
            alt={altText}
            className={styles.bannerImage}
          />
        </a>
      )}
    </section>
  );
};

export default SellBanner;
