import styles from './Comparison.module.css';

const rows = [
  { feature: 'Who owns it', today: 'Provider rents it to you', xdomain: 'You own it for life' },
  { feature: 'Phone & email', today: 'Juggle both, forever', xdomain: 'Neither required' },
  { feature: 'Spam & scams', today: 'Arrive before you can act', xdomain: 'Blocked until you allow' },
  { feature: 'Moving & travel', today: 'New SIM, roaming bills', xdomain: 'Same identity, any network' },
  { feature: 'Meetings', today: 'Share your whole calendar', xdomain: 'Share slots only' },
  { feature: 'Lost phone', today: 'Beg customer support', xdomain: 'Recover via trusted contacts' },
  { feature: 'Who sees your network', today: 'Platforms map it', xdomain: 'Nobody but you two' },
];

export function Comparison() {
  return (
    <section id="comparison" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Side by side</span>
        </div>
        <h2 className={styles.headline}>Today vs. XDomain.</h2>
        <p className={styles.lead}>
          The same situations, side by side. Left is what you live with now — right is what changes.
        </p>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Feature</div>
            <div className={styles.headerCell}>Today</div>
            <div className={styles.headerCell}>XDomain</div>
          </div>
          {rows.map((row) => (
            <div key={row.feature} className={styles.tableRow}>
              <div className={styles.cell}>{row.feature}</div>
              <div className={`${styles.cell} ${styles.cellNegative}`}>{row.today}</div>
              <div className={`${styles.cell} ${styles.cellPositive}`}>{row.xdomain}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}