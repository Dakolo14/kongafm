"use client";

import React from "react";
import styles from "./SellBanner.module.scss";

interface SellBannerProps {
  imageUrl: string;
  link?: string;
  altText?: string;
}

const SellBanner: React.FC<SellBannerProps> = ({
  imageUrl,
  link = "#",
  altText = "Promotional Banner",
}) => {
  return (
    <section className={styles.sellBanner}>
      <a href={link} className={styles.bannerLink} aria-label="Promotional offer">
        <img
          src={imageUrl}
          alt={altText}
          className={styles.bannerImage}
        />
      </a>
    </section>
  );
};

export default SellBanner;
