import styles from './EmailOptional.module.css';

export function EmailOptional() {
  return (
    <section id="email-optional" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Email is a capability, not an identity</span>
        </div>
        <h2 className={styles.headline}>Email optional.</h2>
        <p className={styles.lead}>
          Email is useful. But it shouldn't be the foundation of your Internet identity.
          With XDomain, email becomes one capability among many — something you can offer, not something you must have.
        </p>

        <div className={styles.compare}>
          <div className={styles.compareCol}>
            <span className={styles.compareTag}>Email as identity</span>
            <ul className={styles.list}>
              <li>Your email is your username everywhere</li>
              <li>Email providers can read your communications</li>
              <li>Changing email providers is painful</li>
              <li>You're locked into one provider's ecosystem</li>
              <li>Email addresses expire, get recycled, can be hijacked</li>
            </ul>
          </div>
          <div className={styles.compareCol}>
            <span className={styles.compareTag}>Email as capability</span>
            <ul className={styles.list}>
              <li>Your XID is your identity</li>
              <li>Email is just one way to communicate</li>
              <li>Switch email providers anytime</li>
              <li>Identity stays with you, not the provider</li>
              <li>Your XID persists independently</li>
            </ul>
          </div>
        </div>

        <div className={styles.explain}>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>Today</span>
            <p>"What's your email?" is the first question in almost every online interaction. Email has become a de facto identity system without anyone designing it that way.</p>
          </div>
          <div className={styles.explainCard}>
            <span className={styles.explainTag}>XDomain</span>
            <p>The question becomes "What's your XID?" Email becomes optional. You can offer email as a capability without it being your core identity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}