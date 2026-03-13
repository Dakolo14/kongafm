import type { Metadata } from "next";
import Events, { EventItem } from "@/components/Events";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Events - Konga Communications",
  description:
    "Watch all our past events and exclusive content from Konga FM and KTV. Featuring live coverage, entertainment highlights, and behind-the-scenes studio sessions.",
};

// Events Data - YouTube Videos with Event Design (Past Events)
const EVENTS_DATA: EventItem[] = [
  {
    id: "event-1",
    title: "Konga FM & KTV Highlights",
    youtubeId: "EW7hynK33ec",
    date: { month: "MAR", day: "13" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
  {
    id: "event-2",
    title: "Entertainment Coverage",
    youtubeId: "sSgBgV9YA3I",
    date: { month: "MAR", day: "14" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
  {
    id: "event-3",
    title: "Studio Sessions & Behind the Scenes",
    youtubeId: "hBc1VPpG5xM",
    date: { month: "MAR", day: "15" },
    time: "Full Episode",
    status: "Past",
    link: "#",
  },
];

export default function EventsPage() {
  return (
    <main className={styles.eventsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Past Events</h1>
          <p className={styles.heroDescription}>
            Watch all our exclusive event coverage, interviews, and behind-the-scenes content from Konga FM and KTV.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className={styles.eventsSection}>
        <Events
          title=""
          events={EVENTS_DATA}
        />
      </section>
    </main>
  );
}
