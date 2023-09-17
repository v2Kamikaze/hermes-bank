import { ReactNode } from "react";
import styles from "./CardsList.module.css";

interface CardsListProps {
  children: ReactNode;
}

export function CardsList({ children }: CardsListProps) {
  return <ul className={styles.cardList}>{children}</ul>;
}
