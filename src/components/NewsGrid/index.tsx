"use client";

import React from "react";
import Button from "@/components/Button";
import styles from "./NewsGrid.module.scss";

export interface NewsArticle {
  id: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  imageUrl: string;
  link?: string;
  slug?: string;
  excerpt?: string;
  readTime?: string;
}

interface NewsGridProps {
  title?: string;
  viewAllLink?: string;
  featuredArticle?: NewsArticle;
  sidebarArticles?: NewsArticle[];
  articles?: NewsArticle[];
}

// Mock data
const DEFAULT_NEWS_DATA = {
  featured: {
    id: "news-featured-1",
    imageUrl:
      "https://www.bellanaija.com/wp-content/uploads/2025/09/TDAFRICA-AT-KONGAFM-STUDIOS-2.jpg",
    title: "Konga103.7FM amplifies TD Africa’s Super App revolution on The Market Square",
    category: "News",
    description:
      "Konga103.7FM once again demonstrated its commitment to driving conversations that shape Nigeria’s digital and commercial landscape with an enlightening edition of The Market Square hosted by Lilian Duru-Valentine.",
    date: "September 12, 2025",
    link: "https://www.bellanaija.com/2025/09/konga1037fm-amplifies-tdafrica/",
  },
  sidebarArticles: [
    {
      id: "news-side-1",
      imageUrl:
        "https://www.bellanaija.com/wp-content/uploads/2025/09/FEATURED-IMAGE-2-2048x1365.jpeg",
      title: "Zinox, KongaCares launch ‘Computerise Nigeria Initiative’ to equip 1m students with laptops",
      description:
        "Zinox Technologies, Nigeria’s leading integrated ICT powerhouse, in partnership with KongaCares, the Corporate Social Responsibility arm of Konga Group, has launched the Computerise Nigeria Initiative, a bold nationwide programme designed to bridge Nigeria’s digital education gap. This initiative is designed to equip one million young Nigerians with personal computers, digital tools, and practical skills for the future of work.",
      category: "News",
      date: "September 10, 2025",
      link: "https://www.bellanaija.com/2025/09/zinox-kongacares-launch/",
    }, 
    {
      id: "news-side-2",
      imageUrl:
        "https://www.bellanaija.com/wp-content/uploads/2025/09/SAMSUNG-STAFF-AT-KONGA103.7FM-STUDIOS-1.jpg",
      title: "Konga103.7FM spotlights new Samsung Galaxy Z Series",
      description:
        "Samsung has officially launched its latest line of flagship smartphones: the Galaxy Fold 7, Flip 7, and Flip 7 FE.",
      category: "Promotions",
      date: "September 2, 2025",
      link: "https://www.bellanaija.com/2025/09/konga-103-7fm-and-samsung/",
    },
    {
      id: "news-side-3",
      imageUrl:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=200&fit=crop",
      title: "Afrobeats Grammy Nominations",
      description:
        "A record number of Afrobeats artists have been nominated for this year's Grammy Awards, signaling global dominance.",
      category: "Awards",
      date: "January 9, 2026",
      link: "/news/grammy-noms",
    },
    {
      id: "news-side-4",
      imageUrl:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=200&fit=crop",
      title: "Afrobeats Grammy Nominations",
      description:
        "A record number of Afrobeats artists have been nominated for this year's Grammy Awards, signaling global dominance.",
      category: "Awards",
      date: "January 9, 2026",
      link: "/news/grammy-noms",
    },
  ],
};

const NewsGrid: React.FC<NewsGridProps> = ({
  title = "Latest News",
  viewAllLink,
  featuredArticle = DEFAULT_NEWS_DATA.featured,
  sidebarArticles = DEFAULT_NEWS_DATA.sidebarArticles,
  articles,
}) => {
  // If articles array is provided, display as grid (for updates page)
  if (articles && articles.length > 0) {
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

        <div className={styles.articlesGridContainer}>
          {articles.map((article) => (
            <article key={article.id} className={styles.gridArticle}>
              <a
                href={article.link || article.slug ? `/updates/${article.slug}` : "#"}
                className={styles.gridLink}
              >
                <div className={styles.gridImageWrapper}>
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className={styles.gridImage}
                  />
                  {article.category && (
                    <span className={styles.gridCategoryBadge}>
                      {article.category}
                    </span>
                  )}
                </div>

                <div className={styles.gridContent}>
                  <h3 className={styles.gridTitle}>{article.title}</h3>

                  {article.excerpt && (
                    <p className={styles.gridExcerpt}>{article.excerpt}</p>
                  )}

                  <div className={styles.gridMeta}>
                    {article.date && <span>{article.date}</span>}
                    {article.readTime && (
                      <span>• {article.readTime}</span>
                    )}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    );
  }

  // Default featured + sidebar layout for homepage
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
                <Button text="Read More" variant="primary" />
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
