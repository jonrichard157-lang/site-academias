import { CONTENT } from '../../config/gym';
import { ButtonLink } from '../ButtonLink';
import { Emphasis } from '../Emphasis';
import { Photo } from '../Photo';
import { WhatsAppButton } from '../WhatsAppButton';
import styles from './Hero.module.css';

export function Hero() {
  const hero = CONTENT.hero;
  return (
    <section id="topo" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <Photo image={hero.image} priority sizes="(min-width: 960px) 64vw, 100vw" />
        <span className={styles.ring} aria-hidden="true" />
      </div>

      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            <Emphasis text={hero.title} />
          </h1>
          <p className={styles.lead}>{hero.lead}</p>
          <div className={styles.actions}>
            <WhatsAppButton cta={hero.primary} trackId="hero" size="lg" />
            <ButtonLink href={hero.secondary.href} variant="text" icon="arrow">
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>

        <ol className={styles.facts}>
          {hero.facts.map((fact, index) => (
            <li key={fact.title} className={styles.fact}>
              <span className={styles.factIndex} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <strong className={styles.factTitle}>{fact.title}</strong>
              <span className={styles.factText}>{fact.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
