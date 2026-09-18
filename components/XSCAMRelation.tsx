import styles from './XSCAMRelation.module.css';

export function XSCAMRelation() {
  return (
    <section id="xscam" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Related research</span>
        </div>
        <h2 className={styles.headline}>XSCAM and XDomain.</h2>
        <p className={styles.lead}>
          XSCAM is a related research concept exploring the intersection of identity, communication, and trust.
          Both XSCAM and XDomain share a vision of user-owned digital identity.
        </p>

        <div className={styles.relation}>
          <div className={styles.circle}>
            <span className={styles.circleLabel}>XDomain</span>
            <span className={styles.circleDesc}>Personal identity + reach</span>
          </div>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" className={styles.connector}>
            <path d="M20 5v30M5 20h30" stroke="var(--line)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className={styles.circle}>
            <span className={styles.circleLabel}>XSCAM</span>
            <span className={styles.circleDesc}>Communication architecture</span>
          </div>
        </div>

        <div className={styles.explain}>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XDomain</span>
            <p>Focuses on the identity layer: XIDs, reach policies, personal domains, and how people establish and maintain relationships.</p>
          </div>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XSCAM</span>
            <p>Explores the broader communication architecture: how messages flow, how trust is established, and how systems interoperate.</p>
          </div>
        </div>

        <div className={styles.link}>
          <a
            href="https://www.xscam.pro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            Explore XSCAM
          </a>
        </div>
      </div>
    </section>
  );
}