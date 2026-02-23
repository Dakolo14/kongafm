import type { Metadata } from "next";
import TVShowTimeline from "@/components/TVShowTimeline";
import SellBanner from "@/components/SellBanner";
import { ShowCard } from "@/types/components";
import styles from "./page.module.scss";

// SEO Metadata
export const metadata: Metadata = {
  title: "Live TV - Konga Communications",
  description:
    "Watch Konga TV live stream and view our full TV show schedule with hosts and timings.",
  alternates: {
    canonical: "https://kongacommunications.com/live-tv",
  },
};

// TV Show Schedule Data
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

const SELL_BANNER = {
  imageUrl:
    "https://www-konga-com-res.cloudinary.com/image/upload/v1771580245/landingPages/2026%20Marketing/Ramadan03/DESKTOP.png",
  link: "/promo/featured",
  altText: "Sponsored promotional content",
};

export default function LiveTVPage() {
  return (
    <main className={styles.liveTVPage}>

      {/* Live Player Section */}
      <section className={styles.livePlayerSection}>
        <div className={styles.playerContainer}>
          <div className={styles.youtubePlayer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/watch?v=JbX4s6Fc0dw"
              title="Konga TV Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.playerInfo}>
          <h1 className={styles.liveTitle}>Konga TV Live</h1>
          <p className={styles.liveDescription}>
            Watch Konga TV live stream and stay updated with the latest entertainment, news, and shows.
          </p>
        </div>
      </section>

      {/* TV Schedule Section */}
      <TVShowTimeline shows={TV_SHOWS} title="TV Show Schedule" />

      {/* Promotional Banner */}
      <SellBanner
        imageUrl={SELL_BANNER.imageUrl}
        link={SELL_BANNER.link}
        altText={SELL_BANNER.altText}
      />
    </main>
  );
}
