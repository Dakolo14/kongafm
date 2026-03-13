"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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
        thumbnailUrl: "/TVShows/KTV - Scoop.png",
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
        thumbnailUrl: "",
        schedule: "Weekdays",
      },
      {
        id: "2",
        title: "Reason This",
        thumbnailUrl: "",
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
        thumbnailUrl: "",
        schedule: "Weekdays",
      },
      {
        id: "2",
        title: "The Market Square",
        thumbnailUrl: "",
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
        thumbnailUrl: "",
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
    imageUrl: "/talents/iyobosa.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
      {
        id: "1",
        title: "Cruise Control",
        thumbnailUrl: "",
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
};

// Talent order for "View Next" navigation
const talentOrder = ["ifeoma", "ayodele", "lilian", "fred", "stanley", "iyobosa"];

export default function TalentProfilePage() {
  const params = useParams();
  const slug = params.slug as string;

  const talent = mockTalentData[slug] || mockTalentData.ifeoma;

  // Find next talent
  const currentIndex = talentOrder.indexOf(slug);
  const nextIndex = (currentIndex + 1) % talentOrder.length;
  const nextSlug = talentOrder[nextIndex];
  const nextTalent = mockTalentData[nextSlug];

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
                {talent.socials.twitter && (
                  <a
                    href={talent.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    title="Facebook"
                  >
                    f
                  </a>
                )}
                {talent.socials.instagram && (
                  <a
                    href={talent.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    title="Twitter"
                  >
                    𝕏
                  </a>
                )}
                {talent.socials.linkedin && (
                  <a
                    href={talent.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    title="LinkedIn"
                  >
                    in
                  </a>
                )}
              </div>
            </div>
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
                {show.thumbnailUrl && (
                  <div className={styles.showThumbnail}>
                    <Image
                      src={show.thumbnailUrl}
                      alt={show.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
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
