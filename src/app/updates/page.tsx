"use client";

import { useState, useMemo } from "react";
import UpdatesHero from "@/components/UpdatesHero";
import NewsGrid, { NewsArticle } from "@/components/NewsGrid";
import NewsSkeleton from "@/components/NewsSkeleton";
import FilterBar, { FilterCategory } from "@/components/FilterBar";
import styles from "./page.module.scss";

// Mock data with all articles
const ALL_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    slug: "td-africa-super-app",
    category: "News",
    title: "Konga103.7FM amplifies TD Africa's Super App revolution on The Market Square",
    excerpt:
      "Konga103.7FM once again demonstrated its commitment to driving conversations that shape Nigeria's digital and commercial landscape with an enlightening edition of The Market Square hosted by Lilian Duru-Valentine.",
    date: "September 12, 2025",
    readTime: "5 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/09/TDAFRICA-AT-KONGAFM-STUDIOS-2.jpg",
    link: "https://www.bellanaija.com/2025/09/konga1037fm-amplifies-tdafrica/",
  },
  {
    id: "2",
    slug: "behind-the-scenes-kongafm-studios",
    category: "News",
    title: "Behind the Scenes: Inside Our State-of-the-Art Studios",
    excerpt:
      "Get an exclusive look at the cutting-edge technology powering Konga Communications.",
    date: "September 10, 2025",
    readTime: "4 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/09/FEATURED-IMAGE-2-2048x1365.jpeg",
    link: "https://www.bellanaija.com/2025/09/zinox-kongacares-launch/",
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
  {
    id: "7",
    slug: "music-festival-lineup-announcement",
    category: "News",
    title: "Exclusive: Music Festival Lineup Announcement",
    excerpt:
      "Get ready for the biggest music event of the year with incredible artists.",
    date: "Feb 22, 2026",
    readTime: "3 mins read",
    imageUrl: "/morningInspiration.png",
  },
  {
    id: "8",
    slug: "tech-startup-interview-founder-story",
    category: "News",
    title: "Tech Startup Interview: From Idea to Impact",
    excerpt:
      "An inspiring conversation with the founder of Nigeria's fastest-growing tech company.",
    date: "Feb 20, 2026",
    readTime: "6 mins read",
    imageUrl: "/kongaDeals.png",
  },
  {
    id: "9",
    slug: "sustainable-fashion-trend-report",
    category: "Blogs",
    title: "Sustainable Fashion: Trends for 2026",
    excerpt:
      "Discover how eco-friendly fashion is revolutionizing the industry in Africa.",
    date: "Feb 18, 2026",
    readTime: "5 mins read",
    imageUrl: "/theScoop.png",
  },
  {
    id: "10",
    slug: "fitness-transformation-success-stories",
    category: "Blogs",
    title: "Fitness Transformation: Real Stories of Change",
    excerpt:
      "Inspiring journeys from everyday people who transformed their lives.",
    date: "Feb 15, 2026",
    readTime: "7 mins read",
    imageUrl: "/cruiseControl.png",
  },
  {
    id: "11",
    slug: "business-podcast-series-launch",
    category: "Updates",
    title: "New Business Podcast Series Launches on Konga FM",
    excerpt:
      "Meet the entrepreneurs reshaping Africa's business landscape weekly.",
    date: "Feb 12, 2026",
    readTime: "3 mins read",
    imageUrl: "/healthCheck.png",
  },
  {
    id: "12",
    slug: "celebrity-interview-exclusive-chat",
    category: "News",
    title: "Exclusive Celebrity Interview: Behind the Scenes",
    excerpt:
      "A candid conversation with one of Nigeria's biggest entertainment stars.",
    date: "Feb 10, 2026",
    readTime: "5 mins read",
    imageUrl: "/beyondHeadlines.png",
  },
];

export default function UpdatesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [isLoading, setIsLoading] = useState(false);

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (activeFilter === "All") {
      return ALL_ARTICLES;
    }
    return ALL_ARTICLES.filter((article) => article.category === activeFilter);
  }, [activeFilter]);

  // Handle filter change with loading state
  const handleFilterChange = (category: FilterCategory) => {
    setIsLoading(true);
    setActiveFilter(category);
    
    // Simulate loading delay for visual feedback
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  };

  return (
    <main className={styles.updatesPage}>
      {/* Updates Hero Section */}
      <UpdatesHero
        imageUrl="/event-circle.png"
        imageAlt="Latest Updates from Konga Communications"
      />

      {/* News Grid Section */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          {/* Filter Bar */}
          <div className={styles.filterSection}>
            <FilterBar
              activeCategory={activeFilter}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* News Grid or Skeleton */}
          {isLoading ? (
            <NewsSkeleton count={filteredArticles.length} />
          ) : (
            <NewsGrid articles={filteredArticles} />
          )}
        </div>
      </section>
    </main>
  );
}
