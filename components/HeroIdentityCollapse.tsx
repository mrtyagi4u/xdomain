'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './HeroIdentityCollapse.module.css';

const identities = [
  'tushar@gmail.com',
  '+1 306 XXX XXXX',
  'WhatsApp',
  'Zoom',
  'Calendly',
  'Microsoft',
  'Google',
  'Social usernames',
];

const capabilities = [
  'Text',
  'Call',
  'Meet',
  'Book',
  'Files',
  'Verify',
];

export function HeroIdentityCollapse() {
  const [phase, setPhase] = useState<'today' | 'collapse' | 'xdomain'>('today');
  const [focused, setFocused] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const sequence = async () => {
      setPhase('today');
      await sleep(80);
      setPhase('collapse');
      await sleep(700);
      setPhase('xdomain');
    };
    timerRef.current = window.setTimeout(sequence, 600);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className={styles.root} aria-label="Identity transformation">
      {phase === 'today' && (
        <div className={styles.today}>
          <span className={styles.tag}>TODAY</span>
          <div className={styles.stack}>
            {identities.map((id, i) => (
              <button
                key={id}
                className={`${styles.idCard} ${focused === id ? styles.focused : ''}`}
                onClick={() => setFocused(focused === id ? null : id)}
                onFocus={() => setFocused(id)}
                onBlur={() => setFocused(null)}
                aria-label={`Provider identity: ${id}`}
                tabIndex={0}
              >
                <span className={styles.idLabel}>{id}</span>
              </button>
            ))}
          </div>
          <div className={styles.target}>
            <span className={styles.targetLabel}>TUSHAR</span>
            <span className={styles.targetNote}>scattered across providers</span>
          </div>
          <svg
            className={styles.bullets}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6 L20 6" />
              <path d="M4 12 L20 12" />
              <path d="M4 18 L20 18" />
            </g>
          </svg>
        </div>
      )}

      {phase === 'collapse' && (
        <div className={styles.collapse} aria-hidden="true">
          <div className={styles.person}>
            <span>TUSHAR</span>
          </div>
          <svg
            className={styles.mergeArrows}
            width="200"
            height="60"
            viewBox="0 0 200 60"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 30 L80 30" />
              <path d="M120 30 L180 30" />
              <path d="M80 20 L100 30 L80 40" />
              <path d="M120 20 L100 30 L120 40" />
            </g>
          </svg>
        </div>
      )}

      {phase === 'xdomain' && (
        <div className={styles.xdomain}>
          <div className={styles.personRow}>
            <span className={styles.person}>TUSHAR</span>
            <span className={styles.xidStack}>
              <span className={styles.xidLabel}>XID</span>
              <span className={styles.xidValue}>7Q4M-9F2K-8X...</span>
            </span>
          </div>
          <div className={styles.capabilities}>
            {capabilities.map((c) => (
              <button
                key={c}
                className={`${styles.cap} ${focused === c ? styles.focused : ''}`}
                onClick={() => setFocused(focused === c ? null : c)}
                onFocus={() => setFocused(c)}
                onBlur={() => setFocused(null)}
                aria-label={`Capability: ${c}`}
                tabIndex={0}
              >
                {c}
              </button>
            ))}
          </div>
          <div className={styles.networkRow}>
            <span className={styles.networkLabel}>Any network</span>
            <div className={styles.networks}>
              {['Wi-Fi', 'Fiber', 'Mobile', 'Satellite'].map((n) => (
                <span key={n} className={styles.netChip}>{n}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <p className={styles.hint}>Hover or focus a card to inspect it.</p>
    </div>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
