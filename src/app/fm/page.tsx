import type { Metadata } from "next";
import FMRadioPlayer from "@/components/FMRadioPlayer";
import { ShowCard } from "@/types/components";
import styles from "./page.module.scss";

// SEO Metadata
export const metadata: Metadata = {
  title: "FM Radio - Konga Communications",
  description:
    "Listen to Konga FM 103.7 live radio. Tune in to our FM shows and enjoy quality entertainment and music.",
  alternates: {
    canonical: "https://kongacommunications.com/fm",
  },
};

// Current/Featured FM Show
const CURRENT_SHOW = {
  id: "fm-current",
  imageUrl: "/FMShows/Morning Inspiration.png",
  showTitle: "MORNING INSPIRATION",
  hostName: "Daily",
  time: "5:00am - 7:00am",
};

// FM Shows Mock Data (for Show Timeline below)
const FM_SHOWS: ShowCard[] = [
  {
    id: "fm-1",
    imageUrl: "/FMShows/Morning Inspiration.png",
    showName: "MORNING INSPIRATION",
    time: "5:00am - 7:00am",
    link: "/shows/morning-inspiration",
  },
  {
    id: "fm-2",
    imageUrl: "/FMShows/AM Breif.png",
    showName: "AM BRIEF",
    time: "7:00am (Weekdays)",
    link: "/shows/am-brief",
  },
  {
    id: "fm-3",
    imageUrl: "/FMShows/Shop on radio.png",
    showName: "SHOP ON RADIO",
    time: "7:00am - 8:00am (Weekdays)",
    link: "/shows/shop-on-radio",
  },
  {
    id: "fm-4",
    imageUrl: "/FMShows/Beyond the headlines.png",
    showName: "BEYOND THE HEADLINES",
    time: "8:00am (Weekdays)",
    link: "/shows/beyond-headlines",
  },
  {
    id: "fm-5",
    imageUrl: "/FMShows/Market Square.png",
    showName: "MARKET SQUARE",
    time: "9:00am - 9:30am (Weekdays)",
    link: "/shows/market-square",
  },
  {
    id: "fm-6",
    imageUrl: "/FMShows/The SCoop.png",
    showName: "THE SCOOP",
    time: "9:00am (Weekdays)",
    badge: "POPULAR",
    link: "/shows/the-scoop",
  },
  {
    id: "fm-7",
    imageUrl: "/FMShows/Church on radio.png",
    showName: "CHURCH ON RADIO",
    time: "10:00am (Sundays)",
    link: "/shows/church-on-radio",
  },
  {
    id: "fm-8",
    imageUrl: "/FMShows/Creators corner.png",
    showName: "CREATORS CORNER",
    time: "5:00pm (Sundays)",
    link: "/shows/creators-corner",
  },
  {
    id: "fm-9",
    imageUrl: "/FMShows/Cruise Control.png",
    showName: "CRUISE CONTROL",
    time: "6:30pm (Weekdays)",
    link: "/shows/cruise-control",
  },
];

