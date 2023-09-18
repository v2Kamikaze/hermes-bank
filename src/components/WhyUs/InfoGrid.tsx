import { ReactNode } from "react";

import styles from "./InfoGrid.module.css";

interface InfoGridProps {
  children: ReactNode;
}

export function InfoGrid({ children }: InfoGridProps) {
  return <ul className={styles.grid}>{children}</ul>;
}
