import { GYM, NAV_ITEMS, WHATSAPP_URL, publicUrl } from '../config/gym';
import { useScrolled } from '../hooks/useScrolled';
import { ButtonLink } from './ButtonLink';
import styles from './SiteHeader.module.css';

const LOGO_HEIGHT = 54;

export function SiteHeader() {
  const scrolled = useScrolled(24);
  const logo = GYM.brand?.logo;
  const logoWidth = Math.round(LOGO_HEIGHT * (GYM.brand?.logoAspect ?? 1));

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ''}`}>
      <a className={styles.brand} href="#topo" aria-label={`${GYM.name}, início da página`}>
        {logo ? (
          <img src={publicUrl(logo)} alt="" width={logoWidth} height={LOGO_HEIGHT} />
        ) : (
          <span className={styles.wordmark}>{GYM.name}</span>
        )}
      </a>
      <nav className={styles.nav} aria-label="Principal">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            className={styles.link}
            href={item.href}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {item.label}
          </a>
        ))}
        {WHATSAPP_URL ? (
          <ButtonLink href={WHATSAPP_URL} external>
            WhatsApp
          </ButtonLink>
        ) : null}
      </nav>
    </header>
  );
}
