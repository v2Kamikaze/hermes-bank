import styles from "./WhyUs.module.css";
import { whyUsMock } from "../../data/why-us-mock";
import { ListItem } from "../AboutUs/ListItem";
import { InfoGrid } from "./InfoGrid";

export function WhyUs() {
  return (
    <section
      id="why-us"
      className={`baseContainer slideRightAnim ${styles.container}`}
    >
      <h2>
        Por que escolher o <span>Hermes Bank</span>?
      </h2>

      <InfoGrid>
        {whyUsMock.map(({ key, text }) => (
          <ListItem key={key} title={key} text={text} />
        ))}
      </InfoGrid>
    </section>
  );
}
