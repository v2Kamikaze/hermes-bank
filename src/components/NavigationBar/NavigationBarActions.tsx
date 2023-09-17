import { ReactNode } from "react";
import styles from "./NavigationBarActions.module.css";

interface NavigationBarActionsProps {
  children: ReactNode;
}

export function NavigationBarActions({ children }: NavigationBarActionsProps) {
  return <ul className={styles.navActions}>{children}</ul>;
}
