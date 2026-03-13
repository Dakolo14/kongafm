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
// News Grid Types (now in NewsGrid/index.tsx)
// ============================================
// NewsArticle and NewsGridProps are defined in the NewsGrid component

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
  youtubeId?: string; // YouTube video ID for embedded videos
}

export interface ProductShowcaseProps {
  products: ProductItem[];
  title?: string;
  gridCols?: 2 | 3 | 4;
  viewAllLink?: string;
}
