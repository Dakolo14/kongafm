import Image from 'next/image';
import styles from './AboutInfoBlock.module.scss';

interface AboutInfoBlockProps {
  label: string;
  heading: string;
  description: string;
  imageUrl: string;
  imageRight?: boolean;
}

export default function AboutInfoBlock({
  label,
  heading,
  description,
  imageUrl,
  imageRight = false,
}: AboutInfoBlockProps) {
  return (
    <section className={`${styles.infoBlock} ${imageRight ? styles.imageRight : ''}`}>
      {/* Image Container */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={heading}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <p className={styles.label}>{label}</p>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
}
