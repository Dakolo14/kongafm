"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Subscribe To Our Newsletter</h2>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.emailInput}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Links Section */}
      <div className={styles.linksSection}>
        <nav className={styles.linksNav}>
          <Link href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/terms" className={styles.link}>
            Terms of Use
          </Link>
          <Link href="/submission-policy" className={styles.link}>
            Submission Policy
          </Link>
          <Link href="/about" className={styles.link}>
            About Us
          </Link>
          <Link href="/press" className={styles.link}>
            Press
          </Link>
          <Link href="/sitemap" className={styles.link}>
            Sitemap
          </Link>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <p className={styles.copyright}>
          © {currentYear} | Konga FM & TV
        </p>
      </div>
    </footer>
  );
};

export default Footer;
