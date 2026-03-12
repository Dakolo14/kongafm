import type { Metadata } from "next";
import Banner from "@/components/Banner";
import ShowTimeline from "@/components/ShowTimeline";
import TVShowTimeline from "@/components/TVShowTimeline";
import NewsGrid, { type NewsArticle } from "@/components/NewsGrid";
import TrendingNews from "@/components/TrendingNews";
import ProductShowcase from "@/components/ProductShowcase";
import SellBanner from "@/components/SellBanner";
import BrandPlaylist, { PlaylistData } from "@/components/BrandPlaylist";
import Events, { EventItem } from "@/components/Events";
import { ShowCard, ProductItem } from "@/types/components";
import styles from "./page.module.scss";

// SEO Metadata for Home Page
export const metadata: Metadata = {
  title: "Home - Konga Communications | FM Radio Shows & Entertainment",
  description:
    "Welcome to Konga Communications. Discover our live FM shows, trending entertainment news, and exclusive content. Stream music and entertainment 24/7.",
  alternates: {
    canonical: "https://kongacommunications.com",
  },
};

// ============================================
// MOCK DATA
// ============================================

// Featured Article for Trending News
const FEATURED_ARTICLE: NewsArticle & { fullContent?: string } = {
  id: "1",
  slug: "konga-fm-launches-new-morning-show",
  category: "News",
  title: "Konga FM Launches Exciting New Morning Show",
  excerpt:
    "Discover the latest additions to our radio lineup with dynamic hosts and engaging content.",
  date: "Mar 10, 2026",
  readTime: "5 mins read",
  imageUrl: "/morningInspiration.png",
  fullContent:
    "Konga FM is thrilled to announce the launch of our new morning show, bringing you the most engaging content to start your day right. With dynamic hosts, interactive segments, and exclusive interviews, this promises to be radio's most exciting morning program.",
};

// FM Show Timeline Mock Data
const FM_SHOWS: ShowCard[] = [
  {
    id: "fm-1",
    imageUrl: "./morningInspiration.png",
    showName: "MORNING INSPIRATION",
    time: "5:00am - 7:00am",
    badge: "LIVE",
    link: "/shows/morning-inspiration",
  },
  {
    id: "fm-2",
    imageUrl: "./kongaDeals.png",
    showName: "KONGA DEALS",
    time: "7:00am - 8:00am",
    link: "/shows/urban-vibes",
  },
  {
    id: "fm-3",
    imageUrl: "./beyondHeadlines.png",
    showName: "BEYOND THE HEADLINES",
    time: "8:00am - 8:30am",
    link: "/shows/afternoon-drive",
  },
  {
    id: "fm-4",
    imageUrl: "./theScoop.png",
    showName: "THE SCOOP",
    time: "9:00am - 9:30am",
    link: "/shows/rhythm-soul",
  },
  {
    id: "fm-5",
    imageUrl: "./juiceBox.png",
    showName: "JUICE BOX",
    time: "1:00pm - 2:00pm",
    link: "/shows/night-energy",
  },
  {
    id: "fm-6",
    imageUrl: "./trafficTunes.png",
    showName: "TRAFFIC AND TUNES",
    time: "4:00pm - 6:00pm",
    badge: "NEW",
    link: "/shows/midnight-beats",
  },
];

// TV Show Timeline Mock Data
const TV_SHOWS: ShowCard[] = [
  {
    id: "tv-1",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    showName: "Entertainment Watch",
    hostName: "Toke Makinwa",
    time: "7:00 - 8:00 PM",
    badge: "LIVE",
    link: "/tv/entertainment-watch",
  },
  {
    id: "tv-2",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    showName: "Celebrity Talk Show",
    hostName: "Ebru Oladapo",
    time: "8:00 - 9:00 PM",
    link: "/tv/celebrity-talk",
  },
  {
    id: "tv-3",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    showName: "Music Countdown",
    hostName: "Shade Okoya",
    time: "9:00 - 10:00 PM",
    link: "/tv/music-countdown",
  },
  {
    id: "tv-4",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-c2cbc8ed0e8d?w=400&h=400&fit=crop",
    showName: "News Tonight",
    hostName: "Linda Ikechukwu",
    time: "10:00 - 11:00 PM",
    link: "/tv/news-tonight",
  },
  {
    id: "tv-5",
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
    showName: "Sports Update",
    hostName: "Segun Awosanya",
    time: "11:00 PM - 12:00 AM",
    badge: "HOT",
    link: "/tv/sports-update",
  },
  {
    id: "tv-6",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    showName: "Late Night Show",
    hostName: "Ofili",
    time: "12:00 - 1:00 AM",
    link: "/tv/late-night-show",
  },
];



