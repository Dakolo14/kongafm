"use client";

import { useState } from "react";
import styles from "./style.module.scss";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Name */}
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
            </div>

            {/* Service Dropdown */}
            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.label}>
                What service are you interested in
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className={styles.select}
              >
                <option value="">Select project type</option>
                <option value="branding">Branding</option>
                <option value="web-design">Web Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="radio-production">Radio Production</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Budget Dropdown */}
            <div className={styles.formGroup}>
              <label htmlFor="budget" className={styles.label}>
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                required
                className={styles.select}
              >
                <option value="">Select project budget</option>
                <option value="under-50k">Under ₦50,000</option>
                <option value="50k-100k">₦50,000 - ₦100,000</option>
                <option value="100k-500k">₦100,000 - ₦500,000</option>
                <option value="500k-1m">₦500,000 - ₦1,000,000</option>
                <option value="above-1m">Above ₦1,000,000</option>
              </select>
            </div>

            {/* Message */}
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your project..."
                value={formData.message}
                onChange={handleInputChange}
                required
                className={styles.textarea}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={submitted}
            >
              {submitted ? "Sent! ✓" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
