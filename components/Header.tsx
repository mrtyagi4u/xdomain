'use client';

import { Logo } from '@/components/icons/Logo';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo size={30} />
          <span className={styles.wordmark}>XDomain</span>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <a href="#features" className={styles.link}>Features</a>
          <a href="#architecture" className={styles.link}>Architecture</a>
          <a href="#faq" className={styles.link}>FAQ</a>
        </nav>

        <div className={styles.actions}>
          <a href="#features" className={styles.primary}>Explore</a>
        </div>
      </div>
    </header>
  );
}