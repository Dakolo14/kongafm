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
  imageUrl: "./morningInspiration.png",
  showTitle: "MORNING INSPIRATION",
  hostName: "Ifeoma Ajumobi",
  time: "5:00am - 7:00am",
};

// FM Shows Mock Data (for Show Timeline below)
const FM_SHOWS: ShowCard[] = [
  {
    id: "fm-1",
    imageUrl: "./morningInspiration.png",
    showName: "MORNING INSPIRATION",
    time: "5:00am - 7:00am",
    badge: "LIVE",
    link: "/shows/morning-inspiration",
  },
  {
    id: "fm-2",
    imageUrl: "./kongaDeals.png",
    showName: "KONGA DEALS",
    time: "7:00am - 8:00am",
    link: "/shows/urban-vibes",
  },
  {
    id: "fm-3",
    imageUrl: "./beyondHeadlines.png",
    showName: "BEYOND THE HEADLINES",
    time: "8:00am - 8:30am",
    link: "/shows/afternoon-drive",
  },
  {
    id: "fm-4",
    imageUrl: "./urbaNVibes.png",
    showName: "URBAN VIBES",
    time: "8:30am - 11:00am",
    link: "/shows/evening-jazz",
  },
  {
    id: "fm-5",
    imageUrl: "./theScoop.png",
    showName: "THE SCOOP",
    time: "11:00am - 1:00pm",
    badge: "POPULAR",
    link: "/shows/the-scoop",
  },
  {
    id: "fm-6",
    imageUrl: "./theBookShow.png",
    showName: "THE BOOK SHOW",
    time: "1:00pm - 3:00pm",
    link: "/shows/the-book-show",
  },
];

// FM Show Details with descriptions
const FM_SHOW_DETAILS = [
  {
    id: "fm-1",
    imageUrl: "./morningInspiration.png",
    showName: "MORNING INSPIRATION",
    hostName: "Daily",
    time: "5:00am - 7:00am",
    description: "A refreshing morning show that sets the tone for your day with uplifting gospel music, short Bible readings, and inspiring stories about gospel artistes, pastors, and faith leaders. It's all about encouragement, reflection, and starting your day with positive energy and spiritual focus.",
  },
  {
    id: "fm-2",
    imageUrl: "./kongaDeals.png",
    showName: "SHOP ON RADIO",
    hostName: "Daily",
    time: "7:00am - 8:00am",
    description: "A lively show where you can discover great products and buy them right from your radio. From fashion and home items to gadgets and food, vendors showcase their goods live while listeners call in to order and enjoy exclusive deals.",
  },
  {
    id: "fm-3",
    imageUrl: "./beyondHeadlines.png",
    showName: "BEYOND THE HEADLINES",
    hostName: "Daily",
    time: "8:00am - 8:30am",
    description: "A news and current affairs show that goes deeper than the headlines. We break down major stories in Nigeria and around the world, explaining the facts, the background, and why they matter.",
  },
  {
    id: "fm-4",
    imageUrl: "./theScoop.png",
    showName: "THE SCOOP",
    hostName: "Daily",
    time: "9:00am - 9:30am",
    description: "An inspiring profile show that tells the stories of Nigerians and global figures who have made a positive mark in their careers and communities. From their beginnings to their big breaks, we explore their journeys, challenges, and achievements.",
  },
  {
    id: "fm-5",
    imageUrl: "./marketSquare.png",
    showName: "THE MARKET SQUARE",
    hostName: "Daily",
    time: "9:30am - 10:00am",
    description: "A relaxed, business-focused programme that takes you into the world of entrepreneurs, traders, and market culture. We talk pricing, negotiation, marketing tips, and success stories with guests sharing their real-life business experiences.",
  },
  {
    id: "fm-6",
    imageUrl: "./juiceBox.png",
    showName: "JUICE BOX",
    hostName: "Daily",
    time: "12:00pm - 4:00pm",
    description: "Your lunch-time, ease-the-pressure radio show that serves an assortment of vibes, jokes, and hit music. Hosted by two energetic young minds with good ears for music that moves and info that trends.",
  },
  {
    id: "fm-7",
    imageUrl: "./cruiseControl.png",
    showName: "CRUISE CONTROL",
    hostName: "Daily",
    time: "4:00pm - 7:00pm",
    description: "Your perfect drive-home companion with a soundtrack of the best music, entertainment, and conversations to ease you out of the day and transition into your evening.",
  },
  {
    id: "fm-8",
    imageUrl: "./healthCheck.png",
    showName: "HEALTH CHECK",
    hostName: "Saturday",
    time: "10:00am",
    description: "Your weekly dose of health and wellness, featuring expert advice on fitness, nutrition, mental health, and practical tips to keep you living your best, healthiest life.",
  },
  {
    id: "fm-9",
    imageUrl: "./youngStars.png",
    showName: "YOUNG STARS CORNER",
    hostName: "Saturday",
    time: "11:00am",
    description: "A fun, engaging show designed for kids aged 7-16, featuring stories, games, music, and valuable lessons that entertain while teaching important life skills and values.",
  },
  {
    id: "fm-10",
    imageUrl: "./movieReview.png",
    showName: "MOVIE REVIEW",
    hostName: "Saturday",
    time: "2:00pm",
    description: "Your guide to cinema with in-depth reviews of the latest Nigerian and international films, discussions on film trends, and recommendations for your weekend viewing.",
  },
  {
    id: "fm-11",
    imageUrl: "./kongaTop10.png",
    showName: "KONGA TOP 10",
    hostName: "Saturday",
    time: "3:00pm",
    description: "The hottest countdown of the week featuring the top 10 songs that dominated the airwaves and playlists, with exclusive insights and behind-the-scenes stories from artists.",
  },
  {
    id: "fm-12",
    imageUrl: "./bookShow.png",
    showName: "THE BOOK SHOW",
    hostName: "Ifeoma Ajumobi",
    time: "4:00pm - Sunday",
    description: "A literary haven where book lovers gather to discuss the latest releases, classic favourites, and emerging authors. Deep conversations about stories that matter and the writers behind them.",
  },
  {
    id: "fm-13",
    imageUrl: "./creatorsCorner.png",
    showName: "CREATORS CORNER",
    hostName: "Fred Otueze",
    time: "5:00pm - Sunday",
    description: "A showcase of Nigeria's creative minds—from content creators and influencers to digital entrepreneurs. We celebrate their journeys, their work, and the impact they're making in the digital space.",
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
