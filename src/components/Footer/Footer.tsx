import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerStyle}>
      <div className={`baseContainer ${styles.container}`}>
        <p>Copyright © Hermes Bank. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
