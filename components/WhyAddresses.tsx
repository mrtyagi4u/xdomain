import styles from './WhyAddresses.module.css';

export function WhyAddresses() {
  return (
    <section id="addresses" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Fragmented identity</span>
        </div>
        <h2 className={styles.headline}>Why does one person need six addresses to exist online?</h2>
        <p className={styles.lead}>
          These systems were built at different times for different networks. The result is fragmented identity.
          Most of these identifiers are not truly owned by the person. Providers usually sit between you and the person trying to reach you.
        </p>

        <div className={styles.tods}>
          <div className={styles.todItem}>
            <span className={styles.tag}>Email</span>
            <div className={styles.flow}>
              <div className={styles.step}>Person</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
              <div className={styles.step}>Email provider</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
              <div className={styles.step}>Email address</div>
            </div>
          </div>
          <div className={styles.todItem}>
            <span className={styles.tag}>Phone</span>
            <div className={styles.flow}>
              <div className={styles.step}>Person</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
              <div className={styles.step}>Telecom</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
              <div className={styles.step}>Phone number</div>
            </div>
          </div>
          <div className={styles.todItem}>
            <span className={styles.tag}>Platform</span>
            <div className={styles.flow}>
              <div className={styles.step}>Person</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
              <div className={styles.step}>Platform</div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
              <div className={styles.step}>Username</div>
            </div>
          </div>
        </div>

        <div className={styles.todCaption}>Today, the provider often owns the identifier.</div>

        <div className={styles.after}>
          <div className={styles.afterFlow}>
            <div className={`${styles.step} ${styles.stepPerson}`}>Person</div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrowCyan}><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/></svg>
            <div className={`${styles.step} ${styles.stepXid}`}>XID</div>
          </div>
          <div className={styles.afterCaption}>
            Providers become transport choices, not identity owners.
          </div>
        </div>
      </div>
    </section>
  );
}
