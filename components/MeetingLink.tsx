import styles from './MeetingLink.module.css';

export function MeetingLink() {
  return (
    <section id="meetings" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">One link, any platform</span>
        </div>
        <h2 className={styles.headline}>A meeting link that's yours, not Zoom's.</h2>
        <p className={styles.lead}>
          When someone wants to meet with you, your XDomain generates a meeting link that works across
          whichever video platform you prefer. You're not locked into a single provider's meeting system.
        </p>

        <div className={styles.platforms}>
          <div className={styles.platform}>
            <span className={styles.platformIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.platformName}>Zoom</span>
          </div>
          <div className={styles.platform}>
            <span className={styles.platformIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.platformName}>Meet</span>
          </div>
          <div className={styles.platform}>
            <span className={styles.platformIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.platformName}>Teams</span>
          </div>
          <div className={styles.platform}>
            <span className={styles.platformIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </span>
            <span className={styles.platformName}>Any future platform</span>
          </div>
        </div>

        <div className={styles.explain}>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>Today</span>
            <p>You send a Zoom link. Or a Meet link. Or a Teams link. The other person needs the right app. And you're tied to that platform.</p>
          </div>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XDomain</span>
            <p>Your domain generates a meeting invitation. The platform is a transport choice, negotiated at connection time. Your identity stays constant.</p>
          </div>
        </div>

        <div className={styles.linkBox}>
          <span className={styles.linkLabel}>Your meeting link could look like</span>
          <code className={styles.linkCode}>meeting://tushar.xdomain/x7k2</code>
        </div>
      </div>
    </section>
  );
}