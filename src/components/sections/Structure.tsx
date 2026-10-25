import { CONTENT } from '../../config/gym';
import { PhotoGrid } from '../PhotoGrid';
import { SectionHeading } from '../SectionHeading';
import styles from './Structure.module.css';

export function Structure({ index }: { readonly index: string }) {
  const structure = CONTENT.structure;
  return (
    <section id="estrutura" className={styles.section} aria-labelledby="estrutura-title">
      <div className="wrap">
        <SectionHeading id="estrutura" index={index} intro={structure} layout="split" className={styles.heading} />
        <PhotoGrid slots={structure.gallery} />
        <dl className={styles.areas}>
          {structure.areas.map((area) => (
            <div key={area.title} className={styles.area}>
              <dt className={styles.areaName}>{area.title}</dt>
              <dd className={styles.areaText}>{area.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
