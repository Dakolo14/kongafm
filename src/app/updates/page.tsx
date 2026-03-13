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
    slug: "computerise-nigeria-initiative",
    category: "News",
    title: "Zinox, KongaCares launch ‘Computerise Nigeria Initiative’ to equip 1m students with laptops",
    excerpt:
      "Zinox Technologies, Nigeria’s leading integrated ICT powerhouse, in partnership with KongaCares, the Corporate Social Responsibility arm of Konga Group, has launched the Computerise Nigeria Initiative, a bold nationwide programme designed to bridge Nigeria’s digital education gap.",
    date: "September 10, 2025",
    readTime: "8 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/09/FEATURED-IMAGE-2-2048x1365.jpeg",
    link: "https://www.bellanaija.com/2025/09/zinox-kongacares-launch/",
  },
  {
    id: "3",
    slug: "entrepreneur-showcase-success-stories",
    category: "News",
    title: "Konga103.7FM spotlights new Samsung Galaxy Z Series",
    excerpt:
      "Samsung has officially launched its latest line of flagship smartphones: the Galaxy Fold 7, Flip 7, and Flip 7 FE.",
    date: "September 2, 2025",
    readTime: "6 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/09/SAMSUNG-STAFF-AT-KONGA103.7FM-STUDIOS-1.jpg",
    link: "https://www.bellanaija.com/2025/09/konga-103-7fm-and-samsung/",
  },
  {
    id: "4",
    slug: "lecreme-crafts-honours-konga1037fm",
    category: "News",
    title: "LaCreme Crafts honours KONGA103.7FM with Special Resin Art for supporting SMEs",
    excerpt:
      "KONGA103.7FM, Lagos’ commerce and hit music station, has once again received accolades for its impactful contributions to the Small and Medium Enterprises (SME) sector.",
    date: "August 22, 2025",
    readTime: "7 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/08/FEATURED-IMAGE-1.jpeg",
    link: "https://www.bellanaija.com/2025/08/lecreme-crafts-honours-konga1037fm/",
  },
  {
    id: "5",
    slug: "health-wellness-expert-interview",
    category: "Blogs",
    title: "Health & Wellness: Expert Interview Series",
    excerpt:
      "Learn from top health professionals about living your best, healthiest life.",
    date: "August 15, 2025",
    readTime: "5 mins read",
    imageUrl: "https://miro.medium.com/1*57dWFNbXvjAmWlmvwzNSgQ.jpeg",
  },
  {
    id: "6",
    slug: "creative-minds-digital-innovation",
    category: "Updates",
    title: "Creative Minds: Digital Innovation in Nigeria",
    excerpt:
      "Spotlight on creators and influencers shaping the future of digital media.",
    date: "August 14, 2025",
    readTime: "4 mins read",
    imageUrl: "https://wixmp-cca7fdc52d9b9ae8ca79a86d.wixmp.com/marketplace/partners/7ac1b6d7-1646-4814-9fa5-25dcae8a4be4/profile-image/1626107926124/LOGO%20VASU%202.jpg",
  },
  {
    id: "7",
    slug: "music-festival-lineup-announcement",
    category: "News",
    title: "Zinox Shares Innovation Story on Konga103.7FM",
    excerpt:
      "KONGA 103.7FM, a leading voice in business and development-focused broadcasting, reaffirmed its commitment to projecting Nigerian innovation by hosting an insightful session with Zinox Technologies on its flagship business programme, ‘The Market Square‘.",
    date: "August 12, 2025",
    readTime: "8 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/08/THE-ZINOX-TEAM-AT-KONGA103.7FM-STUDIO-scaled.jpg",
    link: "https://www.bellanaija.com/2025/08/zinox-shares-innovationstory-on-konga/",
  },
  {
    id: "8",
    slug: "tech-startup-interview-founder-story",
    category: "News",
    title: "Konga103.7FM Sparks an Industry Buzz at MIPAN with its Fresh Media Innovation | Get the scoop",
    excerpt:
      "In a move to bridge the gap between modern commerce and media innovation, Konga Communications, owners of Konga103.7FM and Konga TV, on Tuesday, June 24, hosted an exclusive stakeholder session with members of the Media Independent Practitioners Association of Nigeria (MIPAN) in Lagos.",
    date: "June 26, 2025",
    readTime: "6 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/06/BODY-OF-REPORT-2048x2007.png",
    link: "https://www.bellanaija.com/2025/06/kongafm-x-mipan/",
  },
  {
    id: "9",
    slug: "sustainable-fashion-trend-report",
    category: "Blogs",
    title: "Sustainable Fashion: Trends for 2026",
    excerpt:
      "Discover how eco-friendly fashion is revolutionizing the industry in Africa.",
    date: "June 20, 2025",
    readTime: "5 mins read",
    imageUrl: "https://img.freepik.com/free-vector/flat-design-illustration-sustainable-fashion-concept_52683-55505.jpg",
  },
  {
    id: "10",
    slug: "fitness-transformation-success-stories",
    category: "Blogs",
    title: "Fitness Transformation: Real Stories of Change",
    excerpt:
      "Inspiring journeys from everyday people who transformed their lives.",
    date: "June 14, 2025",
    readTime: "7 mins read",
    imageUrl: "https://www.shutterstock.com/image-photo/strong-sportsman-adding-weights-on-600nw-2667194547.jpg",
  },
  {
    id: "11",
    slug: "business-podcast-series-launch",
    category: "Updates",
    title: "New Business Podcast Series Launches on Konga FM",
    excerpt:
      "Meet the entrepreneurs reshaping Africa's business landscape weekly.",
    date: "July 20, 2025",
    readTime: "3 mins read",
    imageUrl: "https://cdn.pixabay.com/photo/2023/04/20/00/01/podcast-7938768_1280.png",
  },
  {
    id: "12",
    slug: "celebrity-interview-exclusive-chat",
    category: "News",
    title: "Konga at 13: Merchants Laud Free Warehousing, Customers Applaud Quality Service",
    excerpt:
      "Konga celebrates 13 years of empowering small businesses, enabling seamless online shopping, and building trust with customers.",
    date: "July 30, 2025",
    readTime: "5 mins read",
    imageUrl: "https://www.bellanaija.com/wp-content/uploads/2025/07/MELVIN-ONOCHIE-HEAD-ECOMMERCE-KONGA-1.jpg",
    link: "https://www.bellanaija.com/2025/07/konga-at-13/",
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
