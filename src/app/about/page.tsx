import Image from 'next/image';
import styles from './page.module.scss';
import AboutInfoBlock from '@/components/AboutInfoBlock';
import ServiceGrid from '@/components/ServiceGrid';
import TalentsGrid from '@/components/TalentsGrid';

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* Full Width Hero Image */}
      <section className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/about-img.png"
            alt="About Konga FM"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Intro Text Section */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <p className={styles.introText}>
            <span className={styles.pink}>Konga Communications</span> is an independent marketing communication company launched by the Konga group to enhance general commerce in Nigeria, and by extension, Africa. The mission is to help brands reach the last mile and access untapped markets, both offline and online, leveraging the strength of its trusted business eco-system and global partnerships.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className={styles.infoSection}>
        <AboutInfoBlock
          label="Our Mission & Vision"
          heading="Innovate Interactive Media With AI"
          description="Our mission is to redefine the shopping and entertainment experience in Nigeria by merging the power of television, radio, and digital platforms. Through Konga TV & FM, we connect millions of people to authentic products, engaging stories, and interactive content, making shopping smarter, fun, and accessible for everyone."
          imageUrl="/about-mission.png"
          imageRight={false}
        />
      </section>

      {/* Our Values Section */}
      <section className={styles.infoSection}>
        <AboutInfoBlock
          label="Our Values"
          heading="Driven by What We Believe "
          description="At Konga TV & FM, we value innovation that pushes boundaries, trust and authenticity in every interaction, accessibility for all audiences, real-time engagement that builds communities, and a relentless pursuit of excellence in everything we do."
          imageUrl="/about-values.png"
          imageRight={true}
        />
      </section>

      {/* Our Services Section */}
      <section className={styles.servicesSection}>
        <ServiceGrid />

      {/* Meet Our Team Section */}
      <section className={styles.talentsSection}>
        <TalentsGrid />
      </section>
      </section>
    </main>
  );
}
