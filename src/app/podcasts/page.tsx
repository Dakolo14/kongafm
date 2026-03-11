"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./page.module.scss";

interface Podcast {
  id: string;
  title: string;
  description: string;
  host: string;
  coverImage: string;
  soundCloudUrl: string;
  date: string;
  duration: string;
}

const PODCASTS: Podcast[] = [
  {
    id: "1",
    title: "The Morning Vibe",
    description: "Start your day with inspiring conversations and great music.",
    host: "Lilian Duru-Valentine",
    coverImage: "/morningInspiration.png",
    soundCloudUrl: "https://soundcloud.com/konga-fm/the-morning-vibe",
    date: "Mar 11, 2026",
    duration: "45 mins",
  },
  {
    id: "2",
    title: "Business Breakthroughs",
    description: "Entrepreneurs discussing strategies for success in Nigeria.",
    host: "Ayo Jimi",
    coverImage: "/kongaDeals.png",
    soundCloudUrl: "https://soundcloud.com/konga-fm/business-breakthroughs",
    date: "Mar 10, 2026",
    duration: "52 mins",
  },
  {
    id: "3",
    title: "Creative Minds Podcast",
    description: "Deep dives into digital innovation and creative storytelling.",
    host: "Ifeoma Ajumobi",
    coverImage: "/theScoop.png",
    soundCloudUrl: "https://soundcloud.com/konga-fm/creative-minds",
    date: "Mar 9, 2026",
    duration: "38 mins",
  },
  {
    id: "4",
    title: "Wellness Wednesday",
    description: "Your guide to health, fitness, and mental wellbeing.",
    host: "Bill Nelson",
    coverImage: "/healthCheck.png",
    soundCloudUrl: "https://soundcloud.com/konga-fm/wellness-wednesday",
    date: "Mar 8, 2026",
    duration: "41 mins",
  },
  {
    id: "5",
    title: "Travel Talk",
    description: "Exploring destinations and travel stories from around the world.",
    host: "Fred Ughegbe",
    coverImage: "/cruiseControl.png",
    soundCloudUrl: "https://soundcloud.com/konga-fm/travel-talk",
    date: "Mar 7, 2026",
    duration: "47 mins",
  },
  {
    id: "6",
    title: "Entertainment Unlimited",
    description: "Celebrity interviews, movie reviews, and pop culture updates.",
    host: "Stanley Chizaram",
    coverImage: "/beyondHeadlines.png",
    soundCloudUrl: "https://soundcloud.com/konga-fm/entertainment-unlimited",
    date: "Mar 6, 2026",
    duration: "55 mins",
  },
];

export default function PodcastsPage() {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);
  const minimalPlayerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClosePopover = () => {
    setIsPlayerExpanded(false);
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        minimalPlayerRef.current &&
        !minimalPlayerRef.current.contains(event.target as Node)
      ) {
        handleClosePopover();
      }
    };

    if (isPlayerExpanded) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isPlayerExpanded]);

  return (
    <main className={styles.podcastPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Our Podcasts</h1>
          <p className={styles.heroSubtitle}>
            Tune in to inspiring conversations, expert insights, and engaging stories from industry leaders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            {/* Podcasts Grid */}
            <div className={styles.gridSection}>
              <div className={styles.podcastsGrid}>
                {PODCASTS.map((podcast) => (
                  <div
                    key={podcast.id}
                    className={styles.podcastCard}
                    onClick={() => setSelectedPodcast(podcast)}
                  >
                    <div className={styles.cardImage}>
                      <Image
                        src={podcast.coverImage}
                        alt={podcast.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <button className={styles.playButton}>
                        <span>▶</span>
                      </button>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.podcastTitle}>{podcast.title}</h3>
                      <p className={styles.podcastHost}>{podcast.host}</p>
                      <p className={styles.podcastDescription}>{podcast.description}</p>
                      <div className={styles.podcastMeta}>
                        <span>{podcast.date}</span>
                        <span>•</span>
                        <span>{podcast.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Player Panel - Desktop/Tablet */}
            {selectedPodcast && !isPlayerExpanded && (
              <div className={styles.playerPanel}>
                <button
                  className={styles.closeButton}
                  onClick={() => setSelectedPodcast(null)}
                >
                  ✕
                </button>

                <div className={styles.playerContent}>
                  <div className={styles.playerImage}>
                    <Image
                      src={selectedPodcast.coverImage}
                      alt={selectedPodcast.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className={styles.playerInfo}>
                    <h2 className={styles.playerTitle}>{selectedPodcast.title}</h2>
                    <p className={styles.playerHost}>{selectedPodcast.host}</p>
                    <p className={styles.playerDescription}>
                      {selectedPodcast.description}
                    </p>

                    <div className={styles.podcastMetaInfo}>
                      <span>{selectedPodcast.date}</span>
                      <span>•</span>
                      <span>{selectedPodcast.duration}</span>
                    </div>

                    {/* SoundCloud Player */}
                    <div className={styles.soundCloudEmbed}>
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(selectedPodcast.soundCloudUrl)}&color=%23ed017f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                      ></iframe>
                    </div>

                    <p className={styles.embedNote}>
                      Powered by <strong>SoundCloud</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Expanded Player Panel - Mobile */}
            <AnimatePresence>
              {selectedPodcast && isPlayerExpanded && (
                <>
                  {/* Backdrop overlay */}
                  <motion.div
                    className={styles.popoverBackdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClosePopover}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Popover card */}
                  <motion.div
                    ref={popoverRef}
                    className={styles.playerPopover}
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 20 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      duration: 0.3,
                    }}
                  >
                  <button
                    className={styles.popoverCloseButton}
                    onClick={handleClosePopover}
                  >
                    ✕
                  </button>

                  <div className={styles.popoverContent}>
                    <div className={styles.popoverImage}>
                      <Image
                        src={selectedPodcast.coverImage}
                        alt={selectedPodcast.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className={styles.popoverInfo}>
                      <h2 className={styles.popoverTitle}>{selectedPodcast.title}</h2>
                      <p className={styles.popoverHost}>{selectedPodcast.host}</p>

                      <div className={styles.popoverMeta}>
                        <span>{selectedPodcast.date}</span>
                        <span>•</span>
                        <span>{selectedPodcast.duration}</span>
                      </div>

                      {/* SoundCloud Player */}
                      <div className={styles.soundCloudEmbed}>
                        <iframe
                          width="100%"
                          height="54"
                          scrolling="no"
                          frameBorder="no"
                          allow="autoplay"
                          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(selectedPodcast.soundCloudUrl)}&color=%23ed017f&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Minimal Bottom Player - Mobile */}
            {selectedPodcast && !isPlayerExpanded && (
              <div
                ref={minimalPlayerRef}
                className={styles.minimalPlayer}
                onClick={() => setIsPlayerExpanded(true)}
              >
                <div className={styles.minimalPlayerImg}>
                  <Image
                    src={selectedPodcast.coverImage}
                    alt={selectedPodcast.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.minimalPlayerInfo}>
                  <p className={styles.minimalTitle}>{selectedPodcast.title}</p>
                  <p className={styles.minimalHost}>{selectedPodcast.host}</p>
                </div>
                <button className={styles.minimalPlayButton}>▶</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
