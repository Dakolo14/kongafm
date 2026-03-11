"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./NewsGrid.module.scss";

export interface NewsArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface NewsGridProps {
  articles?: NewsArticle[];
}

// Mock data
const MOCK_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    slug: "konga-fm-launches-new-morning-show",
    category: "News",
    title: "Konga FM Launches Exciting New Morning Show",
    excerpt:
      "Discover the latest additions to our radio lineup with dynamic hosts and engaging content.",
    date: "Mar 10, 2026",
    readTime: "5 mins read",
    imageUrl: "/morningInspiration.png",
  },
  {
    id: "2",
    slug: "behind-the-scenes-kongafm-studios",
    category: "News",
    title: "Behind the Scenes: Inside Our State-of-the-Art Studios",
    excerpt:
      "Get an exclusive look at the cutting-edge technology powering Konga Communications.",
    date: "Mar 8, 2026",
    readTime: "4 mins read",
    imageUrl: "/kongaDeals.png",
  },
  {
    id: "3",
    slug: "entrepreneur-showcase-success-stories",
    category: "News",
    title: "The Entrepreneur: Celebrating Nigeria's Business Leaders",
    excerpt:
      "Meet the visionaries transforming Nigeria's business landscape through innovation.",
    date: "Mar 5, 2026",
    readTime: "6 mins read",
    imageUrl: "/theScoop.png",
  },
  {
    id: "4",
    slug: "travel-essentials-adventure-guide",
    category: "Blogs",
    title: "Travel Essentials: Your Complete Adventure Guide",
    excerpt:
      "Expert tips and tricks to make your next journey seamless and unforgettable.",
    date: "Mar 3, 2026",
    readTime: "7 mins read",
    imageUrl: "/cruiseControl.png",
  },
  {
    id: "5",
    slug: "health-wellness-expert-interview",
    category: "Blogs",
    title: "Health & Wellness: Expert Interview Series",
    excerpt:
      "Learn from top health professionals about living your best, healthiest life.",
    date: "Feb 28, 2026",
    readTime: "5 mins read",
    imageUrl: "/healthCheck.png",
  },
  {
    id: "6",
    slug: "creative-minds-digital-innovation",
    category: "Updates",
    title: "Creative Minds: Digital Innovation in Nigeria",
    excerpt:
      "Spotlight on creators and influencers shaping the future of digital media.",
    date: "Feb 25, 2026",
    readTime: "4 mins read",
    imageUrl: "/beyondHeadlines.png",
  },
];

export default function NewsGrid({ articles = MOCK_ARTICLES }: NewsGridProps) {
  return (
    <section className={styles.newsGridSection}>
      <div className={styles.gridContainer}>
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/updates/${article.slug}`}
            className={styles.newsCard}
          >
            {/* Image Container */}
            <div className={styles.imageContainer}>
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Text Content */}
            <div className={styles.textContent}>
              {/* Category Tag */}
              <div className={styles.categoryTag}>
                <span className={styles.categoryDot}></span>
                <span className={styles.categoryText}>{article.category}</span>
              </div>

              {/* Headline */}
              <h3 className={styles.headline}>{article.title}</h3>

              {/* Excerpt */}
              <p className={styles.excerpt}>{article.excerpt}</p>

              {/* Meta Info */}
              <div className={styles.metaInfo}>
                <span className={styles.date}>{article.date}</span>
                <span className={styles.bullet}>&bull;</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
