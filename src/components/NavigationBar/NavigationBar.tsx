import { NavigationBarActions, NavigationBarAction } from ".";

import styles from "./NavigationBar.module.css";

export function NavigationBar() {
  return (
    <nav className={`slideYAnim  ${styles.navStyle}`}>
      <div className={`baseContainer ${styles.navMenu}`}>
        <a className={styles.logo}>
          <h1>Hermes Bank</h1>
        </a>

        <NavigationBarActions>
          <NavigationBarAction text="Início" href="#hero" />
          <NavigationBarAction text="Sobre nós" href="#about" />
          <NavigationBarAction text="Contate-nos " href="#contact" />
          <NavigationBarAction text="Por que nós?" href="#why-us" />
        </NavigationBarActions>
      </div>
    </nav>
  );
}
