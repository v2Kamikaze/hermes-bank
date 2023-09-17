import styles from "./NavigationBarAction.module.css";

interface NavigationBarActionProps {
  href: string;
  text: string;
}

export function NavigationBarAction({ href, text }: NavigationBarActionProps) {
  return (
    <li className={styles.navAction}>
      <a href={href}>{text}</a>
    </li>
  );
}
