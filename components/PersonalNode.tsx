import styles from './PersonalNode.module.css';

export function PersonalNode() {
  return (
    <section id="personal-node" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Your node on the network</span>
        </div>
        <h2 className={styles.headline}>A personal node.</h2>
        <p className={styles.lead}>
          Your XDomain runs on a personal node — a device or service that acts on your behalf.
          You control it. It speaks for you. It's not a rental from a provider.
        </p>

        <div className={styles.nodeViz}>
          <div className={styles.node}>
            <div className={styles.nodeCore}>
              <span className={styles.nodeIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" fill="var(--accent-cyan)"/>
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className={styles.nodeLabel}>Your XDomain</span>
            </div>
            <div className={styles.nodeConnections}>
              <div className={styles.connection}>
                <span className={styles.connLabel}>Phone</span>
                <span className={styles.connLine}></span>
              </div>
              <div className={styles.connection}>
                <span className={styles.connLabel}>Computer</span>
                <span className={styles.connLine}></span>
              </div>
              <div className={styles.connection}>
                <span className={styles.connLabel}>Watch</span>
                <span className={styles.connLine}></span>
              </div>
              <div className={styles.connection}>
                <span className={styles.connLabel}>Future devices</span>
                <span className={styles.connLine}></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.explain}>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>Today</span>
            <p>Your accounts live on other people's servers. When the provider changes terms, shuts down, or bans you, you lose everything.</p>
          </div>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XDomain</span>
            <p>Your personal node is yours. It can run anywhere — your home, a service you trust, or multiple places at once. You control it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}