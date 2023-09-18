import styles from "./ListItem.module.css";

interface ListItemProps {
  title: string;
  text: string;
}

export function ListItem({ title, text }: ListItemProps) {
  return (
    <li className={styles.listItem}>
      <h4>{title}</h4>
      <p>{text}</p>
    </li>
  );
}
