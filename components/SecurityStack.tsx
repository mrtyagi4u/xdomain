import styles from './SecurityStack.module.css';

const layers = [
  { name: 'XID', desc: 'Cryptographic identity you own' },
  { name: 'Reach Policy', desc: 'Who may contact you' },
  { name: 'Relationship', desc: 'Private pairwise connection' },
  { name: 'Transport', desc: 'How the message travels' },
  { name: 'Endpoint', desc: 'Your personal node' },
];

export function SecurityStack() {
  return (
    <section id="security" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Layered security model</span>
        </div>
        <h2 className={styles.headline}>Security at every layer.</h2>
        <p className={styles.lead}>
          XDomain's security model works at multiple layers. Each layer provides its own protection,
          and the layers work together to create a secure communication system.
        </p>

        <div className={styles.stack}>
          {layers.map((layer, i) => (
            <div key={layer.name} className={`${styles.layer} ${i === 0 ? styles.layerTop : ''}`}>
              <span className={styles.layerName}>{layer.name}</span>
              <span className={styles.layerDesc}>{layer.desc}</span>
            </div>
          ))}
        </div>

        <div className={styles.caption}>
          From the bottom up: your endpoint is secured, the transport is just transport, relationships are private,
          reach policies enforce consent, and your XID is cryptographically yours.
        </div>
      </div>
    </section>
  );
}