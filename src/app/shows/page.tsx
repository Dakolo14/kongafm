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
    imageUrl: "/TVShows/KTV - Scoop.png",
    showName: "SCOOP",
    description:
      "Scoop is a dynamic television interview series spotlighting Nigeria's most influential and newsworthy stories. Dive deep into breaking news, exclusive interviews, and in-depth analysis that shapes the narrative. From politics to business, entertainment to lifestyle, Scoop brings you the stories that matter, the conversations that count, and the insights you need to stay ahead of the curve.",
  },
  {
    id: "show-2",
    imageUrl: "/TVShows/Reason This.png",
    showName: "REASON THIS",
    description:
      "Reason This is a thought-provoking show that explores the why behind the what. From examining social issues to unpacking cultural trends, business decisions to personal choices, each episode breaks down complex stories into understandable narratives. Expert guests, compelling storytelling, and fresh perspectives combine to give viewers the deeper understanding they're seeking in today's fast-paced world.",
  },
];

export default function ShowsPage() {
  return (
    <main className={styles.showsPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Our Shows</h1>
          <p className={styles.heroSubtitle}>
            Discover Konga Communications' diverse television programming. From business and entrepreneurship to travel and health, we have something for everyone.
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
