import styles from './OldComputer.module.css';

export function OldComputer() {
  return (
    <section id="portability" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Your identity travels with you</span>
        </div>
        <h2 className={styles.headline}>The old computer problem.</h2>
        <p className={styles.lead}>
          Imagine getting a new computer. Or a new phone. Today, you have to log into dozens of services,
          reset passwords, and hope you remember everything. Your identity isn't yours — it's scattered across providers.
        </p>

        <div className={styles.comparison}>
          <div className={styles.col}>
            <span className={styles.colTag}>Today</span>
            <div className={styles.colContent}>
              <p className={styles.colTitle}>Reinstalling everything</p>
              <ul className={styles.list}>
                <li>Login to email</li>
                <li>Login to social media</li>
                <li>Login to work tools</li>
                <li>Login to banking</li>
                <li>Login to shopping</li>
                <li>Login to messaging</li>
                <li>Login to cloud storage</li>
                <li>...and dozens more</li>
              </ul>
            </div>
          </div>
          <div className={styles.col}>
            <span className={styles.colTag}>XDomain</span>
            <div className={styles.colContent}>
              <p className={styles.colTitle}>Restore your XDomain</p>
              <ul className={styles.list}>
                <li>Recover your XID</li>
                <li>Restore your reach policy</li>
                <li>Select your capabilities</li>
                <li>Reconnect your relationships</li>
                <li>You're back, with everything intact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.quote}>
          <p>"Your identity should be something you own, not something you subscribe to."</p>
        </div>
      </div>
    </section>
  );
}