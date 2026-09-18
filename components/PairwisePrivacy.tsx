import styles from './PairwisePrivacy.module.css';

export function PairwisePrivacy() {
  return (
    <section id="privacy" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">One relationship at a time</span>
        </div>
        <h2 className={styles.headline}>Pairwise privacy.</h2>
        <p className={styles.lead}>
          Every connection you form through your XDomain is private between the two parties.
          There is no central directory of who you know, and no third party can map your relationships.
        </p>

        <div className={styles.explain}>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>Today</span>
            <p>Your contacts live on platforms. They can see who else you know, what groups you're in, and often share your data with partners.</p>
          </div>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XDomain</span>
            <p>Each relationship is a private agreement between two XDomains. Neither party can expose the other's connections without consent.</p>
          </div>
        </div>

        <div className={styles.viz}>
          <svg viewBox="0 0 400 200" fill="none" className={styles.svg} aria-hidden="true">
            <circle cx="200" cy="100" r="30" className={styles.you} />
            <text x="200" y="104" textAnchor="middle" fontSize="10" className={styles.youLabel}>You</text>
            <circle cx="80" cy="60" r="20" className={styles.them} />
            <text x="80" y="64" textAnchor="middle" fontSize="9" className={styles.themLabel}>Alice</text>
            <circle cx="320" cy="60" r="20" className={styles.them} />
            <text x="320" y="64" textAnchor="middle" fontSize="9" className={styles.themLabel}>Bob</text>
            <circle cx="80" cy="140" r="20" className={styles.them} />
            <text x="80" y="144" textAnchor="middle" fontSize="9" className={styles.themLabel}>Carol</text>
            <circle cx="320" cy="140" r="20" className={styles.them} />
            <text x="320" y="144" textAnchor="middle" fontSize="9" className={styles.themLabel}>Dave</text>
            <line x1="80" y1="60" x2="200" y2="100" stroke="var(--accent-cyan)" strokeWidth="2" strokeDasharray="4 4" className={styles.line} />
            <line x1="320" y1="60" x2="200" y2="100" stroke="var(--accent-cyan)" strokeWidth="2" strokeDasharray="4 4" className={styles.line} />
            <line x1="80" y1="140" x2="200" y2="100" stroke="var(--accent-cyan)" strokeWidth="2" strokeDasharray="4 4" className={styles.line} />
            <line x1="320" y1="140" x2="200" y2="100" stroke="var(--accent-cyan)" strokeWidth="2" strokeDasharray="4 4" className={styles.line} />
          </svg>
          <p className={styles.vizCaption}>
            Each line is a private, pairwise relationship. No one sees your other connections.
          </p>
        </div>
      </div>
    </section>
  );
}