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
    imageUrl: "/TVShows/KTV - Scoop.png",
    showName: "SCOOP",
    time: "7:00 - 8:00 PM",
    badge: "LIVE",
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
