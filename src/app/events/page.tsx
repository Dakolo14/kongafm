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
    title: "TD Africa & Zinox Technologies partner to take Tech Impact to another height.",
    youtubeId: "EW7hynK33ec",
    date: { month: "MAR", day: "13" },
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

export default function EventsPage() {
  return (
    <main className={styles.eventsPage}>

      {/* Events Grid */}
      <section className={styles.eventsSection}>
        <Events
          title=""
          events={EVENTS_DATA}
          limit={6}
        />
      </section>
    </main>
  );
}
