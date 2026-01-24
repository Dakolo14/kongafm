"use client";

import React from "react";
import { NewsItem } from "@/types/components";
import Button from "@/components/Button";
import styles from "./TrendingNews.module.scss";

interface TrendingNewsProps {
  title?: string;
  article: NewsItem & { fullContent?: string };
}

const TrendingNews: React.FC<TrendingNewsProps> = ({ title, article }) => {
  return (
    <section className={styles.trendingNews}>
      <div className={styles.container}>
        {/* Featured Image */}
        <div className={styles.imageSection}>
          <img
            src={article.imageUrl}
            alt={article.title}
            className={styles.featuredImage}
          />
        </div>

        {/* Content Section */}
        <div className={styles.contentSection}>
          <h2 className={styles.title}>{article.title}</h2>

          {article.fullContent && (
            <p className={styles.description}>{article.fullContent}</p>
          )}

          <Button
            href={article.link || "#"}
            text="Read More"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;
