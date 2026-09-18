'use client';

import { useState } from 'react';
import styles from './Faq.module.css';

const faqs = [
  {
    q: 'How is this different from an email address or phone number?',
    a: 'Email addresses and phone numbers are rented from a provider — they can be taken away, surveilled, or held hostage when you switch carriers. Your XDomain is cryptographically yours: it works across every network and no provider sits between you and the person reaching you.',
  },
  {
    q: 'Do I still need a phone number?',
    a: 'No. Your XDomain is the identity people reach you on. A phone number becomes optional — useful only as a transport, never as who you are.',
  },
  {
    q: 'Will I stop paying roaming charges?',
    a: 'Yes. Roaming exists because a carrier owns your number and charges for moving between networks. When your identity is not tied to a carrier, connecting over Wi-Fi, 5G or satellite abroad is just another transport.',
  },
  {
    q: 'How do I stop unwanted messages and spam?',
    a: 'Nothing reaches you until you allow it. Every request arrives as a permission request first — you approve, verify, or decline it. Unknown senders cannot deliver content to you.',
  },
  {
    q: 'Can I still reach people who do not have XDomain?',
    a: 'Yes. During migration your XDomain can bridge to phone numbers and email addresses, so you can communicate with everyone before they move across.',
  },
  {
    q: 'Do I lose my calendar or contacts when I book a meeting?',
    a: 'No. Appointments share only the slots you choose to offer, and relationships stay private between the two parties. No platform sees your wider network.',
  },
  {
    q: 'What if I lose my phone?',
    a: 'You recover your identity, not an account. Trusted devices and trusted contacts verify you, then your same XID is restored with all relationships intact.',
  },
  {
    q: 'Is XDomain a product I can sign up for today?',
    a: 'Not yet — XDomain is an independent research project mapping out what a provider-independent identity layer could look like. Everything shown here is buildable with today\u2019s technology, and the goal is a neutral layer anyone can build on.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.root}>
      <div className="wrap">
        <div className={styles.header}>
          <span className={styles.kicker}>Straight answers</span>
          <h2 className={styles.headline}>Common questions.</h2>
          <p className={styles.lead}>
            The short version of what changes for you — and what you stop paying for.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div className={styles.answerWrap}>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}