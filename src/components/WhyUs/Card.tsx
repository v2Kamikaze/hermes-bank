import styles from "./Card.module.css";

interface CardProps {
  title: string;
  text: string;
}

export function Card({ title, text }: CardProps) {
  return (
    <li>
      <div className={styles.card}>
        <img src="" alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}
