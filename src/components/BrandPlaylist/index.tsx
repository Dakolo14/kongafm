"use client";

import React from "react";
import styles from "./BrandPlaylist.module.scss";

export interface PlaylistData {
  id: string | number;
  coverImageUrl: string;
  title: string;
  destinationUrl: string;
}

interface BrandPlaylistProps {
  title?: string;
  playlists: PlaylistData[];
  viewAllLink?: string;
}

const BrandPlaylist: React.FC<BrandPlaylistProps> = ({
  title = "Brand Playlist",
  playlists,
  viewAllLink,
}) => {
  return (
    <section className={styles.brandPlaylist}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className={styles.viewAll}>
            View All
          </a>
        )}
      </div>

      {/* Cards Container */}
      <div className={styles.container}>
        {playlists.map((playlist) => (
          <a
            key={playlist.id}
            href={playlist.destinationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`View ${playlist.title}`}
          >
            <div className={styles.imageWrapper}>
              <img
                src={playlist.coverImageUrl}
                alt={playlist.title}
                className={styles.coverImage}
              />
            </div>

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{playlist.title}</h3>
              <p className={styles.cta}>Watch Here</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BrandPlaylist;
