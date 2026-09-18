import styles from './AnyNetwork.module.css';

const networks = [
  { name: 'Wi-Fi', desc: 'Home, office, cafes' },
  { name: 'Fiber', desc: 'Wired broadband' },
  { name: '5G', desc: 'Mobile networks' },
  { name: 'Satellite', desc: 'Remote areas' },
  { name: 'Future', desc: ' whatever comes next' },
];

export function AnyNetwork() {
  return (
    <section id="any-network" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Transport is a choice, not an identity</span>
        </div>
        <h2 className={styles.headline}>Any network.</h2>
        <p className={styles.lead}>
          Your XID doesn't care how you connect. Wi-Fi, fiber, 5G, satellite, or whatever network comes next — 
          your identity stays the same. The transport is interchangeable.
        </p>

        <div className={styles.networksGrid}>
          {networks.map((net) => (
            <div key={net.name} className={styles.networkCard}>
              <span className={styles.networkName}>{net.name}</span>
              <span className={styles.networkDesc}>{net.desc}</span>
            </div>
          ))}
        </div>

        <div className={styles.explain}>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>Today</span>
            <p>Your phone number is tied to a carrier. Your email is tied to a provider. Change providers, and you lose your identity.</p>
          </div>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XDomain</span>
            <p>Your XID is independent of the transport. Switch networks, move countries, change providers — your identity remains.</p>
          </div>
        </div>
      </div>
    </section>
  );
}