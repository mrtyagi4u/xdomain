import styles from './CommonsDiagram.module.css';

export function CommonsDiagram() {
  return (
    <section id="commons" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Shared infrastructure, personal control</span>
        </div>
        <h2 className={styles.headline}>The commons, with personal sovereignty.</h2>
        <p className={styles.lead}>
          XDomain doesn't mean everyone runs everything alone. Transport, routing, discovery — these can be shared infrastructure.
          What's personal is your identity, your policy, your relationships.
        </p>

        <div className={styles.viz}>
          <svg viewBox="0 0 600 280" fill="none" className={styles.svg} aria-hidden="true">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="var(--line-soft)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="600" height="280" fill="url(#grid)"/>
            
            <circle cx="300" cy="140" r="50" className={styles.commons} />
            <text x="300" y="136" textAnchor="middle" fontSize="12" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="var(--ink)" fontWeight="600">Commons</text>
            <text x="300" y="152" textAnchor="middle" fontSize="10" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="var(--muted)">Transport · Routing · Discovery</text>
            
            <circle cx="100" cy="80" r="25" className={styles.personalNode} />
            <text x="100" y="84" textAnchor="middle" fontSize="9" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="white" fontWeight="600">Tushar</text>
            
            <circle cx="500" cy="80" r="25" className={styles.personalNode} />
            <text x="500" y="84" textAnchor="middle" fontSize="9" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="white" fontWeight="600">Bhaskar</text>
            
            <circle cx="100" cy="200" r="25" className={styles.personalNode} />
            <text x="100" y="204" textAnchor="middle" fontSize="9" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="white" fontWeight="600">Carol</text>
            
            <circle cx="500" cy="200" r="25" className={styles.personalNode} />
            <text x="500" y="204" textAnchor="middle" fontSize="9" fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fill="white" fontWeight="600">Dave</text>
            
            <line x1="100" y1="80" x2="300" y2="140" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="500" y1="80" x2="300" y2="140" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="100" y1="200" x2="300" y2="140" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 3"/>
            <line x1="500" y1="200" x2="300" y2="140" stroke="var(--line)" strokeWidth="1" strokeDasharray="3 3"/>
          </svg>
        </div>

        <div className={styles.explain}>
          <div className={styles.explainPoint}>
            <span className={styles.explainLabel}>The commons</span>
            <p className={styles.explainText}>Transport, routing, discovery — shared infrastructure that anyone can use. Like the Internet itself.</p>
          </div>
          <div className={styles.explainPoint}>
            <span className={styles.explainLabel}>Personal</span>
            <p className={styles.explainText}>Your XID, your reach policy, your relationships — these belong to you, not the commons.</p>
          </div>
        </div>
      </div>
    </section>
  );
}