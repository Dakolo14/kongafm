"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ServiceGrid.module.scss";
import ServiceModal from "./ServiceModal";

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Advertising",
    image: "/services/advertising.png",
    description: "Scale your brand by reaching our vast, engaged audience across TV, Radio, and digital platforms with targeted campaigns that deliver measurable results.",
  },
  {
    id: 2,
    title: "Content Production",
    image: "/services/contentProduction.png",
    description: "Experience top-tier media delivery through our professional TV and Radio production capabilities, from concept to broadcast.",
  },
  {
    id: 3,
    title: "Media Consultancy",
    image: "/services/mediaConsultancy.png",
    description: "Strategic guidance to optimize your media spend and audience engagement across all channels with data-driven insights.",
  },
  {
    id: 4,
    title: "Events & News Coverage",
    image: "/services/eventCoverage.png",
    description: "Real-time event coverage and news reporting that connects your brand to live moments and trending stories.",
  },
  {
    id: 5,
    title: "Experiential Activations",
    image: "/services/experientalActivation.png",
    description: "Create memorable brand experiences through our interactive events and on-ground activations that engage audiences.",
  },
  {
    id: 6,
    title: "Products Unboxing",
    image: "/services/productUnboxing.png",
    description: "Showcase your products through engaging unboxing content that reaches millions of viewers and drives conversions.",
  },
  {
    id: 7,
    title: "Reels Production",
    image: "/services/reelsProduction.png",
    description: "Short-form, viral-ready video content optimized for social media and digital platforms that maximize engagement and reach.",
  },
  {
    id: 8,
    title: "Professional Voice Overs",
    image: "/services/professionalVoiceOvers.png",
    description: "Premium voice talent and dubbing services for all your media and advertising needs, delivered by experienced professionals.",
  },
];

export default function ServiceGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section className={styles.serviceSection}>
        <div className={styles.serviceHeader}>
          <h2 className={styles.serviceTitle}>Our Services</h2>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              onClick={() => setSelectedService(service)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className={styles.serviceCardTitle}>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
