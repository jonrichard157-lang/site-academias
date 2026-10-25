import type { SectionIntro } from '../content/types';
import { Emphasis } from './Emphasis';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  readonly id: string;
  /** Número da seção, exibido antes do rótulo ("02"). */
  readonly index: string;
  readonly intro: SectionIntro;
  readonly layout?: 'stacked' | 'split';
  readonly className?: string;
}

export function SectionHeading({ id, index, intro, layout = 'stacked', className = '' }: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${styles[layout]} ${className}`}>
      <p className={styles.eyebrow}>
        <span className={styles.index}>{index}</span>
        {intro.eyebrow}
      </p>
      <h2 id={`${id}-title`} className={styles.title}>
        <Emphasis text={intro.title} />
      </h2>
      {intro.intro ? <p className={styles.intro}>{intro.intro}</p> : null}
    </header>
  );
}
