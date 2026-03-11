"use client";

import styles from "./NewsSkeleton.module.scss";

interface NewsSkeletonProps {
  count?: number;
}

export default function NewsSkeleton({ count = 6 }: NewsSkeletonProps) {
  return (
    <div className={styles.skeletonGrid}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.skeletonCard}>
          <div className={styles.skeletonImage}></div>
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonTag}></div>
            <div className={styles.skeletonHeadline}></div>
            <div className={styles.skeletonHeadlineSecond}></div>
            <div className={styles.skeletonExcerpt}></div>
            <div className={styles.skeletonExcerptSecond}></div>
            <div className={styles.skeletonMeta}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
