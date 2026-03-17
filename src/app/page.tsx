import type { Metadata } from "next";
import Banner from "@/components/Banner";
import ShowTimeline from "@/components/ShowTimeline";
import TVShowTimeline from "@/components/TVShowTimeline";
import NewsGrid from "@/components/NewsGrid";
import ProductShowcase from "@/components/ProductShowcase";
import SellBanner from "@/components/SellBanner";
// import BrandPlaylist, { PlaylistData } from "@/components/BrandPlaylist";
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

// FM Show Timeline Mock Data
const FM_SHOWS: ShowCard[] = [
  {
    id: "fm-1",
    imageUrl: "/FMShows/Morning Inspiration.png",
    showName: "MORNING INSPIRATION",
    time: "5:00am - 7:00am",
    link: "/shows/morning-inspiration",
  },
  {
    id: "fm-2",
    imageUrl: "/FMShows/AM Breif.png",
    showName: "AM BRIEF",
    time: "7:00am (Weekdays)",
    link: "/shows/am-brief",
  },
  {
    id: "fm-3",
    imageUrl: "/FMShows/Shop on radio.png",
    showName: "SHOP ON RADIO",
    time: "7:00am - 8:00am (Weekdays)",
    link: "/shows/shop-on-radio",
  },
  {
    id: "fm-4",
    imageUrl: "/FMShows/Beyond the headlines.png",
    showName: "BEYOND THE HEADLINES",
    time: "8:00am (Weekdays)",
    link: "/shows/beyond-headlines",
  },
  {
    id: "fm-5",
    imageUrl: "/FMShows/Market Square.png",
    showName: "MARKET SQUARE",
    time: "9:00am - 9:30am (Weekdays)",
    link: "/shows/market-square",
  },
  {
    id: "fm-6",
    imageUrl: "/FMShows/The SCoop.png",
    showName: "THE SCOOP",
    time: "9:00am (Weekdays)",
    badge: "POPULAR",
    link: "/shows/the-scoop",
  },
  {
    id: "fm-7",
    imageUrl: "/FMShows/Church on radio.png",
    showName: "CHURCH ON RADIO",
    time: "10:00am (Sundays)",
    link: "/shows/church-on-radio",
  },
  {
    id: "fm-8",
    imageUrl: "/FMShows/Creators corner.png",
    showName: "CREATORS CORNER",
    time: "5:00pm (Sundays)",
    link: "/shows/creators-corner",
  },
  {
    id: "fm-9",
    imageUrl: "/FMShows/Cruise Control.png",
    showName: "CRUISE CONTROL",
    time: "6:30pm (Weekdays)",
    link: "/shows/cruise-control",
  },
];

// TV Show Timeline Mock Data
const TV_SHOWS: ShowCard[] = [
  {
    id: "tv-1",
    imageUrl: "/TVShows/KTV - Scoop.png",
    showName: "SCOOP",
    time: "7:00 - 8:00 PM",
    link: "/tv/scoop",
  },
  {
    id: "tv-2",
    imageUrl: "/TVShows/Reason This.png",
    showName: "REASON THIS",
    time: "8:00 - 9:00 PM",
    link: "/tv/reason-this",
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
      "https://img.youtube.com/vi/LdC1NwUYBAo/maxresdefault.jpg",
    title: "Konga FM Latest Coverage",
    description: "Watch our latest video coverage and interviews",
    duration: "8:45",
    playIcon: true,
    youtubeId: "LdC1NwUYBAo",
    link: "#",
  },
  {
    id: "video-2",
    thumbnailUrl:
      "https://img.youtube.com/vi/NZA9SNgMhxw/maxresdefault.jpg",
    title: "Entertainment Highlights",
    description: "Exclusive entertainment news and updates",
    duration: "12:30",
    playIcon: true,
    youtubeId: "NZA9SNgMhxw",
    link: "#",
  },
  {
    id: "video-3",
    thumbnailUrl:
      "https://img.youtube.com/vi/9aPFAhNvzBo/maxresdefault.jpg",
    title: "Music & Culture Segment",
    description: "Celebrating African music and culture",
    duration: "15:20",
    playIcon: true,
    youtubeId: "9aPFAhNvzBo",
    link: "#",
  },
  {
    id: "video-4",
    thumbnailUrl:
      "https://img.youtube.com/vi/obiVWCEywyI/maxresdefault.jpg",
    title: "Konga FM Special Features",
    description: "Behind the scenes and special segments",
    duration: "10:15",
    playIcon: true,
    youtubeId: "obiVWCEywyI",
    link: "#",
  },
  {
    id: "video-5",
    thumbnailUrl:
      "https://img.youtube.com/vi/fKCgK5CsgNw/maxresdefault.jpg",
    title: "News & Current Affairs",
    description: "Breaking news and current affairs coverage",
    duration: "18:45",
    playIcon: true,
    youtubeId: "fKCgK5CsgNw",
    link: "#",
  },
  {
    id: "video-6",
    thumbnailUrl:
      "https://img.youtube.com/vi/K4fEMxl-97o/maxresdefault.jpg",
    title: "Exclusive Studio Sessions",
    description: "Exclusive artists' interviews and performances",
    duration: "22:30",
    playIcon: true,
    youtubeId: "K4fEMxl-97o",
    link: "#",
  },
];

