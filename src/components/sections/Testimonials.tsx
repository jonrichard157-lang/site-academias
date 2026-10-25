import { CONTENT } from '../../config/gym';
import { SectionHeading } from '../SectionHeading';
import styles from './Testimonials.module.css';

export function Testimonials({ index }: { readonly index: string }) {
  const testimonials = CONTENT.testimonials;
  if (!testimonials || testimonials.items.length === 0) return null;
  const [first, ...rest] = testimonials.items;

  return (
    <section id="depoimentos" className={styles.section} aria-labelledby="depoimentos-title">
      <div className="wrap">
        <div className={styles.top}>
          <SectionHeading id="depoimentos" index={index} intro={testimonials} />
          <p className={styles.disclaimer} id="depoimentos-aviso">
            <span className={styles.badge}>Exemplo</span>
            {testimonials.disclaimer}
          </p>
        </div>
        <div className={styles.grid} aria-describedby="depoimentos-aviso">
          <figure className={`${styles.quote} ${styles.lead}`}>
            <blockquote>
              <p>{first.quote}</p>
            </blockquote>
            <figcaption>
              <strong>{first.name}</strong>
              <span>{first.detail}</span>
            </figcaption>
          </figure>
          {rest.map((item) => (
            <figure key={item.name} className={styles.quote}>
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
