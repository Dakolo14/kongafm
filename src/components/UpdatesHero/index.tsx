"use client";

import Image from "next/image";
import styles from "./style.module.scss";

interface UpdatesHeroProps {
  imageUrl?: string;
  imageAlt?: string;
}

export default function UpdatesHero({
  imageUrl = "/updates-hero.png",
  imageAlt = "Latest Updates",
}: UpdatesHeroProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add search functionality here
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search");
    console.log("Search query:", query);
  };

  return (
    <section className={styles.updatesHero}>
      <div className={styles.container}>
        {/* Left Column: Typography & Search */}
        <div className={styles.leftColumn}>
          {/* Heading with precise span styling */}
          <h1 className={styles.heading}>
            <span className={styles.regular}>Get the </span>
            <span className={styles.italic}>latest </span>
            <span className={styles.serrifItalic}>updates </span>
            <span className={styles.regular}>here.</span>
          </h1>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              name="search"
              placeholder="Search updates..."
              className={styles.searchInput}
              aria-label="Search updates"
            />
            <button type="submit" className={styles.searchButton} aria-label="Search">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Column: Image */}
        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