// Events Data - YouTube Videos with Event Design (Past Events)
const EVENTS_DATA: EventItem[] = [
  {
    id: "event-1",
    title: "TD Africa & Zinox Technologies partner to take Tech Impact to another height.",
    youtubeId: "EW7hynK33ec",
    date: { month: "MAR", day: "13" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
  {
    id: "event-5",
    title: "L'Oreal Event",
    youtubeId: "qE3cXZNF19M",
    date: { month: "MAR", day: "17" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
  {
    id: "event-3",
    title: "Leo Stan Ekeh on Corporate Tithe, Technology & Why Wealth Whispers",
    youtubeId: "hBc1VPpG5xM",
    date: { month: "MAR", day: "15" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
  {
    id: "event-2",
    title: "KONGA CELEBRATES HIGHWAY CLEANERS ON INTERNATIONAL WOMEN'S DAY",
    youtubeId: "sSgBgV9YA3I",
    date: { month: "MAR", day: "14" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
  {
    id: "event-4",
    title: "Creation Africa",
    youtubeId: "qvFkPGr1ZAU",
    date: { month: "MAR", day: "16" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
  {
    id: "event-6",
    title: "Samsung",
    youtubeId: "cNia-e7nFZY",
    date: { month: "MAR", day: "18" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
];

// Sell Banner Mock Data
const SELL_BANNER = {
  mobileImageUrl: "https://www-konga-com-res.cloudinary.com/image/upload/v1772451324/contentservice/Premium%20Banner%203%20%283%29.gif_LffQ9awJz0.gif",
  mobileLink: "https://www.konga.com/content/konga-berekete",
  desktopImageUrl: "/promotionalbannerdesktop.png",
  desktopLink: "https://www.konga.com/deals/daily",
  altText: "Sponsored promotional content",
};

// Brand Playlist Mock Data - Disabled until playlists are available
// const BRAND_PLAYLISTS: PlaylistData[] = [
//   {
//     id: "playlist-1",
//     coverImageUrl:
//       "https://images.unsplash.com/photo-1514693828949-786ea6191e13?w=400&h=500&fit=crop",
//     title: "Konga Streaming Series",
//     destinationUrl: "https://youtube.com/playlist?list=konga-streaming",
//   },
//   {
//     id: "playlist-2",
//     coverImageUrl:
//       "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=500&fit=crop",
//     title: "Latest Afrobeats Hits",
//     destinationUrl: "https://youtube.com/playlist?list=afrobeats-hits",
//   },
//   {
//     id: "playlist-3",
//     coverImageUrl:
//       "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=500&fit=crop",
//     title: "Premium Original Content",
//     destinationUrl: "https://youtube.com/playlist?list=premium-content",
//   },
//   {
//     id: "playlist-4",
//     coverImageUrl:
//       "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=500&fit=crop",
//     title: "Music Video Collection",
//     destinationUrl: "https://youtube.com/playlist?list=music-videos",
//   },
// ];

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
        viewAllLink="/fm"
        variant="fm"
        limit={6}
      />

      {/* TV Show Timeline Section */}
      <TVShowTimeline
        title="TV Show Timeline"
        shows={TV_SHOWS}
        viewAllLink="/shows"
        variant="tv"
      />

      {/* News Section - Featured + Sidebar */}
      <NewsGrid title="Latest News" viewAllLink="/news" />

      {/* Product/Videos Showcase Section */}
      <ProductShowcase
        title="Product Showcase Videos"
        videos={PRODUCTS}
        viewAllLink="/product-showcase"
      />

      {/* Events Section */}
      <Events title="Events" events={EVENTS_DATA} viewAllLink="/events" />

      {/* Sell Banner Section */}
      <SellBanner
        mobileImageUrl={SELL_BANNER.mobileImageUrl}
        mobileLink={SELL_BANNER.mobileLink}
        desktopImageUrl={SELL_BANNER.desktopImageUrl}
        desktopLink={SELL_BANNER.desktopLink}
        altText={SELL_BANNER.altText}
      />

      {/* Brand Playlist Section - Disabled until playlists are available */}
      {/* <BrandPlaylist
        title="Brand Playlist"
        playlists={BRAND_PLAYLISTS}
        viewAllLink="/playlists"
      /> */}
    </main>
  );
}
