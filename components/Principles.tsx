import styles from './Principles.module.css';

const principles = [
  {
    name: 'User ownership',
    desc: 'Your identity belongs to you, not to a provider. You control it, you move it, you recover it.',
  },
  {
    name: 'Consent before contact',
    desc: 'No one reaches you without your permission. Your reach policy evaluates every request.',
  },
  {
    name: 'Pairwise privacy',
    desc: 'Every relationship is private between the two parties. No central directory of who you know.',
  },
  {
    name: 'Transport independence',
    desc: 'Wi-Fi, fiber, 5G, satellite — the transport changes, your identity doesn\'t.',
  },
  {
    name: 'Minimal exposure',
    desc: 'Share only what\'s necessary. Slots instead of calendars. Capability discovery instead of open APIs.',
  },
  {
    name: 'Recovery by design',
    desc: 'Identity recovery is a protocol, not a customer service ticket. Your trusted devices and contacts help you recover.',
  },
];

export function Principles() {
  return (
    <section id="principles" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Guiding principles</span>
        </div>
        <h2 className={styles.headline}>Principles.</h2>
        <p className={styles.lead}>
          These principles guide the XDomain vision. They are not implementation details — they are the values that shape the architecture.
        </p>

        <div className={styles.grid}>
          {principles.map((p, i) => (
            <div key={p.name} className={styles.principle}>
              <span className={styles.principleNum}>{i + 1}</span>
              <span className={styles.principleName}>{p.name}</span>
              <p className={styles.principleDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}