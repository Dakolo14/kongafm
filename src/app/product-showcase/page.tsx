import type { Metadata } from "next";
import ProductShowcase from "@/components/ProductShowcase";
import { ProductItem } from "@/types/components";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Product Showcase - Konga Communications",
  description:
    "Explore our exclusive video collection featuring entertainment, interviews, and behind-the-scenes content from Konga FM.",
};

// Product/Videos Mock Data
const PRODUCTS: ProductItem[] = [
  {
    id: "video-1",
    thumbnailUrl: "https://img.youtube.com/vi/LdC1NwUYBAo/maxresdefault.jpg",
    title: "Konga FM Latest Coverage",
    description: "Watch our latest video coverage and interviews",
    duration: "8:45",
    playIcon: true,
    youtubeId: "LdC1NwUYBAo",
    link: "#",
  },
  {
    id: "video-2",
    thumbnailUrl: "https://img.youtube.com/vi/NZA9SNgMhxw/maxresdefault.jpg",
    title: "Entertainment Highlights",
    description: "Exclusive entertainment news and updates",
    duration: "12:30",
    playIcon: true,
    youtubeId: "NZA9SNgMhxw",
    link: "#",
  },
  {
    id: "video-3",
    thumbnailUrl: "https://img.youtube.com/vi/9aPFAhNvzBo/maxresdefault.jpg",
    title: "Music & Culture Segment",
    description: "Celebrating African music and culture",
    duration: "15:20",
    playIcon: true,
    youtubeId: "9aPFAhNvzBo",
    link: "#",
  },
  {
    id: "video-4",
    thumbnailUrl: "https://img.youtube.com/vi/obiVWCEywyI/maxresdefault.jpg",
    title: "Konga FM Special Features",
    description: "Behind the scenes and special segments",
    duration: "10:15",
    playIcon: true,
    youtubeId: "obiVWCEywyI",
    link: "#",
  },
  {
    id: "video-5",
    thumbnailUrl: "https://img.youtube.com/vi/fKCgK5CsgNw/maxresdefault.jpg",
    title: "News & Current Affairs",
    description: "Breaking news and current affairs coverage",
    duration: "18:45",
    playIcon: true,
    youtubeId: "fKCgK5CsgNw",
    link: "#",
  },
  {
    id: "video-6",
    thumbnailUrl: "https://img.youtube.com/vi/K4fEMxl-97o/maxresdefault.jpg",
    title: "Exclusive Studio Sessions",
    description: "Exclusive artists' interviews and performances",
    duration: "22:30",
    playIcon: true,
    youtubeId: "K4fEMxl-97o",
    link: "#",
  },
];

export default function ProductShowcasePage() {
  return (
    <main className={styles.productShowcasePage}>
      {/* Product Showcase Grid */}
      <section className={styles.showcaseSection}>
        <ProductShowcase
          videos={PRODUCTS}
        />
      </section>
    </main>
  );
}
