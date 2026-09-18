import styles from './FinalCta.module.css';

export function FinalCta() {
  return (
    <section id="cta" className={styles.root}>
      <div className="wrap">
        <div className={styles.content}>
          <span className={styles.kicker}>The future of identity</span>
          <h2 className={styles.headline}>One identity. Zero borders.</h2>
          <p className={styles.lead}>
            No second SIM abroad. No spam folder. No provider owning your name.
            Decide who reaches you, on any network — your identity travels with you.
          </p>
          <div className={styles.actions}>
            <a href="#capabilities" className={styles.primary}>See the capabilities</a>
            <a href="#faq" className={styles.secondary}>Common questions</a>
          </div>
        </div>
      </div>
    </section>
  );
}