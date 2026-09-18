import styles from './BuildableNow.module.css';

export function BuildableNow() {
  return (
    <section id="buildable" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">This is not science fiction</span>
        </div>
        <h2 className={styles.headline}>Buildable now.</h2>
        <p className={styles.lead}>
          Every piece of XDomain's vision can be built with today's technology. Cryptographic identifiers,
          policy engines, pairwise relationships, transport abstraction — these are all tractable problems.
        </p>

        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="var(--accent-cyan)" strokeWidth="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.pillarName}>Cryptographic IDs</span>
            <span className={styles.pillarDesc}>W3C DIDs, key pairs, verifiable ownership</span>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className={styles.pillarName}>Policy engines</span>
            <span className={styles.pillarDesc}>Rule evaluation, consent checks, access control</span>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="var(--accent-cyan)" strokeWidth="2"/>
                <path d="M8 12h8M12 8v8" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <span className={styles.pillarName}>Relationship graphs</span>
            <span className={styles.pillarDesc}>Private pairwise connections, consent-based</span>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className={styles.pillarName}>Transport abstraction</span>
            <span className={styles.pillarDesc}>HTTP, WebSockets, QUIC, anything that connects</span>
          </div>
        </div>

        <div className={styles.callout}>
          <p>The question is not whether we can build it. The question is whether we will.</p>
        </div>
      </div>
    </section>
  );
}