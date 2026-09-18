import styles from './PermissionBeforePayload.module.css';

export function PermissionBeforePayload() {
  return (
    <section id="permission" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Consent before content</span>
        </div>
        <h2 className={styles.headline}>Permission before payload.</h2>
        <p className={styles.lead}>
          Your XDomain never accepts incoming communication without first evaluating whether the sender has your permission.
          The payload only arrives after the policy check passes.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardTag}>Today</span>
            <p className={styles.cardText}>
              Your inbox receives everything. Spam, scams, unwanted newsletters — all arrive before you can act.
              You clean up after the fact.
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTag}>XDomain</span>
            <p className={styles.cardText}>
              Your domain checks the sender's relationship, reputation, and your declared preferences first.
              Only approved communication reaches you.
            </p>
          </div>
        </div>

        <div className={styles.flow}>
          <div className={styles.step}>
            <span className={styles.stepLabel}>Sender</span>
            <span className={styles.stepDesc}>Wants to reach you</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={`${styles.step} ${styles.stepHighlight}`}>
            <span className={styles.stepLabel}>Your XDomain</span>
            <span className={styles.stepDesc}>Evaluates reach policy</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={styles.step}>
            <span className={styles.stepLabel}>Decision</span>
            <span className={styles.stepDesc}>Allow · Verify · Decline</span>
          </div>
        </div>
      </div>
    </section>
  );
}