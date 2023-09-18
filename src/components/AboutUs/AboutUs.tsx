import styles from "./AboutUs.module.css";
import personSrc from "../../assets/person.svg";
import { aboutUsMock } from "../../data/about-us-mock";
import { ListItem } from "./ListItem";
import { ListAbout } from "./ListAbout";

export function AboutUs() {
  return (
    <section id="about" className={`baseContainer ${styles.container}`}>
      <h2 className="slideLeftAnim">
        Sobre o <span>Hermes Bank</span>
      </h2>
      <p className={`slideLeftAnim ${styles.text}`}>
        No <span>Hermes Bank</span>, nossa jornada é impulsionada por uma visão
        ousada: redefinir a experiência bancária na América Latina. Desde nossa
        fundação, temos trabalhado incansavelmente para criar um banco que
        coloque você, nosso cliente, no centro de tudo o que fazemos.
      </p>
      <div className={styles.grid}>
        <img src={personSrc} className={`slideLeftAnim  ${styles.aboutImg}`} />
        <ListAbout>
          {aboutUsMock.map(({ key, text }) => (
            <ListItem key={key} title={key} text={text} />
          ))}
        </ListAbout>
      </div>
    </section>
  );
}
