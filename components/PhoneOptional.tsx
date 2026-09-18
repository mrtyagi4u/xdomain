import styles from './PhoneOptional.module.css';

export function PhoneOptional() {
  return (
    <section id="phone-optional" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">A phone number is not required</span>
        </div>
        <h2 className={styles.headline}>Phone number optional.</h2>
        <p className={styles.lead}>
          In an XDomain world, a phone number is just one way to reach someone — not a requirement for existence.
          You can be fully present online without ever having a phone number.
        </p>

        <div className={styles.scenarios}>
          <div className={styles.scenario}>
            <span className={styles.scenarioIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.scenarioLabel}>Children</span>
            <p className={styles.scenarioDesc}>Kids can have an XDomain for safe, parent-managed communication without needing a phone number.</p>
          </div>
          <div className={styles.scenario}>
            <span className={styles.scenarioIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 8h8M8 12h8M8 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.scenarioLabel}>Privacy</span>
            <p className={styles.scenarioDesc}>People who value privacy can exist online without tying their identity to a phone number.</p>
          </div>
          <div className={styles.scenario}>
            <span className={styles.scenarioIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.scenarioLabel}>Global access</span>
            <p className={styles.scenarioDesc}>People in areas without reliable phone infrastructure can still have a full Internet identity.</p>
          </div>
        </div>

        <div className={styles.callout}>
          <span className={styles.calloutIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12l2 2 4-4" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <p>Phone numbers can still be one of many reach methods — just not the only way to exist online.</p>
        </div>
      </div>
    </section>
  );
}