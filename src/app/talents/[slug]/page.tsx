"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";

interface Show {
  id: string;
  title: string;
  thumbnailUrl: string;
  schedule: string;
}

export interface TalentProfile {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: { twitter?: string; instagram?: string; linkedin?: string };
  shows: Show[];
}

// Mock data - will be replaced with actual talent data
const mockTalentData: Record<string, TalentProfile> = {
  ifeoma: {
    id: "1",
    slug: "ifeoma",
    name: "Ifeoma Ajumobi",
    role: "Broadcast Journalist & Host",
    bio: "Popularly known as IfyMelody, Your Sparkling Woman on Air, Ify is a passionate and experienced Broadcast Journalist (TV & Radio). She is a versatile broadcast professional known for her engaging presentation style and deep expertise in entertainment and lifestyle content.",
    imageUrl: "/talents/ifeoma.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "The Scoop",
        thumbnailUrl: "/FMShows/The SCoop.png",
        schedule: "Weekdays",
      },
      {
        id: "2",
        title: "The Book Review",
        thumbnailUrl: "",
        schedule: "Weekly",
      },
      {
        id: "3",
        title: "Diva's Diary",
        thumbnailUrl: "",
        schedule: "Weekly",
      },
    ],
  },
  ayodele: {
    id: "2",
    slug: "ayodele",
    name: "Ayodele Olujimi",
    role: "Broadcast Journalist & Host",
    bio: "Ayodele Olujimi is an accomplished broadcast journalist with expertise in news coverage and current affairs programming. Known for his dynamic presence and incisive interviewing style.",
    imageUrl: "/talents/ayojimi.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "Beyond The Headlines",
        thumbnailUrl: "/FMShows/Beyond the headlines.png",
        schedule: "Weekdays",
      },
      {
        id: "2",
        title: "Reason This",
        thumbnailUrl: "/TVShows/Reason This.png",
        schedule: "Weekly",
      },
    ],
  },
  lilian: {
    id: "3",
    slug: "lilian",
    name: "Lilian Duru Valentine",
    role: "Radio Host & Business Advocate",
    bio: "Lilian Duru-Valentine is a TV and radio broadcaster, and a trusted voice on Konga FM, inspiring listeners daily on Morning Inspiration and giving entrepreneurs a platform on The Market Square. A versatile media professional, she blends faith, business, and storytelling with excellence.",
    imageUrl: "/talents/lilian.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "Morning Inspiration",
        thumbnailUrl: "/FMShows/Morning Inspiration.png",
        schedule: "Weekdays",
      },
      {
        id: "2",
        title: "The Market Square",
        thumbnailUrl: "/FMShows/Market Square.png",
        schedule: "Weekly",
      },
    ],
  },
  fred: {
    id: "4",
    slug: "fred",
    name: "Fred Otueze",
    role: "Broadcast Journalist & Creative Innovator",
    bio: "Fred Otueze is a media professional, broadcaster, and creative innovator. He has built a reputation for shaping engaging stories and driving impactful projects. He is the hyper-energetic voice bringing excitement to listeners across multiple platforms.",
    imageUrl: "/talents/fred.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "Juice Box",
        thumbnailUrl: "",
        schedule: "Weekdays",
      },
      {
        id: "2",
        title: "Creators Corner",
        thumbnailUrl: "/FMShows/Creators corner.png",
        schedule: "Weekly",
      },
      {
        id: "3",
        title: "KongaFM Top 10 Countdown",
        thumbnailUrl: "",
        schedule: "Weekly",
      },
    ],
  },
  stanley: {
    id: "5",
    slug: "stanley",
    name: "Stanley Chizaram",
    role: "TV & Radio Producer, Host & Actor",
    bio: "Stanley Chizaram Ikeije is an experienced TV and Radio Producer, Host, and Actor. He creates engaging, high-quality programs and drives successful marketing and promotional strategies. From concept to post-production, he manages productions seamlessly.",
    imageUrl: "/talents/stanley.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "Civic Centre",
        thumbnailUrl: "",
        schedule: "Weekly",
      },
    ],
  },
  iyobosa: {
    id: "6",
    slug: "iyobosa",
    name: "Iyobosa Victory Osahon",
    role: "Radio Host & Entertainment Expert",
    bio: "Iyobosa Victory Osahon is a talented broadcast professional known for her engaging presentation and expertise in lifestyle, entertainment, and music programming. She brings energy and authenticity to every show she hosts.",
    imageUrl: "/talents/Vicsolute.jpeg",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "Cruise Control",
        thumbnailUrl: "/FMShows/Cruise Control.png",
        schedule: "Weekdays",
      },
      {
        id: "2",
        title: "Movie Review",
        thumbnailUrl: "",
        schedule: "Weekly",
      },
      {
        id: "3",
        title: "Gospel Countdown",
        thumbnailUrl: "",
        schedule: "Weekly",
      },
      {
        id: "4",
        title: "Juice Box",
        thumbnailUrl: "",
        schedule: "Co-hosting",
      },
    ],
  },
  "bill-nelson": {
    id: "7",
    slug: "bill-nelson",
    name: "Bill Nelson",
    role: "Motion Graphics Designer",
    bio: "Bill Nelson is a talented motion graphics designer with expertise in visual storytelling and creative design. He brings innovation and technical excellence to every project, creating compelling visual content that engages and inspires audiences.",
    imageUrl: "/talents/nelson.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "Beyond The Headlines",
        thumbnailUrl: "/FMShows/Beyond the headlines.png",
        schedule: "Weekdays",
      }
    ],
  },
};