// Events Mock Data (for EventCarousel when needed)
const EVENTS = [
  {
    id: "event-1",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop",
    title: "Konga Festival 2026",
    date: "February 14, 2026",
    time: "6:00 PM",
    location: "Lagos, Nigeria",
    link: "/events/konga-festival",
  },
  {
    id: "event-2",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    title: "Music Legends Concert",
    date: "February 28, 2026",
    time: "7:00 PM",
    location: "Abuja, Nigeria",
    link: "/events/legends-concert",
  },
  {
    id: "event-3",
    imageUrl:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
    title: "Konga Awards Night",
    date: "March 15, 2026",
    time: "8:00 PM",
    location: "Lagos, Nigeria",
    link: "/events/awards-night",
  },
  {
    id: "event-4",
    imageUrl:
      "https://images.unsplash.com/photo-1535016120754-fd5ac5979814?w=300&h=300&fit=crop",
    title: "Afrobeats Workshop",
    date: "March 22, 2026",
    time: "2:00 PM",
    location: "Lagos, Nigeria",
    link: "/events/workshop",
  },
];

// Product/Videos Mock Data
const PRODUCTS: ProductItem[] = [
  {
    id: "video-1",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    title: "Rema Performance Highlights",
    description: "Best moments from Rema O2 Arena performance",
    duration: "5:23",
    playIcon: true,
    link: "/videos/rema-highlights",
  },
  {
    id: "video-2",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=250&fit=crop",
    title: "DJ Cuppy Studio Session",
    description: "Behind the scenes with DJ Cuppy",
    duration: "12:45",
    playIcon: true,
    link: "/videos/cuppy-session",
  },
  {
    id: "video-3",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1535016120754-fd5ac5979814?w=400&h=250&fit=crop",
    title: "Afrobeats Documentary",
    description: "The rise of Afrobeats music",
    duration: "28:15",
    playIcon: true,
    badge: "TRENDING",
    link: "/videos/afrobeats-doc",
  },
  {
    id: "video-4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=250&fit=crop",
    title: "Live Concert Recording",
    description: "Full concert from Konga Festival",
    duration: "1:45:30",
    playIcon: true,
    link: "/videos/concert",
  },
  {
    id: "video-5",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=250&fit=crop",
    title: "Music Production Tips",
    description: "Learn music production from experts",
    duration: "18:50",
    playIcon: true,
    link: "/videos/production-tips",
  },
  {
    id: "video-6",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=250&fit=crop",
    title: "Interview with Top Artists",
    description: "Exclusive interviews with Afrobeats stars",
    duration: "42:20",
    playIcon: true,
    badge: "NEW",
    link: "/videos/interviews",
  },
  {
    id: "video-7",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1488168169651-e667fa1f7d2c?w=400&h=250&fit=crop",
    title: "Music Video Premieres",
    description: "Latest music video releases",
    duration: "3:45",
    playIcon: true,
    link: "/videos/mvp",
  },
  {
    id: "video-8",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&h=250&fit=crop",
    title: "Sound Design Masterclass",
    description: "Advanced sound design techniques",
    duration: "33:10",
    playIcon: true,
    link: "/videos/masterclass",
  },
];

// Events Data
const EVENTS_DATA: EventItem[] = [
  {
    id: "event-1",
    title: "Partnership with Konga",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    date: { month: "MAY", day: "20" },
    time: "10:00 AM",
    status: "Free",
    link: "/events/partnership",
  },
  {
    id: "event-2",
    title: "Harvesters Awakening",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    date: { month: "SEP", day: "04" },
    time: "6:00 PM",
    status: "Upcoming",
    link: "/events/awakening",
  },
  {
    id: "event-3",
    title: "Konga Tech Summit 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
    date: { month: "JUN", day: "12" },
    time: "9:00 AM",
    status: "Upcoming",
    link: "/events/tech-summit",
  },
  {
    id: "event-4",
    title: "Lagos Music Fest",
    imageUrl:
      "https://images.unsplash.com/photo-1535016120754-fd5ac5979814?w=600&h=400&fit=crop",
    date: { month: "JUL", day: "01" },
    time: "7:00 PM",
    status: "Live",
    link: "/events/music-fest",
  },
];

