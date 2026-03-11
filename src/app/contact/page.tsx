import ContactSection from "@/components/ContactSection";
import styles from "./page.module.scss";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Konga FM. Send us a message about your project.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      {/* Contact Section with integrated hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Get In Touch</h1>
          <p className={styles.heroSubtitle}>
            We'd love to hear from you. Let's discuss your next big project.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Contact Info & Map Section */}
      <section className={styles.infoMapSection}>
        <div className={styles.infoMapContainer}>
          {/* Contact Info */}
          <div className={styles.infoGrid}>
            {/* Phone */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Phone</h3>
                <a href="tel:07007000000" className={styles.infoLink}>
                  0700 700 0000
                </a>
              </div>
            </div>

            {/* Email */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Email</h3>
                <a href="mailto:info@kongacommunications.com" className={styles.infoLink}>
                  info@kongacommunications.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoText}>
                  No 3b Town Planning Way, Ilupeju, Lagos
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2088137899043!2d3.3876!3d6.5518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9321c97df0cd%3A0x1234567890abc!2sNo%203b%20Town%20Planning%20Way%2C%20Ilupeju%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
