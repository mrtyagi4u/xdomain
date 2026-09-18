import styles from './IdentityRecovery.module.css';

export function IdentityRecovery() {
  return (
    <section id="recovery" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Recovery without a provider</span>
        </div>
        <h2 className={styles.headline}>Recover your identity, not your account.</h2>
        <p className={styles.lead}>
          When you lose access to your email or phone, today you lose your identity. With XDomain,
          recovery is a protocol — not a customer service ticket. Your trusted devices and relationships help you recover.
        </p>

        <div className={styles.flow}>
          <div className={styles.step}>
            <span className={styles.stepLabel}>You lose access</span>
            <span className={styles.stepDesc}>Phone breaks, email account locked</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={`${styles.step} ${styles.stepHighlight}`}>
            <span className={styles.stepLabel}>Recovery begins</span>
            <span className={styles.stepDesc}>Use a trusted device or contact</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={`${styles.step} ${styles.stepHighlight}`}>
            <span className={styles.stepLabel}>Verify</span>
            <span className={styles.stepDesc}>Multi-party or multi-device verification</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={`${styles.step} ${styles.stepFinal}`}>
            <span className={styles.stepLabel}>Identity restored</span>
            <span className={styles.stepDesc}>Same XID, all relationships intact</span>
          </div>
        </div>

        <div className={styles.recoveryMethods}>
          <div className={styles.method}>
            <span className={styles.methodIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 2v20M15 2v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.methodLabel}>Trusted device</span>
          </div>
          <div className={styles.method}>
            <span className={styles.methodIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.methodLabel}>Time-based recovery</span>
          </div>
          <div className={styles.method}>
            <span className={styles.methodIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.methodLabel}>Trusted contacts</span>
          </div>
        </div>
      </div>
    </section>
  );
}