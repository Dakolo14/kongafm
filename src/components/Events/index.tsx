"use client";

import React from "react";
import styles from "./Events.module.scss";

export interface EventItem {
  id: string;
  imageUrl: string;
  title: string;
  date: {
    month: string; // "MAY"
    day: string; // "20"
  };
  time: string; // "10:00 AM"
  status: "Free" | "Upcoming" | "Live" | "Past";
  link: string;
}

export interface EventsProps {
  title: string;
  events: EventItem[];
  viewAllLink?: string;
}

const Events: React.FC<EventsProps> = ({ title, events, viewAllLink }) => {
  // Limit to first 3 events for the homepage preview
  const displayedEvents = events.slice(0, 3);

  return (
    <section className={styles.eventsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className={styles.viewAll}>
            View All
          </a>
        )}
      </div>

      <div className={styles.container}>
        {displayedEvents.map((event) => (
          <a
            key={event.id}
            href={event.link}
            className={styles.card}
            aria-label={`View event: ${event.title}`}
          >
            <div className={styles.imageWrapper}>
              <img
                src={event.imageUrl}
                alt={event.title}
                className={styles.image}
              />

              {/* Left Date Strip (Mimicking the reference design) */}
              <div className={styles.dateStrip}>
                <span className={styles.dateMonth}>{event.date.month}</span>
                <span className={styles.dateDay}>{event.date.day}</span>
                <div className={styles.liveIndicator}>
                  {event.status === "Live" && (
                    <span className={styles.liveDot} />
                  )}
                  <span className={styles.timeText}>{event.time}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div
                className={`${styles.statusBadge} ${styles[event.status.toLowerCase()]}`}
              >
                {event.status === "Free" ? "FREE ENTRY" : event.status}
              </div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventTime}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {event.time}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Events;
