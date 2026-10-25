import { CONTENT, GYM, publicUrl } from '../config/gym';
import styles from './SiteFooter.module.css';

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  const footer = CONTENT.footer;
  const logo = GYM.brand?.logo;

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brand}>
          {logo ? <img src={publicUrl(logo)} alt="" width={46} height={48} loading="lazy" /> : null}
          <p className={styles.name}>{GYM.name}</p>
        </div>

        <nav aria-label="Rodapé" className={styles.col}>
          <p className={styles.heading}>Navegue</p>
          <ul>
            {CONTENT.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#contato">Agendar visita</a>
            </li>
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.heading}>Endereço</p>
          <address>
            {footer.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          {GYM.contact?.instagram ? (
            <a className={styles.social} href={GYM.contact.instagram} target="_blank" rel="noopener noreferrer">
              Instagram<span className="visually-hidden"> (abre em nova aba)</span>
            </a>
          ) : null}
        </div>

        <div className={styles.col}>
          <p className={styles.heading}>Horários</p>
          <ul>
            {footer.hours.map((row) => (
              <li key={row.days} className={styles.hour}>
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`wrap ${styles.legal}`}>
        <p>
          © {YEAR} {GYM.name}
          {footer.disclaimer ? ` · ${footer.disclaimer}` : ''}
        </p>
        {footer.credit ? <p>{footer.credit}</p> : null}
      </div>
    </footer>
  );
}
