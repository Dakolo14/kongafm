// ============================================
// Show Timeline Types
// ============================================

export interface ShowCard {
  id: string;
  imageUrl: string;
  showName: string;
  hostName?: string;
  time: string;
  badge?: string;
  link?: string;
}

export interface ShowTimelineProps {
  title: string;
  shows: ShowCard[];
  viewAllLink?: string;
  variant?: "fm" | "tv";
}

// ============================================
// News Grid Types
// ============================================

export interface NewsItem {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  date?: string;
  category?: string;
  link?: string;
}

export interface NewsGridProps {
  featuredArticle: NewsItem & {
    fullContent?: string;
  };
  sidebarArticles: NewsItem[];
  title?: string;
  viewAllLink?: string;
}

// ============================================
// Product Showcase Types
// ============================================

export interface ProductItem {
  id: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  link?: string;
  playIcon?: boolean;
  badge?: string;
  duration?: string; // For videos - e.g., "2:45"
}

export interface ProductShowcaseProps {
  products: ProductItem[];
  title?: string;
  gridCols?: 2 | 3 | 4;
  viewAllLink?: string;
}
