import styles from './AppointmentFlow.module.css';

const slots = ['9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM', '5:00 PM'];

export function AppointmentFlow() {
  return (
    <section id="appointments" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Schedule without sharing your calendar</span>
        </div>
        <h2 className={styles.headline}>Appointments without the inbox full of calendar links.</h2>
        <p className={styles.lead}>
          Instead of sharing your entire calendar, your XDomain shares only the slots you're willing to offer.
          The other party picks a time. Neither of you exposes more than necessary.
        </p>

        <div className={styles.flow}>
          <div className={styles.step}>
            <span className={styles.stepLabel}>Bhaskar</span>
            <span className={styles.stepDesc}>Requests a meeting</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={`${styles.step} ${styles.stepHighlight}`}>
            <span className={styles.stepLabel}>Tushar's XDomain</span>
            <span className={styles.stepDesc}>Returns available slots</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={styles.step}>
            <span className={styles.stepLabel}>Bhaskar</span>
            <span className={styles.stepDesc}>Picks a slot</span>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.arrow}>
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          <div className={`${styles.step} ${styles.stepFinal}`}>
            <span className={styles.stepLabel}>Confirmed</span>
            <span className={styles.stepDesc}>No calendar sharing needed</span>
          </div>
        </div>

        <div className={styles.slotsGrid}>
          {slots.map((slot) => (
            <button key={slot} className={styles.slot}>
              <span className={styles.slotTime}>{slot}</span>
              <span className={styles.slotStatus}>Available</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}