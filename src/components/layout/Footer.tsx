import { footerLinks } from '@/data/navigation';
import { site } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>{site.copyright}</div>
      <div className={styles.links}>
        {footerLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