// FM Show Details with descriptions
const FM_SHOW_DETAILS = [
  {
    id: "fm-1",
    imageUrl: "/FMShows/Morning Inspiration.png",
    showName: "MORNING INSPIRATION",
    hostName: "Daily",
    time: "5:00am - 7:00am",
    description: "Begin your day with spiritual and motivational content that uplifts your spirit. Morning Inspiration brings together faith-based messages, motivational stories, and uplifting music to inspire your day.",
  },
  {
    id: "fm-2",
    imageUrl: "/FMShows/AM Breif.png",
    showName: "AM BRIEF",
    hostName: "Weekdays",
    time: "7:00am (Weekdays)",
    description: "Start your weekday morning with the essential AM Brief, delivering the latest news, trending topics, and inspirational stories to keep you informed and motivated.",
  },
  {
    id: "fm-3",
    imageUrl: "/FMShows/Shop on radio.png",
    showName: "SHOP ON RADIO",
    hostName: "Weekdays",
    time: "7:00am - 8:00am (Weekdays)",
    description: "A lively show where you can discover great products and buy them right from your radio. From fashion and home items to gadgets and food, vendors showcase their goods live while listeners call in to order and enjoy exclusive deals.",
  },
  {
    id: "fm-4",
    imageUrl: "/FMShows/Beyond the headlines.png",
    showName: "BEYOND THE HEADLINES",
    hostName: "Weekdays",
    time: "8:00am (Weekdays)",
    description: "A news and current affairs show that goes deeper than the headlines. We break down major stories in Nigeria and around the world, explaining the facts, the background, and why they matter.",
  },
  {
    id: "fm-5",
    imageUrl: "/FMShows/Market Square.png",
    showName: "MARKET SQUARE",
    hostName: "Weekdays",
    time: "9:00am - 9:30am (Weekdays)",
    description: "Your gateway to business, commerce, and lifestyle news. Market Square covers the pulse of Nigeria's economy, entrepreneurship stories, and practical tips for success in business and personal development.",
  },
  {
    id: "fm-6",
    imageUrl: "/FMShows/The SCoop.png",
    showName: "THE SCOOP",
    hostName: "Weekdays",
    time: "9:00am (Weekdays)",
    description: "An inspiring profile show that tells the stories of Nigerians and global figures who have made a positive mark in their careers and communities. From their beginnings to their big breaks, we explore their journeys, challenges, and achievements.",
  },
  {
    id: "fm-7",
    imageUrl: "/FMShows/Church on radio.png",
    showName: "CHURCH ON RADIO",
    hostName: "Sundays",
    time: "10:00am (Sundays)",
    description: "A faith-based show bringing spiritual guidance, inspirational messages, and community contributions. Church On Radio connects listeners to their faith and creates a space for spiritual growth and fellowship.",
  },
  {
    id: "fm-8",
    imageUrl: "/FMShows/Creators corner.png",
    showName: "CREATORS CORNER",
    hostName: "Sundays",
    time: "5:00pm (Sundays)",
    description: "A showcase of Nigeria's creative minds—from content creators and influencers to digital entrepreneurs. We celebrate their journeys, their work, and the impact they're making in the digital space.",
  },
  {
    id: "fm-9",
    imageUrl: "/FMShows/Cruise Control.png",
    showName: "CRUISE CONTROL",
    hostName: "Weekdays",
    time: "6:30pm (Weekdays)",
    description: "Your perfect companion with a soundtrack of the best music, entertainment, and conversations to ease you out of the day and transition into your evening.",
  },
];

export default function FMPage() {
  return (
    <main className={styles.fmPage}>
      {/* FM Radio Player Section */}
      <section className={styles.playerSection}>
        <FMRadioPlayer
          imageUrl={CURRENT_SHOW.imageUrl}
          showTitle={CURRENT_SHOW.showTitle}
          hostName={CURRENT_SHOW.hostName}
          time={CURRENT_SHOW.time}
        />
      </section>

      {/* About Konga FM Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <h2>About KongaFM</h2>
          <p>
            Konga FM 103.7 is Nigeria's leading entertainment and lifestyle radio station, dedicated to delivering quality content and exceptional entertainment. We bring you the best shows, hosts, and experiences that keep you entertained throughout your day.
          </p>
          <p>
            From morning inspirations to late-night shows, our diverse programming caters to all audiences. Whether you're looking for music, news, entertainment, or engaging conversations, Konga FM has something special for everyone.
          </p>
          <p>
            Join our community of listeners and experience the difference that quality broadcasting makes. Tune in to Konga FM 103.7 and become part of our growing family.
          </p>
        </div>
      </section>

      {/* FM Shows Details Section */}
      <section className={styles.showsDetailsSection}>
        <div className={styles.showsDetailsContainer}>
          {FM_SHOW_DETAILS.map((show, index) => (
            <div key={show.id} className={styles.showDetailRow}>
              <div className={`${styles.imageColumn} ${index % 2 === 1 ? styles.reverse : ''}`}>
                <img src={show.imageUrl} alt={show.showName} className={styles.showDetailImage} />
              </div>
              <div className={styles.textColumn}>
                <h3>{show.showName}</h3>
                <p className={styles.showDetailTime}>{show.time}</p>
                <p className={styles.showDetailDescription}>{show.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
