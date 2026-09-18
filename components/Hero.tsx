'use client';

import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';
import { HeroIdentityCollapse } from './HeroIdentityCollapse';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="start" className={styles.root} ref={sectionRef}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.textCol}>
          <span className={styles.kicker}>One person. One identity. Any network.</span>
          <h1 className={styles.headline}>
            One identity for everything. No carriers, no spam, no borders.
          </h1>
          <p className={styles.lead}>
            XDomain is a single Internet identity — yours, not your provider&apos;s. Reach anyone and be
            reached on your terms: no second phone abroad, no roaming bill shock, no spam folder
            roulette. One domain that works on Wi-Fi, 5G, or satellite.
          </p>

          <div className={styles.bullets}>
            <div className={styles.bulletItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.bulletIcon}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Yours, not your carrier&apos;s — keep it for life</span>
            </div>
            <div className={styles.bulletItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.bulletIcon}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Permission first — spam can&apos;t reach you</span>
            </div>
            <div className={styles.bulletItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.bulletIcon}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>You decide who can reach you</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#capabilities" className={styles.primary}>See what it can do</a>
            <a href="#comparison" className={styles.secondary}>Today vs. XDomain</a>
          </div>
        </div>

        <div className={styles.diagram}>
          <HeroIdentityCollapse />
          <figcaption className={styles.caption}>
            One person. One identity. Any network.
          </figcaption>
        </div>
      </div>
    </section>
  );
}