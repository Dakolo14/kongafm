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
    role: "Heads Konga Communications",
    bio: "Popularly known as IfyMelody, Your Sparkling Woman on Air, Ify is a passionate and experienced Broadcast Journalist (TV & Radio). She Heads Konga Communications, which houses KongaTV and Konga103.7FM. She has worked with various media houses with a major focus on business, marketing, advertising and Entrepreneurship. She is very bold, creative and resilient. A sonorous voice anchoring THE SCOOP and THE BOOK SHOW on Konga103.7fm and KongaTV Ify Melody has received several trainings in Broadcast Journalism.",
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
        thumbnailUrl: "/shows/the-scoop.png",
        schedule: "Weekdays, 8:00 AM",
      },
      {
        id: "2",
        title: "The Book Show",
        thumbnailUrl: "/shows/the-book-show.png",
        schedule: "Saturdays, 10:00 AM",
      },
    ],
  },
  "ayo-jimi": {
    id: "2",
    slug: "ayo-jimi",
    name: "Ayo Jimi",
    role: "Head Of KongaTV",
    bio: "PocketNomist as he is known online and on the airwaves, Ayo serves as the Head Of KongaTV. With over two decades of professional practice in the media space, cutting across Broadcast, Designs, & Brand Management, he doubles as the Content/Brand Manager for Konga Communications (both radio and TV). To listen to him as an analyst is to come in contact with unusual depth, humor & streetlevel Economics that simplifies concepts and leaves the listener or viewer informed & smarter.",
    imageUrl: "/talents/ayojimi.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
        {
        id: "1",
        title: "The Scoop",
        thumbnailUrl: "/shows/the-scoop.png",
        schedule: "Weekdays, 8:00 AM",
      },
      {
        id: "2",
        title: "The Book Show",
        thumbnailUrl: "/shows/the-book-show.png",
        schedule: "Saturdays, 10:00 AM",
      },
    ],
  },
  lilian: {
    id: "3",
    slug: "lilian",
    name: "Lilian Duru-Valentine",
    role: "Acting Radio Head of Konga103.7 FM",
    bio: "Lilian Duru-Valentine (LDV) is a TV and multiple award-winning broadcaster, and the Acting Radio Head of Konga103.7 FM. She is a trusted voice on Konga FM/TV, inspiring listeners daily on Morning Inspiration and giving entrepreneurs a platform on The Market Square. A versatile media professional, she blends faith, business, and storytelling with excellence. She is also an experienced Comperere, Red Carpet Host, and a huge proponent of Being More — a life philosophy that drives her to inspire others toward growth, purpose, and impact.",
    imageUrl: "/talents/lilian.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
        {
        id: "1",
        title: "The Scoop",
        thumbnailUrl: "/shows/the-scoop.png",
        schedule: "Weekdays, 8:00 AM",
      },
      {
        id: "2",
        title: "The Book Show",
        thumbnailUrl: "/shows/the-book-show.png",
        schedule: "Saturdays, 10:00 AM",
      },
    ],
  },
  fred: {
    id: "4",
    slug: "fred",
    name: "Fred Otueze Jr.",
    role: "OAP at KongaTV",
    bio: "Fred Otueze is a media professional, broadcaster, and creative innovator. He has built a reputation for shaping engaging stories, driving impactful projects, and pushing the boundaries of media and content creation. He currently serves as an OAP at KongaTV. Beyond broadcasting, Fred's creativity extends into community-driven storytelling. In 2024, he won the PitchIt competition at the Sony Alpha Festival Naija with his groundbreaking project Bus Stop Stories—an initiative that transforms bus stops into cultural storytelling hubs, celebrating Nigeria's heritage and everyday narratives. He is the hyper-energetic voice on Creators Corner & Konga Top10.",
    imageUrl: "/talents/fred.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
        {
        id: "1",
        title: "The Scoop",
        thumbnailUrl: "/shows/the-scoop.png",
        schedule: "Weekdays, 8:00 AM",
      },
      {
        id: "2",
        title: "The Book Show",
        thumbnailUrl: "/shows/the-book-show.png",
        schedule: "Saturdays, 10:00 AM",
      },
    ],
  },
  stanley: {
    id: "5",
    slug: "stanley",
    name: "Stanley Chizaram Ikeije",
    role: "TV & Radio Producer, Host & Actor",
    bio: "Stanley Chizaram Ikeije is an experienced TV and Radio Producer, Host, and Actor. He creates engaging, high-quality programs and drives successful marketing and promotional strategies. From concept to post-production, he manages productions seamlessly—overseeing budgets, teams, and resources to deliver outstanding results.",
    imageUrl: "/talents/stanley.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
        {
        id: "1",
        title: "The Scoop",
        thumbnailUrl: "/shows/the-scoop.png",
        schedule: "Weekdays, 8:00 AM",
      },
      {
        id: "2",
        title: "The Book Show",
        thumbnailUrl: "/shows/the-book-show.png",
        schedule: "Saturdays, 10:00 AM",
      },
    ],
  },
  "bill-nelson": {
    id: "6",
    slug: "bill-nelson",
    name: "Bill Nelson",
    role: "OAP, Motion Graphics Designer & Voice Over Artiste",
    bio: "A seasoned On-Air Personality, Professional Motion Graphics Designer, and Voice Over Artiste. He embodies the perfect blend of creativity, technical expertise, and professionalism. With a passion for storytelling and a keen eye for details, he has built a reputation delivering high-quality content that captivates audiences and drives results. In the world of broadcasting, his on-air presence is warm, engaging, and authentic, making him a standard figure in the industry. But behind the scenes, his skills extend far beyond hosting. As a motion graphics designer, his voice over work is equally impressive, with a range that spans from smooth narration to energetic commercials.",
    imageUrl: "/talents/nelson.png",
    socials: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    shows: [
        {
        id: "1",
        title: "The Scoop",
        thumbnailUrl: "/shows/the-scoop.png",
        schedule: "Weekdays, 8:00 AM",
      },
      {
        id: "2",
        title: "The Book Show",
        thumbnailUrl: "/shows/the-book-show.png",
        schedule: "Saturdays, 10:00 AM",
      },
    ],
  },
};

// Talent order for "View Next" navigation
const talentOrder = ["ifeoma", "ayo-jimi", "lilian", "fred", "stanley", "bill-nelson"];

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
                <div className={styles.showThumbnail}>
                  <Image
                    src={show.thumbnailUrl}
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
