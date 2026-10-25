import { CONTENT } from '../../config/gym';
import { PlusIcon } from '../Icons';
import { SectionHeading } from '../SectionHeading';
import { WhatsAppButton } from '../WhatsAppButton';
import styles from './Faq.module.css';

export function Faq({ index }: { readonly index: string }) {
  const faq = CONTENT.faq;
  return (
    <section id="duvidas" className={styles.section} aria-labelledby="duvidas-title">
      <div className={`wrap ${styles.layout}`}>
        <div className={styles.side}>
          <SectionHeading id="duvidas" index={index} intro={faq} />
          <div className={styles.more}>
            <p>{faq.more.prompt}</p>
            <WhatsAppButton cta={faq.more} trackId="faq" variant="text" />
          </div>
        </div>
        <div className={styles.list}>
          {faq.items.map((item) => (
            <details key={item.question} className={styles.item} name="faq">
              <summary className={styles.question}>
                <span>{item.question}</span>
                <PlusIcon className={styles.icon} />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
