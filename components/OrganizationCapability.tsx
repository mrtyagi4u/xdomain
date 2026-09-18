import styles from './OrganizationCapability.module.css';

const capabilities = [
  { name: 'Text', desc: 'Send and receive messages' },
  { name: 'Call', desc: 'Voice or video calls' },
  { name: 'Meet', desc: 'Schedule and join meetings' },
  { name: 'Book', desc: 'Request appointments' },
  { name: 'Files', desc: 'Exchange documents' },
  { name: 'Verify', desc: 'Prove identity or attributes' },
];

export function OrganizationCapability() {
  return (
    <section id="capabilities" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">What your domain can do</span>
        </div>
        <h2 className={styles.headline}>Your domain has capabilities.</h2>
        <p className={styles.lead}>
          An XDomain isn't just an address. It's a set of capabilities that other parties can discover and request.
          You expose what you're willing to offer, and hide the rest.
        </p>

        <div className={styles.grid}>
          {capabilities.map((cap) => (
            <div key={cap.name} className={styles.card}>
              <span className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="var(--accent-cyan)" strokeWidth="2"/>
                  <path d="M3 9h18M9 3v18" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <span className={styles.cardName}>{cap.name}</span>
              <span className={styles.cardDesc}>{cap.desc}</span>
            </div>
          ))}
        </div>

        <div className={styles.explain}>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>Today</span>
            <p>Each service has its own API, its own permissions, its own way of working. You manage access separately everywhere.</p>
          </div>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XDomain</span>
            <p>Capabilities are declared once, on your domain. Others discover what you can do and request access through a consistent interface.</p>
          </div>
        </div>
      </div>
    </section>
  );
}