// Talent order for "View Next" navigation
const talentOrder = ["ifeoma", "ayodele", "lilian", "fred", "stanley", "iyobosa", "bill-nelson"];

export default function TalentProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const talent = mockTalentData[slug] || mockTalentData.ifeoma;

  // Find next talent
  const currentIndex = talentOrder.indexOf(slug);
  const nextIndex = (currentIndex + 1) % talentOrder.length;
  const nextSlug = talentOrder[nextIndex];
  const nextTalent = mockTalentData[nextSlug];

  // Generate share URLs
  const pageUrl = `https://kongacommunications.com/talents/${slug}`;
  
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=Check%20out%20${encodeURIComponent(talent.name)}%20on%20Konga%20Communications`;

  // Handle LinkedIn copy to clipboard
  const handleLinkedinShare = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopiedLinkedin(true);
      // Auto-hide toast after 2 seconds
      setTimeout(() => setCopiedLinkedin(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  // Auto-hide copied notification
  useEffect(() => {
    if (copiedLinkedin) {
      const timer = setTimeout(() => setCopiedLinkedin(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedLinkedin]);

  return (
    <main className={styles.talentProfilePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          {/* Left Column - Image + Info */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={talent.imageUrl}
                alt={talent.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* Info below image */}
            <div className={styles.columnInfo}>
              <h1 className={styles.talentName}>{talent.name}</h1>
              <p className={styles.talentRole}>{talent.role}</p>
              <p className={styles.biography}>{talent.bio}</p>
            </div>
          </div>

          {/* Right Column - View Next & Social */}
          <div className={styles.sidePanel}>
            {/* View Next Card */}
            <Link href={`/talents/${nextSlug}`} className={styles.viewNextCard}>
              <div className={styles.viewNextHeader}>
                <span className={styles.viewNextLabel}>View Next</span>
                <span className={styles.viewNextArrow}>→</span>
              </div>
              <div className={styles.nextTalentImage}>
                <Image
                  src={nextTalent.imageUrl}
                  alt={nextTalent.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.nextTalentInfo}>
                <h3 className={styles.nextTalentName}>{nextTalent.name}</h3>
                <p className={styles.nextTalentRole}>{nextTalent.role}</p>
              </div>
            </Link>

            {/* Share Section */}
            <div className={styles.shareSection}>
              <p className={styles.shareTitle}>Share with your community!</p>
              <div className={styles.socialLinks}>
                <a
                  href={facebookShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Share on Facebook"
                >
                  f
                </a>
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title="Share on X (Twitter)"
                >
                  𝕏
                </a>
                <a
                  onClick={handleLinkedinShare}
                  className={styles.socialIcon}
                  title="Copy link to share on LinkedIn"
                  style={{ cursor: "pointer" }}
                >
                  in
                </a>
              </div>
            </div>

            {/* Toast Notification */}
            {copiedLinkedin && (
              <div className={styles.toast}>
                <p>Link copied to clipboard!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Shows Section */}
      {talent.shows && talent.shows.length > 0 && (
        <section className={styles.showsSection}>
          <h2 className={styles.showsTitle}>Shows Hosted By {talent.name}</h2>

          <div className={styles.showsGrid}>
            {talent.shows.map((show) => (
              <div key={show.id} className={styles.showCard}>
                <div className={styles.showThumbnail}>
                  <Image
                    src={show.thumbnailUrl || "/placeholder-show.svg"}
                    alt={show.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.showInfo}>
                  <h3 className={styles.showTitle}>{show.title}</h3>
                  <p className={styles.showSchedule}>{show.schedule}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
