import { ReactNode } from "react";
import styles from "./ListAbout.module.css";

interface ListAboutProps {
  children: ReactNode;
}

export function ListAbout({ children }: ListAboutProps) {
  return <ul className={styles.list}>{children}</ul>;
}
