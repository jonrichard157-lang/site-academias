import { CONTENT } from '../../config/gym';
import type { Plan } from '../../content/types';
import { CheckIcon } from '../Icons';
import { SectionHeading } from '../SectionHeading';
import { WhatsAppButton } from '../WhatsAppButton';
import styles from './Plans.module.css';

function PlanCard({ plan }: { readonly plan: Plan }) {
  return (
    <article className={`${styles.card} ${plan.featured ? styles.featured : ''}`} aria-labelledby={`plano-${plan.id}`}>
      {plan.tag ? <p className={styles.tag}>{plan.tag}</p> : null}
      <h3 id={`plano-${plan.id}`} className={styles.name}>
        {plan.name}
      </h3>
      <p className={styles.price}>
        <span className={styles.amount}>{plan.price}</span>
        <span className={styles.period}>{plan.period}</span>
      </p>
      <p className={styles.summary}>{plan.summary}</p>
      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature}>
            <CheckIcon className={styles.check} />
            {feature}
          </li>
        ))}
      </ul>
      <WhatsAppButton
        cta={plan.cta}
        trackId={`plano-${plan.id}`}
        variant={plan.featured ? 'solid' : 'dark'}
        icon={false}
        className={styles.cta}
      />
    </article>
  );
}

export function Plans({ index }: { readonly index: string }) {
  const plans = CONTENT.plans;
  return (
    <section id="planos" className={styles.section} aria-labelledby="planos-title">
      <div className="wrap">
        <SectionHeading id="planos" index={index} intro={plans} layout="split" className={styles.heading} />
        <div className={styles.grid} data-count={plans.items.length}>
          {plans.items.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        <div className={styles.footnotes}>
          <p className={styles.included}>{plans.included}</p>
          <p className={styles.note}>{plans.note}</p>
        </div>
      </div>
    </section>
  );
}
