import { CONTENT, GYM, whatsappUrl } from '../config/gym';
import { useNoneVisible } from '../hooks/useNoneVisible';
import { trackCta } from '../lib/links';
import { WhatsAppIcon } from './Icons';
import styles from './WhatsAppFloat.module.css';

const SECTIONS_WITH_CTA = ['topo', 'planos', 'contato'] as const;

/** Botão flutuante de WhatsApp. Fica escondido enquanto o topo, os planos ou o contato estão na tela. */
export function WhatsAppFloat() {
  const show = useNoneVisible(SECTIONS_WITH_CTA);
  const href = whatsappUrl(CONTENT.float.message);
  if (!href) return null;
  return (
    <a
      className={`${styles.float} ${show ? styles.visible : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${CONTENT.float.label} com a ${GYM.name} (abre em nova aba)`}
      aria-hidden={show ? undefined : true}
      tabIndex={show ? undefined : -1}
      data-cta="flutuante"
      onClick={() => trackCta('flutuante')}
    >
      <WhatsAppIcon className={styles.icon} />
      <span className={styles.label}>{CONTENT.float.label}</span>
    </a>
  );
}
