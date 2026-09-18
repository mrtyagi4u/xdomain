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
          <span className={styles.kicker}>Communication without borders</span>
          <h1 className={styles.headline}>
            Tired of carrying two phones? Paying roaming fees? Getting spammed?
          </h1>
          <p className={styles.lead}>
            XDomain gives you one Internet identity that works everywhere. No phone number. No email address. No carrier lock-in. Just a single domain that lets you communicate directly with anyone — whether you're on WiFi, 5G, or traveling abroad.
          </p>

          <div className={styles.bullets}>
            <div className={styles.bulletItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.bulletIcon}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>No roaming charges ever</span>
            </div>
            <div className={styles.bulletItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.bulletIcon}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>No spam, no unwanted messages</span>
            </div>
            <div className={styles.bulletItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.bulletIcon}>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Your identity, your rules</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#features" className={styles.primary}>See how it works</a>
            <a href="#architecture" className={styles.secondary}>Technical details</a>
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

export const dynamic = 'force-static';