import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Snowflakes Pads – Non-Toxic Menstrual Care | EarthImpact',
  description: 'Snowflakes is our mission-driven brand by EarthImpact dedicated to redesigning menstrual care—making it safe, non-toxic, and biodegradable.',
  keywords: ['Snowflakes', 'Snowflakes Pads', 'Non-toxic Sanitary Pads', 'Biodegradable Menstrual Pads', 'EarthImpact Snowflakes'],
  openGraph: {
    title: 'Snowflakes Pads – Non-Toxic Menstrual Care',
    description: 'Snowflakes: Safe for every woman and gentle on the environment. Biodegradable and non-toxic pads by EarthImpact.',
    url: 'https://earthimpact.co.in/snowflake-cares',
  }
};

const whatMakesSnowflakeDifferent = [
  { icon: '🌿', title: 'Non-Toxic & Endocrine-Safe', desc: 'Free from harmful chemicals, irritants and allergens.' },
  { icon: '🩹', title: 'Plastic-Free Every Layer', desc: 'No plastic sheets, no petroleum-based materials.' },
  { icon: '♻️', title: 'Biodegradable & Compostable', desc: 'Breaks down naturally without leaving behind lasting harm.' },
  { icon: '🛡️', title: 'Anti-Fungal & Anti-Microbial', desc: 'Helps prevent infections & keeps you fresh.' },
  { icon: '💧', title: 'High Absorbency & Leak Protection', desc: 'Advanced core technology for superior absorption & safety.' },
  { icon: '🤝', title: 'Made with Responsibility', desc: 'Sustainably sourced materials with minimal environmental impact.' },
];

