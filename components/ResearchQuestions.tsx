import styles from './ResearchQuestions.module.css';

const questions = [
  {
    q: 'How do people exchange XIDs in the physical world?',
    a: 'QR codes, NFC, proximity, invitation links, contact cards, or existing communication channels during migration.',
  },
  {
    q: 'What happens when someone loses access to their XDomain?',
    a: 'Recovery uses trusted devices, time-based protocols, or multi-party verification through existing relationships.',
  },
  {
    q: 'How is this different from a DID or a phone number?',
    a: 'A DID is a format. A phone number is a carrier-assigned identifier. XID is a concept: an identity you own, with a reach policy, that works across transports.',
  },
  {
    q: 'Who runs the infrastructure?',
    a: 'The commons — transport, routing, discovery — can be run by anyone. Your personal node and identity are yours.',
  },
  {
    q: 'What about spam and abuse?',
    a: 'Reach policies evaluate every incoming request. Unknown senders must meet your criteria or be declined. Pairwise privacy means no one can map your relationships.',
  },
  {
    q: 'Is this compatible with existing systems?',
    a: 'During migration, XDomain can work alongside email, phone, and platforms. The goal is to provide an alternative that gradually becomes preferred.',
  },
];

export function ResearchQuestions() {
  return (
    <section id="research" className={styles.root}>
      <div className="wrap">
        <div className={styles.crumbs}>
          <span className="kicker">Open questions</span>
        </div>
        <h2 className={styles.headline}>Research questions.</h2>
        <p className={styles.lead}>
          XDomain is a research project. These are some of the questions we're exploring.
        </p>

        <div className={styles.qaList}>
          {questions.map((item, i) => (
            <div key={i} className={styles.qa}>
              <div className={styles.q}>
                <span className={styles.qLabel}>Q{i + 1}</span>
                <p className={styles.qText}>{item.q}</p>
              </div>
              <div className={styles.a}>
                <span className={styles.aLabel}>A</span>
                <p className={styles.aText}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}