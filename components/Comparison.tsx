import styles from './Comparison.module.css';

const rows = [
  { feature: 'Identity ownership', today: 'Provider-owned', xdomain: 'You own it' },
  { feature: 'Portability', today: 'Difficult', xdomain: 'Built-in' },
  { feature: 'Privacy', today: 'Provider can see', xdomain: 'Pairwise private' },
  { feature: 'Recovery', today: 'Customer support', xdomain: 'Protocol-based' },
  { feature: 'Communication', today: 'One app per mode', xdomain: 'Unified via XDomain' },
  { feature: 'Appointments', today: 'Share calendar', xdomain: 'Share slots only' },
  { feature: 'Network lock-in', today: 'Phone = carrier', xdomain: 'Network is transport' },
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
          A simple comparison of how things work today versus how they could work with XDomain.
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