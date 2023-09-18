import styles from "./WhyUs.module.css";
import { whyUsMock } from "../../data/why-us-mock";
import { Card } from "./Card";
import { CardsList } from "./CardsList";

export function WhyUs() {
  return (
    <section
      id="about"
      className={`baseContainer slideRightAnim ${styles.container}`}
    >
      <h2>Por que escolher o Hermes Bank?</h2>

      <CardsList>
        {whyUsMock.map(({ key, text }) => (
          <Card key={key} title={key} text={text} />
        ))}
      </CardsList>
    </section>
  );
}
