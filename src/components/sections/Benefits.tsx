import { CONTENT } from '../../config/gym';
import { SectionHeading } from '../SectionHeading';
import styles from './Benefits.module.css';

export function Benefits({ index }: { readonly index: string }) {
  const benefits = CONTENT.benefits;
  return (
    <section id="beneficios" className={styles.section} aria-labelledby="beneficios-title">
      <div className={`wrap ${styles.layout}`}>
        <SectionHeading id="beneficios" index={index} intro={benefits} className={styles.heading} />
        <ol className={styles.list}>
          {benefits.items.map((item, index) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
