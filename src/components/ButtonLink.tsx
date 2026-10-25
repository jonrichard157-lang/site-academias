import type { ReactNode } from 'react';
import { trackCta } from '../lib/links';
import { ArrowIcon, WhatsAppIcon } from './Icons';
import styles from './ButtonLink.module.css';

interface ButtonLinkProps {
  readonly href: string;
  readonly variant?: 'solid' | 'outline' | 'dark' | 'text';
  readonly size?: 'md' | 'lg';
  readonly icon?: 'whatsapp' | 'arrow';
  readonly external?: boolean;
  /** Identificador do CTA, usado em data-cta e no evento do Google Tag Manager. */
  readonly trackId?: string;
  readonly className?: string;
  readonly children: ReactNode;
}

export function ButtonLink({
  href,
  variant = 'solid',
  size = 'md',
  icon,
  external = false,
  trackId,
  className = '',
  children,
}: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      href={href}
      data-cta={trackId}
      onClick={trackId ? () => trackCta(trackId) : undefined}
      {...externalProps}
    >
      {icon === 'whatsapp' ? <WhatsAppIcon className={styles.icon} /> : null}
      <span>{children}</span>
      {icon === 'arrow' ? <ArrowIcon className={styles.icon} /> : null}
      {external ? <span className="visually-hidden"> (abre em nova aba)</span> : null}
    </a>
  );
}
