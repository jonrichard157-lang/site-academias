import { useEffect, useRef, useState } from 'react';
import { CONTENT, GYM, publicUrl } from '../config/gym';
import { useScrolled } from '../hooks/useScrolled';
import { WhatsAppButton } from './WhatsAppButton';
import styles from './SiteHeader.module.css';

const LOGO_HEIGHT = 36;

export function SiteHeader() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const logo = GYM.brand?.logo;
  const logoWidth = Math.round(LOGO_HEIGHT * (GYM.brand?.logoAspect ?? 1));

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = (): void => {
      if (window.matchMedia('(min-width: 960px)').matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}>
      <div className={styles.bar}>
        <a className={styles.brand} href="#topo" aria-label={`${GYM.name}, início da página`}>
          {logo ? <img src={publicUrl(logo)} alt="" width={logoWidth} height={LOGO_HEIGHT} /> : null}
          <span className={styles.wordmark} aria-hidden="true">
            {GYM.name}
          </span>
        </a>

        <nav className={styles.nav} aria-label="Seções da página">
          <ul className={styles.links}>
            {CONTENT.nav.map((item) => (
              <li key={item.href}>
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <WhatsAppButton cta={CONTENT.header.cta} trackId="header" icon={false} className={styles.cta} />
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.burger} aria-hidden="true" />
            <span className="visually-hidden">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      <nav id="menu-mobile" className={styles.panel} aria-label="Menu" hidden={!open}>
        <ul>
          {CONTENT.nav.map((item, index) => (
            <li key={item.href}>
              <a className={styles.panelLink} href={item.href} onClick={() => setOpen(false)}>
                <span className={styles.panelIndex}>{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <WhatsAppButton cta={CONTENT.header.cta} trackId="menu-mobile" size="lg" className={styles.panelCta} />
      </nav>
    </header>
  );
}
