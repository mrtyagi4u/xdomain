'use client';

import { useState } from 'react';
import styles from './PersonalDomain.module.css';

const items = [
  {
    label: 'Identity',
    explain: 'Who you are cryptographically. Your XID is the underlying machine-readable identifier your domain is built around.',
  },
  {
    label: 'Reach policy',
    explain: 'Who may contact you and under which conditions. Your domain decides whether a request can proceed, requires verification, or is declined.',
  },
  {
    label: 'Trusted devices',
    explain: 'Which devices may receive communication or act on your behalf. Your identity is not tied to one phone or one account.',
  },
  {
    label: 'Relationships',
    explain: 'Private connections established after consent. Once both parties agree, a dedicated relationship forms instead of a one-way public identifier.',
  },
  {
    label: 'Appointments',
    explain: 'Availability and scheduling without exposing a whole calendar. Your domain responds with possible slots, not your entire schedule.',
  },
  {
    label: 'Capabilities',
    explain: 'Things other parties may request from your domain. Text, meeting, file, verification, and more can be exposed selectively.',
  },
];

export function PersonalDomain() {
  const [open, setOpen] = useState<string | null>('Identity');

  return (
    <section id="architecture" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Core object</span>
        </div>
        <h2 className={styles.headline}>Your own domain on the Internet.</h2>
        <p className={styles.sub}>Not a website domain. A personal domain.</p>

        <div className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.cardTitle}>Tushar's XDomain</span>
            <span className={styles.cardSub}>One identity, many capabilities</span>
          </div>

          <div className={styles.items}>
            {items.map((item) => (
              <button
                key={item.label}
                className={`${styles.item} ${open === item.label ? styles.open : ''}`}
                onClick={() => setOpen(open === item.label ? null : item.label)}
                aria-expanded={open === item.label}
                aria-controls={`panel-${item.label}`}
              >
                <div className={styles.itemHead}>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <svg
                    className={`${styles.chevron} ${open === item.label ? styles.chevronOpen : ''}`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
                <div id={`panel-${item.label}`} className={styles.panel}>
                  <p className={styles.panelText}>{item.explain}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
