import React from "react";
import styles from "./AnimatedBackground.module.css";

const DiagonalDanColumns = () => (
  <div className={styles.columnContainer}>
    {[...Array(7)].map((_, colIndex) => (
      <div key={colIndex} className={styles.column}>
        {[...Array(10)].map((_, index) => (
          <span key={index} className={styles.name}>
            DAN
          </span>
        ))}
      </div>
    ))}
  </div>
);

export default DiagonalDanColumns;
