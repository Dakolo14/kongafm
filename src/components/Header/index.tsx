"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper for Nav Items to keep DRY
  const navItems = [
    { label: "Home", href: "/", active: true },
    { label: "About Us", href: "/about" },
    { label: "Live TV", href: "/live-tv" },
    { label: "FM", href: "/fm" },
    { label: "Shows", href: "/shows" },
    { label: "Rate Card", href: "/rate-card" },
    { label: "Updates", href: "/updates" },
    { label: "Podcasts", href: "/podcasts" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      {/* ========================================= */}
      {/* DESKTOP & TABLET VIEW (Hidden on Mobile)  */}
      {/* ========================================= */}

      {/* Top Pink Banner */}
      <div className={styles.topBanner}>
        <span className={styles.bannerText}>MERGER LOGO</span>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo/Branding Section */}
          <div className={styles.branding}>
            <div className={styles.radioIcon}>
              <Image
                src="/konga-icon.png"
                alt="Konga FM"
                width={48}
                height={48}
                className={styles.iconImage}
              />
            </div>
            <div className={styles.brandText}>
              <div className={styles.tuneInLabel}>TUNE IN NOW!</div>
              <div className={styles.stationName}>Konga FM 103.7</div>
            </div>
            <button className={styles.playButton}>▶</button>
          </div>

          {/* Navigation Links */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${item.active ? styles.active : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ========================================= */}
      {/* MOBILE VIEW (Visible Only on < 768px)     */}
      {/* ========================================= */}

      <div className={styles.mobileHeader}>
        <div className={styles.mobileBranding}>
          <div className={styles.mobileIcon}>
            <Image
              src="/konga-icon.png"
              alt="Konga FM"
              width={36}
              height={36}
            />
          </div>
          <div className={styles.mobileText}>
            <span className={styles.mobileLabel}>TUNE IN NOW!</span>
            <span className={styles.mobileName}>Konga FM 103.7</span>
          </div>
          <button className={styles.mobilePlay}>▶</button>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Slide-out */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarBrand}>
            <Image
              src="/konga-icon.png"
              alt="Konga FM"
              width={32}
              height={32}
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarTitle}>Konga FM</span>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <ul className={styles.mobileNavList}>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={item.active ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.sidebarFooter}>
          <p>© 2025 Konga FM</p>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
