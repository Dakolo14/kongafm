import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  variant = "primary",
  className = "",
  onClick,
  ariaLabel,
}) => {
  const buttonClass = `${styles.btn} ${styles[`btn-${variant}`]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} aria-label={ariaLabel || text}>
        {text}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      {text}
    </button>
  );
};

export default Button;
