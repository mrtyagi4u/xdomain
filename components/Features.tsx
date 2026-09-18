'use client';

import { useState } from 'react';
import styles from './Features.module.css';

const featureCategories = [
  {
    title: 'Identity',
    color: 'var(--accent-cyan)',
    features: [
      {
        title: 'One XID per person',
        desc: 'A single, cryptographically-owned identity. Not rented from a provider. Yours to keep, yours to move, yours to recover.',
      },
      {
        title: 'Your domain, your rules',
        desc: 'Decide who can contact you. Set reach policies. Approve, verify, or decline requests on your terms.',
      },
      {
        title: 'Trusted devices',
        desc: 'Works across your phone, computer, watch, and any future device. Not locked to one screen.',
      },
    ],
  },
  {
    title: 'Communication',
    color: 'var(--accent-green)',
    features: [
      {
        title: 'Text & call anyone',
        desc: 'Send messages and make calls through your XDomain. Wi-Fi, fiber, 5G, or satellite — the transport is a detail.',
      },
      {
        title: 'Meet without the link hassle',
        desc: 'Generate meeting invitations that work across any video platform. Your identity stays constant.',
      },
      {
        title: 'File sharing, simplified',
        desc: 'Exchange documents securely. One relationship, one place for files — not scattered across cloud drives.',
      },
    ],
  },
  {
    title: 'Control',
    color: 'var(--accent-violet)',
    features: [
      {
        title: 'Appointments without calendar sharing',
        desc: 'Share available slots, not your entire calendar. Others pick a time. Privacy preserved.',
      },
      {
        title: 'Recovery by design',
        desc: 'Lost your device? Recovered through trusted contacts and devices — not a customer support ticket.',
      },
      {
        title: 'Pairwise privacy',
        desc: 'Every connection is private between two people. No one can map your relationships without consent.',
      },
    ],
  },
  {
    title: 'Future',
    color: 'var(--accent-amber)',
    features: [
      {
        title: 'Identity verification',
        desc: 'Prove who you are without revealing everything. Selective disclosure of attributes.',
      },
      {
        title: 'Professional capabilities',
        desc: 'Offer services through your domain: consulting, creative work, expertise. Your reputation travels with you.',
      },
      {
        title: 'Interoperable ecosystem',
        desc: 'Works with existing systems during migration. Builds toward a future where identity is yours, not rented.',
      },
    ],
  },
];

export function Features() {
  const [activeCategory, setActiveCategory] = useState<string>(featureCategories[0].title);

  const activeFeatures = featureCategories.find(f => f.title === activeCategory)?.features || [];

  return (
    <section id="features" className={styles.root}>
      <div className="wrap">
        <div className={styles.header}>
          <span className={styles.kicker}>Everything your identity can do</span>
          <h2 className={styles.headline}>Features & capabilities.</h2>
          <p className={styles.lead}>
            XDomain isn&apos;t just an address. It&apos;s a complete identity system with capabilities you control.
            Here&apos;s what your domain can do today — and where it&apos;s headed.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <nav className={styles.nav} aria-label="Feature categories">
              {featureCategories.map((cat) => (
                <button
                  key={cat.title}
                  className={`${styles.navItem} ${activeCategory === cat.title ? styles.navActive : ''}`}
                  onClick={() => setActiveCategory(cat.title)}
                  style={{ '--cat-color': cat.color } as React.CSSProperties}
                >
                  <span className={styles.navTitle}>{cat.title}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className={styles.content}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryTitle} style={{ color: featureCategories.find(f => f.title === activeCategory)?.color }}>
                {activeCategory}
              </span>
            </div>

            <div className={styles.grid}>
              {activeFeatures.map((feature, i) => (
                <div key={feature.title} className={styles.card} style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <p className={styles.footerText}>
                This is a research project exploring what&apos;s possible. Each capability is buildable with today&apos;s technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}