import type { ReactNode } from 'react';
import styles from './ButtonLink.module.css';

interface ButtonLinkProps {
  readonly href: string;
  readonly variant?: 'solid' | 'outline';
  readonly external?: boolean;
  readonly children: ReactNode;
}

export function ButtonLink({ href, variant = 'solid', external = false, children }: ButtonLinkProps) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={`${styles.button} ${styles[variant]}`} href={href} {...externalProps}>
      {children}
    </a>
  );
}
