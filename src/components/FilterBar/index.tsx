"use client";

import { useState } from "react";
import styles from "./FilterBar.module.scss";

export type FilterCategory = "All" | "News" | "Blogs" | "Updates";

interface FilterBarProps {
  onFilterChange?: (category: FilterCategory) => void;
  activeCategory?: FilterCategory;
}

const FILTER_OPTIONS: FilterCategory[] = ["All", "News", "Blogs", "Updates"];

export default function FilterBar({
  onFilterChange,
  activeCategory = "All",
}: FilterBarProps) {
  const [active, setActive] = useState<FilterCategory>(activeCategory);

  const handleFilterClick = (category: FilterCategory) => {
    setActive(category);
    onFilterChange?.(category);
  };

  return (
    <div className={styles.filterBarContainer}>
      {FILTER_OPTIONS.map((option) => (
        <button
          key={option}
          className={`${styles.filterButton} ${
            active === option ? styles.active : ""
          }`}
          onClick={() => handleFilterClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
