import styles from "./ContactUs.module.css";
import contactUsUrl from "../../assets/contact-us.svg";

export function ContactUs() {
  return (
    <section id="contact" className={`baseContainer ${styles.container}`}>
      <div className="slideLeftAnim">
        <div>
          <h2 className={styles.title}>
            Entre em contato com <span>Hermes Bank</span>
          </h2>
          <p className={styles.text}>
            Estamos sempre aqui para ouvir você e ajudar com todas as suas
            necessidades bancárias. Sinta-se à vontade para entrar em contato
            conosco a qualquer momento. Sua satisfação é a nossa prioridade.
          </p>
        </div>

        <label htmlFor="text-input">Mande sua mensagem:</label>
        <textarea id="text-input" className={styles.inputText} rows={5} />
        <button className={styles.sendBtn}>Enviar</button>
      </div>
      <img className="slideRightAnim" src={contactUsUrl} alt="" />
    </section>
  );
}
