import styles from "./ServiceGrid.module.scss";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.modalTitle}>{service.title}</h2>
        <p className={styles.modalDescription}>{service.description}</p>
      </div>
    </div>
  );
}