export default function SnowflakeCaresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Snowflakes Menstrual Pads",
            "description": "Non-toxic, endocrine-safe, and biodegradable menstrual pads.",
            "brand": {
              "@type": "Brand",
              "name": "Snowflakes"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "EarthImpact Innovations Pvt. Ltd."
            }
          })
        }}
      />
      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className="section-tag pink">SNOWFLAKE CARES ♡</p>
            <h1 className={styles.heroTitle}>
              Care for <span className={styles.pink}>Her.</span><br />
              Care for the <span className={styles.pink}>Planet.</span>
            </h1>
            <p className={styles.heroDesc}>
              Snowflake is our mission-driven brand dedicated to redesigning menstrual care—making it safe for every woman and gentle on the environment.
            </p>

            <div className={styles.pillarsGrid}>
              {[
                { icon: '🛡️', title: 'Safe for Her', desc: 'Non-toxic, endocrine-safe & gentle' },
                { icon: '🌿', title: 'Gentle on Planet', desc: 'Plastic-free & biodegradable' },
                { icon: '❤️', title: 'Health First', desc: 'Designed for long-term health & comfort' },
                { icon: '🌸', title: 'Dignity for All', desc: 'Accessible, reliable & empowering' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className={styles.pillar}>
                  <div className={styles.pillarIconWrap}>
                    <div className={styles.pillarIcon}>{icon}</div>
                  </div>
                  <p className={styles.pillarTitle}>{title}</p>
                  <p className={styles.pillarDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroRight}>
            {/* Center pad image */}
            <div className={styles.padImage}>
              <div className={styles.padOval}>
                <svg width="160" height="220" viewBox="0 0 160 220" fill="none">
                  <ellipse cx="80" cy="110" rx="65" ry="100" fill="white" stroke="#e8e3d8" strokeWidth="2"/>
                  <ellipse cx="80" cy="110" rx="48" ry="83" fill="#f9f7f3" stroke="#e0dcd2" strokeWidth="1"/>
                  <ellipse cx="80" cy="110" rx="30" ry="65" fill="#f5f3ef"/>
                </svg>
                <div className={styles.padLeaves}>
                  <svg width="70" height="90" viewBox="0 0 70 90" fill="none">
                    <path d="M35 5 Q58 18 55 50 Q52 72 35 78 Q18 72 15 50 Q12 18 35 5Z" fill="#5A7A5C" opacity="0.7"/>
                    <path d="M35 10 L35 76" stroke="#3A5A3C" strokeWidth="1" opacity="0.5"/>
                  </svg>
                </div>
                <div className={styles.padCotton}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="25" r="12" fill="white" opacity="0.9"/>
                    <circle cx="12" cy="20" r="9" fill="white" opacity="0.8"/>
                    <circle cx="28" cy="20" r="9" fill="white" opacity="0.8"/>
                    <circle cx="20" cy="14" r="8" fill="white" opacity="0.85"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Snowflake Card */}
            <div className={styles.snowflakeCard}>
              <div className={styles.snowflakeScript}>snowflake.</div>
              <div className={styles.snowflakeSub}>CARE THAT UNDERSTANDS</div>
              <ul className={styles.snowflakeList}>
                {['Non-Toxic & Safe', 'Plastic-Free', 'Biodegradable', 'Better for You, Better for Earth'].map(item => (
                  <li key={item}>
                    <span className={styles.sfIcon}>♻</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className={styles.snowflakeBtn}>Explore Snowflake →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE REALITY / STATS ===================== */}
      <section className={styles.reality}>
        <div className="container">
          <p className="section-tag pink" style={{ marginBottom: 12 }}>THE REALITY BEHIND EVERY PAD</p>
          <div className={styles.realityGrid}>
            <div className={styles.realityLeft}>
              <h2 className={styles.realityTitle}>
                A Hidden Crisis We Can<br />
                No Longer Ignore.
              </h2>
              <p className={styles.realityDesc}>
                Conventional pads contain harmful chemicals and plastics that impact women's health and our environment—every single day.
              </p>
            </div>
            <div className={styles.statsRow}>
              {[
                { icon: '🧪', num: '20+', label: 'Harmful EDCs & VOCs chemicals & allergens in conventional pads' },
                { icon: '🗑️', num: '~1.5 Lakh Tonnes', label: 'of menstrual waste generated annually in India' },
                { icon: '⏳', num: '450–800 Years', label: 'for a single pad to decompose' },
                { icon: '🌊', num: 'Deep Impact', label: 'Plastic pollution chokes water bodies, harms aquatic life & damages ecosystems' },
              ].map(({ icon, num, label }) => (
                <div key={num} className={styles.statBox}>
                  <div className={styles.statBoxIcon}>{icon}</div>
                  <div className={styles.statBoxNum}>{num}</div>
                  <div className={styles.statBoxLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MENSTRUAL WASTE MATH ===================== */}
      <section className={styles.wasteMath}>
        <div className="container">
          <p className={styles.wasteMathTag}>THE MENSTRUAL WASTE WE DON'T TALK ABOUT</p>
          <div className={styles.wasteEquation}>
            <div className={styles.wasteEqItem}>
              <div className={styles.wasteEqIcon}>👥</div>
              <p className={styles.wasteEqLabel}>Nearly</p>
              <p className={styles.wasteEqNum}>12 CRORES</p>
              <p className={styles.wasteEqDesc}>Indian women of menstrual age</p>
            </div>
            <div className={styles.wasteEqOp}>✕</div>
            <div className={styles.wasteEqItem}>
              <div className={styles.wasteEqIcon}>📅</div>
              <p className={styles.wasteEqLabel}>Use an average of</p>
              <p className={styles.wasteEqNum}>8 PADS</p>
              <p className={styles.wasteEqDesc}>every month</p>
            </div>
            <div className={styles.wasteEqOp}>✕</div>
            <div className={styles.wasteEqItem}>
              <div className={styles.wasteEqIcon}>🗑️</div>
              <p className={styles.wasteEqLabel}>Leads to approx.</p>
              <p className={styles.wasteEqNum} style={{ color: 'var(--pink)' }}>1,13,000 TONNES</p>
              <p className={styles.wasteEqDesc}>of menstrual waste every single year</p>
            </div>
            <div className={styles.wasteEqOp}>=</div>
            <div className={styles.wasteEqResult}>
              <p className={styles.wasteResultText}>That's a massive burden on our land, water &amp; future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT MAKES SNOWFLAKE DIFFERENT ===================== */}
      <section className={styles.different}>
        <div className="container">
          <p className={styles.differentTag}>WHAT MAKES SNOWFLAKE DIFFERENT?</p>
          <p className={styles.differentSubtitle}>Thoughtfully designed for complete safety, high performance and zero compromise.</p>

          <div className={styles.differentGrid}>
            {whatMakesSnowflakeDifferent.map(({ icon, title, desc }) => (
              <div key={title} className={styles.differentCard}>
                <div className={styles.differentIcon}>{icon}</div>
                <h3 className={styles.differentCardTitle}>{title}</h3>
                <p className={styles.differentCardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OUR PROMISE ===================== */}
      <section className={styles.promise}>
        <div className="container">
          <div className={styles.promiseGrid}>
            <div className={styles.promiseLeft}>
              <div className={styles.promisePlant}>🌱</div>
              <div>
                <h3 className={styles.promiseTitle}>Our Promise</h3>
                <p className={styles.promiseDesc}>
                  We don't just make products. We protect health, dignity and the planet—for her, for all, for tomorrow.
                </p>
              </div>
            </div>
            <div className={styles.promiseRight}>
              {[
                { icon: '♡', title: 'For Her Health', desc: 'Safer, gentler period care' },
                { icon: '🌍', title: 'For Our Planet', desc: 'Less waste, less pollution' },
                { icon: '🌿', title: 'For Future Generations', desc: 'A sustainable world they can thrive in' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className={styles.promiseCard}>
                  <div className={styles.promiseCardIcon}>{icon}</div>
                  <p className={styles.promiseCardTitle}>{title}</p>
                  <p className={styles.promiseCardDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Strip */}
      <div className={styles.bottomStrip}>
        <span className={styles.leafIcon}>🌿</span>
        <span>Because caring for her should never come at the cost of our planet.</span>
        <span className={styles.dividerLine}>|</span>
        <span className={styles.pinkText}>Care that understands. Innovation that protects.</span>
        <span>🌸</span>
      </div>

      <Footer />
    </>
  );
}
