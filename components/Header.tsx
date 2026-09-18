'use client';

import { useState } from 'react';
import { Logo } from '@/components/icons/Logo';
import styles from './Header.module.css';

const links = [
  { href: '#reach', label: 'How it works' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#comparison', label: 'Compare' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#start" className={styles.brand}>
          <Logo size={28} />
          <span className={styles.wordmark}>XDomain</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="#capabilities" className={styles.primary}>Explore</a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barHidden : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barBottom : ''}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}