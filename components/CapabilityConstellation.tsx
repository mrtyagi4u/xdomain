import styles from './CapabilityConstellation.module.css';

const nodes = [
  { id: 'text', label: 'Text', x: 50, y: 40 },
  { id: 'call', label: 'Call', x: 150, y: 20 },
  { id: 'meet', label: 'Meet', x: 250, y: 40 },
  { id: 'book', label: 'Book', x: 350, y: 20 },
  { id: 'files', label: 'Files', x: 100, y: 100 },
  { id: 'verify', label: 'Verify', x: 300, y: 100 },
];

export function CapabilityConstellation() {
  return (
    <section id="constellation" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">A constellation of capabilities</span>
        </div>
        <h2 className={styles.headline}>One identity, many capabilities.</h2>
        <p className={styles.lead}>
          Your XDomain exposes a constellation of capabilities. Some you share publicly, some only with specific relationships.
          The constellation is yours to configure.
        </p>

        <div className={styles.viz}>
          <svg viewBox="0 0 400 140" fill="none" className={styles.svg} aria-hidden="true">
            {nodes.map((node, i) => (
              <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
                <circle r="18" fill="var(--surface)" stroke="var(--accent-cyan)" strokeWidth="2"/>
                <text x="0" y="4" textAnchor="middle" fontSize="11" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="var(--ink)" fontWeight="600">{node.label}</text>
              </g>
            ))}
            <circle cx="200" cy="70" r="8" fill="var(--accent-cyan)"/>
            <text x="200" y="74" textAnchor="middle" fontSize="8" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="white" fontWeight="600">XID</text>
          </svg>
        </div>

        <div className={styles.caption}>
          Each capability orbits your identity. You decide which ones are visible to whom.
        </div>
      </div>
    </section>
  );
}