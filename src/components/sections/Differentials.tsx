import { CONTENT } from '../../config/gym';
import { Photo } from '../Photo';
import { SectionHeading } from '../SectionHeading';
import styles from './Differentials.module.css';

export function Differentials({ index }: { readonly index: string }) {
  const differentials = CONTENT.differentials;
  return (
    <section id="diferenciais" className={styles.section} aria-labelledby="diferenciais-title">
      <div className={styles.media}>
        <Photo image={differentials.image} sizes="(min-width: 960px) 50vw, 100vw" />
      </div>
      <div className={styles.body}>
        <SectionHeading id="diferenciais" index={index} intro={differentials} />
        <ul className={styles.list}>
          {differentials.items.map((item) => (
            <li key={item.title} className={styles.item}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
