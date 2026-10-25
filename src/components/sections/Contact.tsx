import { CONTENT } from '../../config/gym';
import { Emphasis } from '../Emphasis';
import { LeadForm } from '../LeadForm';
import { Photo } from '../Photo';
import { WhatsAppButton } from '../WhatsAppButton';
import styles from './Contact.module.css';

export function Contact({ index }: { readonly index: string }) {
  const contact = CONTENT.contact;
  const footer = CONTENT.footer;
  return (
    <section id="contato" className={styles.section} aria-labelledby="contato-title">
      <div className={styles.backdrop} aria-hidden="true">
        <Photo image={{ ...contact.image, alt: '' }} />
      </div>
      <div className={`wrap ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span>{index}</span>
            {contact.eyebrow}
          </p>
          <h2 id="contato-title" className={styles.title}>
            <Emphasis text={contact.title} />
          </h2>
          {contact.intro ? <p className={styles.intro}>{contact.intro}</p> : null}
          <WhatsAppButton cta={contact.direct} trackId="contato" size="lg" className={styles.direct} />
          <dl className={styles.info}>
            <div>
              <dt>Endereço</dt>
              <dd>
                {footer.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Horários</dt>
              <dd>
                {footer.hours.map((row) => (
                  <span key={row.days}>
                    {row.days}: {row.time}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
