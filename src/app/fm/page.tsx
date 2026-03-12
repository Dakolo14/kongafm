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
  imageUrl: "/FMShows/AM Breif.png",
  showTitle: "AM BRIEF",
  hostName: "Daily",
  time: "5:00am - 7:00am",
};

// FM Shows Mock Data (for Show Timeline below)
const FM_SHOWS: ShowCard[] = [
  {
    id: "fm-1",
    imageUrl: "/FMShows/AM Breif.png",
    showName: "AM BRIEF",
    time: "5:00am - 7:00am",
    link: "/shows/am-brief",
  },
  {
    id: "fm-2",
    imageUrl: "/FMShows/Beyond the headlines.png",
    showName: "BEYOND THE HEADLINES",
    time: "8:00am - 8:30am",
    link: "/shows/beyond-headlines",
  },
  {
    id: "fm-3",
    imageUrl: "/FMShows/Creators corner.png",
    showName: "CREATORS CORNER",
    time: "9:00am - 10:00am",
    link: "/shows/creators-corner",
  },
  {
    id: "fm-4",
    imageUrl: "/FMShows/Cruise Control.png",
    showName: "CRUISE CONTROL",
    time: "12:00pm - 1:00pm",
    link: "/shows/cruise-control",
  },
  {
    id: "fm-5",
    imageUrl: "/FMShows/Shop on radio.png",
    showName: "SHOP ON RADIO",
    time: "4:00pm - 5:00pm",
    link: "/shows/shop-on-radio",
  },
  {
    id: "fm-6",
    imageUrl: "/FMShows/The SCoop.png",
    showName: "THE SCOOP",
    time: "6:00pm - 7:00pm",
    badge: "POPULAR",
    link: "/shows/the-scoop",
  },
];

// FM Show Details with descriptions
const FM_SHOW_DETAILS = [
  {
    id: "fm-1",
    imageUrl: "/FMShows/AM Breif.png",
    showName: "AM BRIEF",
    hostName: "Daily",
    time: "5:00am - 7:00am",
    description: "Start your morning with AM Brief, the essential show that keeps you informed and motivated. Get the latest news, trending topics, inspirational stories, and the best music to energize your day.",
  },
  {
    id: "fm-2",
    imageUrl: "/FMShows/Beyond the headlines.png",
    showName: "BEYOND THE HEADLINES",
    hostName: "Daily",
    time: "8:00am - 8:30am",
    description: "A news and current affairs show that goes deeper than the headlines. We break down major stories in Nigeria and around the world, explaining the facts, the background, and why they matter.",
  },
  {
    id: "fm-3",
    imageUrl: "/FMShows/Creators corner.png",
    showName: "CREATORS CORNER",
    hostName: "Daily",
    time: "9:00am - 10:00am",
    description: "A showcase of Nigeria's creative minds—from content creators and influencers to digital entrepreneurs. We celebrate their journeys, their work, and the impact they're making in the digital space.",
  },
  {
    id: "fm-4",
    imageUrl: "/FMShows/Cruise Control.png",
    showName: "CRUISE CONTROL",
    hostName: "Daily",
    time: "12:00pm - 1:00pm",
    description: "Your perfect drive-home companion with a soundtrack of the best music, entertainment, and conversations to ease you out of the day and transition into your evening.",
  },
  {
    id: "fm-5",
    imageUrl: "/FMShows/Shop on radio.png",
    showName: "SHOP ON RADIO",
    hostName: "Daily",
    time: "4:00pm - 5:00pm",
    description: "A lively show where you can discover great products and buy them right from your radio. From fashion and home items to gadgets and food, vendors showcase their goods live while listeners call in to order and enjoy exclusive deals.",
  },
  {
    id: "fm-6",
    imageUrl: "/FMShows/The SCoop.png",
    showName: "THE SCOOP",
    hostName: "Daily",
    time: "6:00pm - 7:00pm",
    description: "An inspiring profile show that tells the stories of Nigerians and global figures who have made a positive mark in their careers and communities. From their beginnings to their big breaks, we explore their journeys, challenges, and achievements.",
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
