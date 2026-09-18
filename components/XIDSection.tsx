import styles from './XIDSection.module.css';

export function XIDSection() {
  return (
    <section id="xid" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Underlying identity</span>
        </div>
        <h2 className={styles.headline}>Every XDomain begins with an XID.</h2>
        <p className={styles.lead}>
          An XID is the underlying machine-readable identity. It should ultimately be based on cryptographic
          ownership rather than a rented domain, phone number or email account.
        </p>

        <div className={styles.identView}>
          <div className={styles.card}>
            <span className={styles.cardTag}>XID</span>
            <span className={styles.code}>7Q4M-9F2K-8X…</span>
            <span className={styles.cardNote}>Conceptual example · not a finalized protocol format</span>
          </div>
        </div>

        <div className={styles.divider}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 12h14"/>
          </svg>
        </div>

        <div className={styles.vision}>
          <div className={styles.card}>
            <span className={styles.cardTag}>Machine sees</span>
            <span className={styles.code}>7Q4M-9F2K-8X…</span>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M5 12h14"/>
          </svg>
          <div className={styles.card}>
            <span className={styles.cardTag}>Human sees</span>
            <span className={styles.name}>Tushar</span>
          </div>
        </div>

        <p className={styles.explain}>
          The cryptographic identifier is globally unique. The human-friendly name does not necessarily need to be globally unique.
        </p>

        <div className={styles.exchange}>
          <span className={styles.exchangeTag}>People could exchange identity using</span>
          <div className={styles.chips}>
            {['QR', 'NFC', 'Nearby', 'Invitation', 'Contact card', 'Existing communication during migration'].map((c) => (
              <span key={c} className={styles.chip}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
