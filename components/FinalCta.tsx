import styles from './FinalCta.module.css';

export function FinalCta() {
  return (
    <section id="faq" className={styles.root}>
      <div className="wrap">
        <div className={styles.content}>
          <span className={styles.kicker}>The future of identity</span>
          <h2 className={styles.headline}>Your identity. Your domain. Your communication.</h2>
          <p className={styles.lead}>
            XDomain is an independent research project exploring a future where you own your Internet identity,
            control who can reach you, and communicate across any network.
          </p>
          <div className={styles.actions}>
            <a href="#architecture" className={styles.primary}>Explore the architecture</a>
            <a href="#research" className={styles.secondary}>Read the research questions</a>
          </div>
        </div>
      </div>
    </section>
  );
}