"use client";

import React from "react";
import { NewsGridProps } from "@/types/components";
import Button from "@/components/Button";
import styles from "./NewsGrid.module.scss";

const NewsGrid: React.FC<NewsGridProps> = ({
  featuredArticle,
  sidebarArticles,
  title,
  viewAllLink,
}) => {
  return (
    <section className={styles.newsGrid}>
      <div className={styles.header}>
        {title && <h2 className={styles.sectionTitle}>{title}</h2>}
        {viewAllLink && (
          <a href={viewAllLink} className={styles.viewAll}>
            View All
          </a>
        )}
      </div>

      <div className={styles.container}>
        {/* Featured Article */}
        <article className={styles.featuredArticle}>
          <a href={featuredArticle.link || "#"} className={styles.featuredLink}>
            <div className={styles.imageWrapper}>
              <img
                src={featuredArticle.imageUrl}
                alt={featuredArticle.title}
                className={styles.featuredImage}
              />
              {featuredArticle.category && (
                <span className={styles.categoryBadge}>
                  {featuredArticle.category}
                </span>
              )}
            </div>

            <div className={styles.featuredContent}>
              <div className={styles.featuredHeader}>
                <h3 className={styles.featuredTitle}>
                  {featuredArticle.title}
                </h3>
                {featuredArticle.date && (
                  <span className={styles.date}>{featuredArticle.date}</span>
                )}
              </div>

              {featuredArticle.description && (
                <p className={styles.featuredDescription}>
                  {featuredArticle.description}
                </p>
              )}

              <div className={styles.buttonWrapper}>
                <Button
                  href={featuredArticle.link || "#"}
                  text="Read More"
                  variant="primary"
                />
              </div>
            </div>
          </a>
        </article>

        {/* Sidebar Articles */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarList}>
            {sidebarArticles.map((article, index) => (
              <article key={article.id} className={styles.sidebarItem}>
                <a
                  href={article.link || "#"}
                  className={styles.sidebarItemLink}
                >
                  <div className={styles.sidebarImageWrapper}>
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className={styles.sidebarImage}
                    />
                    {article.category && (
                      <span className={styles.sidebarCategory}>
                        {article.category}
                      </span>
                    )}
                  </div>

                  <div className={styles.sidebarItemContent}>
                    <h4 className={styles.sidebarTitle}>{article.title}</h4>

                    {article.description && (
                      <p className={styles.sidebarDescription}>
                        {article.description}
                      </p>
                    )}
                  </div>
                </a>

                {index < sidebarArticles.length - 1 && (
                  <div className={styles.divider} />
                )}
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default NewsGrid;
