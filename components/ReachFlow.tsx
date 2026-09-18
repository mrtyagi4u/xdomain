'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ReachFlow.module.css';

type Transport = 'Wi-Fi' | 'Fiber' | '5G' | 'Satellite';

const transports: Transport[] = ['Wi-Fi', 'Fiber', '5G', 'Satellite'];

export function ReachFlow() {
  const [transport, setTransport] = useState<Transport>('Wi-Fi');
  const [showToday, setShowToday] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            containerRef.current?.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(containerRef.current!);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reach" className={styles.root} ref={containerRef}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Reach the person, not their provider</span>
        </div>
        <h2 className={styles.headline}>Reach the person. Not the provider.</h2>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${showToday ? styles.active : ''}`}
            onClick={() => setShowToday(true)}
            aria-selected={showToday}
          >
            Today
          </button>
          <button
            className={`${styles.tab} ${!showToday ? styles.active : ''}`}
            onClick={() => setShowToday(false)}
            aria-selected={!showToday}
          >
            XDomain
          </button>
        </div>

        <div className={styles.transportSelector}>
          {transports.map((t) => (
            <button
              key={t}
              className={`${styles.transportBtn} ${transport === t ? styles.transportActive : ''}`}
              onClick={() => setTransport(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {showToday ? (
            <div className={styles.flow}>
              <div className={styles.step}>Bhaskar</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={styles.step}>Tushar's phone number</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={styles.step}>Carrier</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={styles.step}>Cellular network</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={`${styles.step} ${styles.targetPerson}`}>Tushar</div>
            </div>
          ) : (
            <div className={styles.flow}>
              <div className={styles.step}>Bhaskar</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrowCyan}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={`${styles.step} ${styles.xid}`}>Tushar's XID</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrowCyan}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={`${styles.step} ${styles.policy}`}>Reach policy</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrowCyan}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={`${styles.step} ${styles.device}`}>Available trusted device</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrowCyan}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
              <div className={`${styles.step} ${styles.targetPerson}`}>Tushar</div>
            </div>
          )}
        </div>

        <p className={styles.caption}>
          Wi-Fi Â· Fiber Â· 5G Â· Satellite Â· future networks â€” the transport can change while Tushar's identity stays unchanged.
        </p>
      </div>
    </section>
  );
}
