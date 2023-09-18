import styles from "./Hero.module.css";
import dataImgUrl from "../../assets/data.svg";
import { Arrow } from "../Icons";

export function Hero() {
  return (
    <main className={`baseContainer slideLeftAnim ${styles.container}`}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Dê boas vindas ao <span>Hermes Bank</span>! <br />
        </h1>

        <p className={styles.text}>
          Venha fazer parte dessa revolução financeira conosco e transforme a
          maneira como você lida com seu dinheiro.
        </p>

        <a className={styles.cta}>
          Crie sua conta agora <Arrow />
        </a>
      </section>
      <img className={styles.piggyBank} src={dataImgUrl} width={360} />
    </main>
  );
}
