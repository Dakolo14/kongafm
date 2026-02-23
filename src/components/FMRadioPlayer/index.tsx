"use client";

import { useFMPlayer } from "@/context/FMPlayerContext";
import styles from "./style.module.scss";

interface FMRadioPlayerProps {
  imageUrl: string;
  showTitle: string;
  hostName: string;
  time?: string;
  youtubeUrl?: string; // YouTube video URL to like
}

export default function FMRadioPlayer({
  imageUrl,
  showTitle,
  hostName,
  time,
  youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
}: FMRadioPlayerProps) {
  const { isPlaying, setIsPlaying } = useFMPlayer();

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleShare = async () => {
    const shareData = {
      title: showTitle,
      text: `Now listening to ${showTitle} with ${hostName} on Konga FM 103.7`,
      url: window.location.href,
    };

    try {
      // Try using the native Share API if available
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        const shareText = `${shareData.text}\n${shareData.url}`;
        await navigator.clipboard.writeText(shareText);
        alert("Share link copied to clipboard!");
      }
    } catch (error) {
      console.log("Share cancelled or failed", error);
    }
  };

  const handleLike = () => {
    // Open YouTube video in new tab for liking
    window.open(youtubeUrl, "_blank");
  };

  return (
    <div className={styles.playerContainer}>
      {/* Left: Visualizer Circle */}
      <div className={styles.visualizerSection}>
        <div className={styles.visualizerContainer}>
          {/* Rotating outer ring */}
          <div className={`${styles.outerRing} ${isPlaying ? styles.playing : ""}`}></div>
          {/* Static inner circular image */}
          <img src={imageUrl} alt={showTitle} className={styles.circleImage} />
        </div>
      </div>

      {/* Middle: Show Info + Controls */}
      <div className={styles.middleSection}>
        <div className={styles.infoSection}>
          <h2 className={styles.showTitle}>{showTitle}</h2>
          <p className={styles.hostName}>On Air Now - {hostName}</p>
          {time && <p className={styles.time}>{time}</p>}
        </div>

        {/* Controls */}
        <div className={styles.controlsSection}>
          <button className={styles.controlButton} aria-label="Previous">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6v12h2V6H6zm3.5 6l8.5 6V6l-8.5 6z" fill="currentColor" />
            </svg>
          </button>

          <button
            className={styles.playButton}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              // Pause Icon
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="6" width="3" height="16" fill="currentColor" />
                <rect x="17" y="6" width="3" height="16" fill="currentColor" />
              </svg>
            ) : (
              // Play Icon
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6l14 8-14 8V6z" fill="currentColor" />
              </svg>
            )}
          </button>

          <button className={styles.controlButton} aria-label="Next">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "scaleX(-1)" }}
            >
              <path d="M6 6h2v12H6V6zm3.5 6l8.5-6v12l-8.5-6z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right: Share & Like */}
      <div className={styles.actionsSection}>
        <button
          className={styles.actionButton}
          onClick={handleShare}
          aria-label="Share"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.11c-.05.23-.09.47-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          className={styles.actionButton}
          onClick={handleLike}
          aria-label="Like on YouTube"
          title="Like on YouTube"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
