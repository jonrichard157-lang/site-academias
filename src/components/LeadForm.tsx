import { useId, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { CONTENT, GYM, whatsappUrl } from '../config/gym';
import { EMPTY_LEAD, MESSAGE_MAX, buildLeadMessage, validateLead } from '../lib/lead';
import type { LeadErrors, LeadField, LeadValues } from '../lib/lead';
import { trackCta } from '../lib/links';
import { WhatsAppIcon } from './Icons';
import styles from './LeadForm.module.css';

/** Formulário opcional: valida os campos e abre o WhatsApp com a mensagem montada. Nada é enviado a um servidor. */
export function LeadForm() {
  const form = CONTENT.contact.form;
  const uid = useId();
  const [values, setValues] = useState<LeadValues>(EMPTY_LEAD);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  if (!whatsappUrl('')) return null;

  const fieldId = (field: LeadField): string => `${uid}-${field}`;
  const errorId = (field: LeadField): string => `${uid}-${field}-erro`;

  const update = (field: LeadField, value: string): void => {
    const next = { ...values, [field]: value };
    setValues(next);
    setSentUrl(null);
    if (submitted) setErrors(validateLead(next));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitted(true);
    const found = validateLead(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as LeadField[])[0];
    if (firstInvalid) {
      setSentUrl(null);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    const url = whatsappUrl(buildLeadMessage(GYM.name, values));
    if (!url) return;
    trackCta('formulario');
    setSentUrl(url);
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) window.location.href = url;
  };

  const errorList = (Object.entries(errors) as [LeadField, string][]).filter(([, message]) => message);

  const describedBy = (field: LeadField, extra?: string): string | undefined =>
    [errors[field] ? errorId(field) : null, extra].filter(Boolean).join(' ') || undefined;

  const choiceGroup = (field: 'goal' | 'period', legend: string, options: readonly string[]) => (
    <fieldset
      className={styles.group}
      id={fieldId(field)}
      data-invalid={errors[field] ? true : undefined}
      aria-describedby={describedBy(field)}
    >
      <legend className={styles.label}>
        {legend} <span aria-hidden="true">*</span>
      </legend>
      <div className={styles.chips}>
        {options.map((option) => (
          <label key={option} className={styles.chip}>
            <input
              type="radio"
              name={`${uid}-${field}`}
              value={option}
              checked={values[field] === option}
              onChange={() => update(field, option)}
              required
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {errors[field] ? (
        <p className={styles.error} id={errorId(field)}>
          {errors[field]}
        </p>
      ) : null}
    </fieldset>
  );

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-titulo`}>
      <h3 id={`${uid}-titulo`} className={styles.title}>
        {form.title}
      </h3>
      <p className={styles.hint}>Campos com * são obrigatórios.</p>

      {errorList.length > 0 ? (
        <div className={styles.summary} ref={summaryRef} tabIndex={-1} role="alert">
          <p>Revise {errorList.length === 1 ? 'o campo abaixo' : 'os campos abaixo'}:</p>
          <ul>
            {errorList.map(([field, message]) => (
              <li key={field}>
                <a href={`#${fieldId(field)}`}>{message}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId('name')}>
          Seu nome <span aria-hidden="true">*</span>
        </label>
        <input
          id={fieldId('name')}
          className={styles.input}
          type="text"
          autoComplete="given-name"
          value={values.name}
          onChange={(event) => update('name', event.target.value)}
          onBlur={() => submitted && setErrors(validateLead(values))}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={describedBy('name')}
          required
        />
        {errors.name ? (
          <p className={styles.error} id={errorId('name')}>
            {errors.name}
          </p>
        ) : null}
      </div>

      {choiceGroup('goal', 'Seu objetivo', form.goals)}
      {choiceGroup('period', 'Melhor período para a visita', form.periods)}

      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId('message')}>
          Mensagem <span className={styles.optional}>(opcional)</span>
        </label>
        <textarea
          id={fieldId('message')}
          className={`${styles.input} ${styles.textarea}`}
          rows={3}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy('message', `${uid}-contador`)}
        />
        <p className={styles.counter} id={`${uid}-contador`}>
          {values.message.length}/{MESSAGE_MAX}
        </p>
        {errors.message ? (
          <p className={styles.error} id={errorId('message')}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className={styles.submit}>
        <WhatsAppIcon />
        {form.submitLabel}
        <span className="visually-hidden"> (abre em nova aba)</span>
      </button>
      <p className={styles.privacy}>{form.privacyNote}</p>

      <div aria-live="polite" className={styles.status}>
        {sentUrl ? (
          <p>
            Abrimos o WhatsApp com sua mensagem.{' '}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer">
              Não abriu? Toque aqui.
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}
