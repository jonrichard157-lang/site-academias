import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  readonly id: string;
  readonly title: string;
  readonly tone?: 'base' | 'raised';
  readonly children: ReactNode;
}

export function Section({ id, title, tone = 'base', children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${tone === 'raised' ? styles.raised : ''}`} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>
      {children}
    </section>
  );
}