// Sell Banner Mock Data
const SELL_BANNER = {
  imageUrl:
    "https://www-konga-com-res.cloudinary.com/image/upload/v1771580245/landingPages/2026%20Marketing/Ramadan03/DESKTOP.png",
  link: "/promo/featured",
  altText: "Sponsored promotional content",
};

// Brand Playlist Mock Data
const BRAND_PLAYLISTS: PlaylistData[] = [
  {
    id: "playlist-1",
    coverImageUrl:
      "https://images.unsplash.com/photo-1514693828949-786ea6191e13?w=400&h=500&fit=crop",
    title: "Konga Streaming Series",
    destinationUrl: "https://youtube.com/playlist?list=konga-streaming",
  },
  {
    id: "playlist-2",
    coverImageUrl:
      "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=500&fit=crop",
    title: "Latest Afrobeats Hits",
    destinationUrl: "https://youtube.com/playlist?list=afrobeats-hits",
  },
  {
    id: "playlist-3",
    coverImageUrl:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=500&fit=crop",
    title: "Premium Original Content",
    destinationUrl: "https://youtube.com/playlist?list=premium-content",
  },
  {
    id: "playlist-4",
    coverImageUrl:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=500&fit=crop",
    title: "Music Video Collection",
    destinationUrl: "https://youtube.com/playlist?list=music-videos",
  },
];

export default function Home() {
  const bannerSlides = [
    {
      id: "banner-1",
      imageUrl: "/Carousel Designs/Design 1.png",
    },
    {
      id: "banner-2",
      imageUrl: "/Carousel Designs/Design 2.png",
    },
    {
      id: "banner-3",
      imageUrl: "/Carousel Designs/Design 3.png",
    },
    {
      id: "banner-4",
      imageUrl: "/Carousel Designs/Design 4.png",
    },
    {
      id: "banner-5",
      imageUrl: "/Carousel Designs/Design 5.png",
    },
    {
      id: "banner-6",
      imageUrl: "/Carousel Designs/Design 6.png",
    },
    {
      id: "banner-7",
      imageUrl: "/Carousel Designs/Design 7.png",
    },
    {
      id: "banner-8",
      imageUrl: "/Carousel Designs/Design 8.png",
    },
    {
      id: "banner-9",
      imageUrl: "/Carousel Designs/Design 9.png",
    },
    {
      id: "banner-10",
      imageUrl: "/Carousel Designs/Design 10.png",
    },
    {
      id: "banner-11",
      imageUrl: "/Carousel Designs/Design 11.png",
    },
  ];

  return (
    <main className={styles.homePage}>
      {/* Banner Carousel */}
      <Banner slides={bannerSlides} autoplay={true} autoplayInterval={5000} />

      {/* FM Show Timeline Section */}
      <ShowTimeline
        title="FM Show Timeline"
        shows={FM_SHOWS}
        viewAllLink="/fm-shows"
        variant="fm"
      />

      {/* Trending News Section */}
      <TrendingNews article={FEATURED_ARTICLE} />

      {/* TV Show Timeline Section */}
      <TVShowTimeline
        title="TV Show Timeline"
        shows={TV_SHOWS}
        viewAllLink="/tv-shows"
        variant="tv"
      />

      {/* News Grid Section */}
      <NewsGrid />

      {/* Product/Videos Showcase Section */}
      <ProductShowcase
        title="Product Showcase Videos"
        videos={PRODUCTS}
        viewAllLink="/videos"
      />

      {/* Events Section */}
      <Events title="Events" events={EVENTS_DATA} viewAllLink="/events" />

      {/* Sell Banner Section */}
      <SellBanner
        imageUrl={SELL_BANNER.imageUrl}
        link={SELL_BANNER.link}
        altText={SELL_BANNER.altText}
      />

      {/* Brand Playlist Section */}
      <BrandPlaylist
        title="Brand Playlist"
        playlists={BRAND_PLAYLISTS}
        viewAllLink="/playlists"
      />
    </main>
  );
}
