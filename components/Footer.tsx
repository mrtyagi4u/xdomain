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
          <p className={styles.tagline}>One identity for everything. No carriers, no spam, no borders.</p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          <div className={styles.group}>
            <div className={styles.groupTitle}>Product</div>
            <a href="#capabilities">Capabilities</a>
            <a href="#reach">How it works</a>
            <a href="#comparison">Compare</a>
          </div>
          <div className={styles.group}>
            <div className={styles.groupTitle}>Learn</div>
            <a href="#why-addresses">Why six addresses?</a>
            <a href="#faq">Questions</a>
            <a href="#any-network">Any network</a>
            <a href="#why-xdomain">Why it matters</a>
          </div>
          <div className={styles.group}>
            <div className={styles.groupTitle}>Related</div>
            <a href="https://www.xscam.pro" target="_blank" rel="noopener noreferrer" className={styles.external}>XSCAM research ↗</a>
          </div>
        </nav>

        <p className={styles.note}>
          XDomain is an independent research project mapping out provider-independent digital identity. Not a product you can sign up for yet. Third-party names are illustrative only.
        </p>

        <p className={styles.copy}>© {new Date().getFullYear()} XDomain.</p>
      </div>
    </footer>
  );
}