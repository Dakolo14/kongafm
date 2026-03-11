import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Rate Card - Konga Communications",
  description:
    "Download Konga Communications rate card. Access our advertising and media packages.",
  alternates: {
    canonical: "https://kongacommunications.com/rate-card",
  },
};

export default function RateCardPage() {
  return (
    <main className={styles.rateCardPage}>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Our Rate Card</h1>
          <p className={styles.description}>
            Download our comprehensive rate card to view our advertising and
            media packages, pricing, and availability across all our platforms.
          </p>

          <a
            href="/rate-card.pdf"
            download="Konga-Communications-Rate-Card.pdf"
            className={styles.downloadButton}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2v12M12 14l-4-4m4 4l4-4M2 20h20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Rate Card (PDF)
          </a>

          <p className={styles.fileInfo}>PDF • Updated: March 2026</p>
        </div>
      </section>
    </main>
  );
}
