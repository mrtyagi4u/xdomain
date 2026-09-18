'use client';

import styles from './Footer.module.css';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  return (
    <footer className={styles.root}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo size={26} />
            <span>XDomain</span>
          </div>
          <p className={styles.tagline}>A private Internet identity for communication.</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <div className={styles.group}>
            <div className={styles.groupTitle}>Product</div>
            <a href="#features">Capabilities</a>
            <a href="#reach">How it works</a>
            <a href="#comparison">Compare</a>
          </div>
          <div className={styles.group}>
            <div className={styles.groupTitle}>Learn</div>
            <a href="#faq">Questions</a>
            <a href="#any-network">Any network</a>
          </div>
        </nav>

        <p className={styles.note}>
          XDomain is an independent research project exploring provider-independent digital identity and communication. Third-party names are illustrative only.
        </p>

        <p className={styles.copy}>© {new Date().getFullYear()} XDomain.</p>
      </div>
    </footer>
  );
}