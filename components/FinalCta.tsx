import styles from './FinalCta.module.css';

export function FinalCta() {
  return (
    <section id="cta" className={styles.root}>
      <div className="wrap">
        <div className={styles.content}>
          <span className={styles.kicker}>The future of identity</span>
          <h2 className={styles.headline}>One identity is all you need.</h2>
          <p className={styles.lead}>
            You decide what you see, what you receive, and who can reach you — across any network,
            without a carrier owning who you are.
          </p>
          <div className={styles.actions}>
            <a href="#features" className={styles.primary}>Explore capabilities</a>
            <a href="#faq" className={styles.secondary}>Common questions</a>
          </div>
        </div>
      </div>
    </section>
  );
}