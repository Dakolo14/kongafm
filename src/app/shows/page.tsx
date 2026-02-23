import type { Metadata } from "next";
import styles from "./page.module.scss";

// SEO Metadata
export const metadata: Metadata = {
  title: "TV Shows - Konga Communications",
  description:
    "Explore Konga Communications' diverse TV shows. From Commerce Today to Events Spec, discover our engaging programming.",
  alternates: {
    canonical: "https://kongacommunications.com/shows",
  },
};

// All TV Shows Data
const ALL_SHOWS = [
  {
    id: "show-1",
    imageUrl: "./morningInspiration.png",
    showName: "COMMERCE TODAY",
    description:
      "Commerce Today takes center stage as the cornerstone of daily programming on KongaTV. This concise half-hour show is meticulously designed to kick-start your day with a spotlight on an array of brands, products, and valuable insights. We understand that staying informed about the latest in the world of brands and products is essential, and Commerce Today delivers precisely that.",
  },
  {
    id: "show-2",
    imageUrl: "./kongaDeals.png",
    showName: "KONGA DEALS",
    description:
      "Deals on Konga is a premier program on KongaTV that brings you thrilling discounts on a daily basis for top-quality products available exclusively on konga.com. This flagship show is all about delivering incredible value to our viewers, with heavy discounts on a wide range of products.",
  },
  {
    id: "show-3",
    imageUrl: "./theScoop.png",
    showName: "THE ENTREPRENEUR",
    description:
      "The Entrepreneur is a captivating show that puts the spotlight on accomplished business visionaries. Each week, we bring you an exclusive interview with a successful entrepreneur, allowing them to narrate their journey in their own unique style.",
  },
  {
    id: "show-4",
    imageUrl: "./cruiseControl.png",
    showName: "TRAVEL ESSENTIALS",
    description:
      "Travel Essentials is your ultimate travel companion, a show meticulously crafted to empower travelers with the knowledge needed to transform their journeys into unforgettable adventures. Whether you're a globetrotter or a first-time explorer, this program is your go-to source for everything you need to know to make your travels seamless, enjoyable, and culturally enriching.",
  },
  {
    id: "show-5",
    imageUrl: "./healthCheck.png",
    showName: "MEN'S HEALTH UNSCRIPTED",
    description:
      "This is a bold, no-holds-barred Instagram Reels series that breaks the silence surrounding men's health in Africa. Graced by Charlie Boy — a two-time prostate cancer survivor and fierce mental health advocate — the show dives deep into the unspoken struggles of men, from depression and diabetes to prostate issues and emotional trauma, with raw honesty and cultural insight.",
  },
  {
    id: "show-6",
    imageUrl: "./beyondHeadlines.png",
    showName: "THE SCOOP ON TV",
    description:
      "Like its radio equivalence, this is a show that features ground breakers and table shakers across diverse industries and areas of human endeavor. From media gurus like Lady Ibru, to exceptional artists like Kelechi Amadi, the Scoop on TV offers refreshing conversations that shape artistry, industries and set an agenda for the future.",
  },
  {
    id: "show-7",
    imageUrl: "./marketSquare.png",
    showName: "TOP SHOTS",
    description:
      "A dynamic television interview series spotlighting Nigeria's most influential C-suite executives and top-tier decision-makers as they unpack the forces shaping their industries. From finance to tech, energy to FMCG, each episode features deep, market-focused conversations on innovation, disruption, policy shifts, and the evolving business landscape.",
  },
  {
    id: "show-8",
    imageUrl: "./juiceBox.png",
    showName: "EVENTS SPEC",
    description:
      "Event Spec is your backstage pass to the world of event planning, a show that immerses you in the intricacies of this thriving subsector. We take an in-depth exploration of both seasoned event planners and emerging service providers, unveiling the behind-the-scenes of this dynamic industry, shedding light on the challenges and opportunities that define the future of event planning.",
  },
];

export default function ShowsPage() {
  return (
    <main className={styles.showsPage}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Our Shows</h1>
          <p className={styles.pageSubtitle}>
            Discover Konga Communications' diverse television programming. From
            business and entrepreneurship to travel and health, we have
            something for everyone.
          </p>
        </div>
      </section>

      {/* Shows Details Section */}
      <section className={styles.showsDetailsSection}>
        <div className={styles.showsDetailsContainer}>
          {ALL_SHOWS.map((show, index) => (
            <div key={show.id} className={styles.showDetailRow}>
              {/* Image Column */}
              <div
                className={`${styles.imageColumn} ${
                  index % 2 !== 0 ? styles.reverse : ""
                }`}
              >
                <img
                  src={show.imageUrl}
                  alt={show.showName}
                  className={styles.showDetailImage}
                />
              </div>

              {/* Text Column */}
              <div className={styles.textColumn}>
                <h3 className={styles.showName}>{show.showName}</h3>
                <p className={styles.showDescription}>{show.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
