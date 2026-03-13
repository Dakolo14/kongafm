import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

interface Talent {
  id: string | number;
  imageUrl: string;
  name: string;
  role: string;
  profileUrl: string;
}

interface TalentsGridProps {
  talents?: Talent[];
}

const defaultTalents: Talent[] = [
  {
    id: 1,
    imageUrl: "/talents/ifeoma.png",
    name: "Ifeoma Ajumobi",
    role: "Heads Konga Communications",
    profileUrl: "/talents/ifeoma",
  },
  {
    id: 2,
    imageUrl: "/talents/ayojimi.png",
    name: "Ayodele Olujimi",
    role: "Head of KongaTV",
    profileUrl: "/talents/ayodele",
  },
  {
    id: 3,
    imageUrl: "/talents/lilian.png",
    name: "Lilian Duru-Valentine",
    role: "Broadcaster & Head of Konga103.7FM",
    profileUrl: "/talents/lilian",
  },
  {
    id: 4,
    imageUrl: "/talents/fred.png",
    name: "Fred Otueze Jr.",
    role: "Media Professional, Broadcaster, and Creative Innovator",
    profileUrl: "/talents/fred",
  },
  {
    id: 5,
    imageUrl: "/talents/stanley.png",
    name: "Stanley Chizgaram Ikeije",
    role: "Radio Producer, Host & Actor",
    profileUrl: "/talents/stanley",
  },
  {
    id: 6,
    imageUrl: "/talents/nelson.png",
    name: "Bill Nelson",
    role: "Motion Graphics Designer",
    profileUrl: "/talents/bill-nelson",
  },
  {
    id: 7,
    imageUrl: "/talents/iyobosa.png",
    name: "Iyobosa Victory Osahon",
    role: "Radio Host & Entertainment Expert",
    profileUrl: "/talents/iyobosa",
  },
];

export default function TalentsGrid({ talents = defaultTalents }: TalentsGridProps) {
  return (
    <section className={styles.talentsSection}>
      <div className={styles.talentsHeader}>
        <h2 className={styles.talentsTitle}>Our Talents</h2>
      </div>

      <div className={styles.talentsGrid}>
        {talents.map((talent) => (
          <div key={talent.id} className={styles.talentCard}>
            <div className={styles.imageContainer}>
              <Image
                src={talent.imageUrl}
                alt={talent.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.talentContent}>
              <h3 className={styles.talentName}>{talent.name}</h3>
              <p className={styles.talentRole}>{talent.role}</p>

              <Link href={talent.profileUrl}>
                <button className={styles.readMoreButton}>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
