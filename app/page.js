import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'EarthImpact – Building Safer Solutions for Women & Our Planet',
  description: 'We create non-toxic, endocrine-safe and biodegradable solutions for menstrual care that are safe for women and gentle on the environment.',
};

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Building Safer Solutions for Women &amp; Our Planet.
            <span className={styles.goldStar}>✦</span>
          </h1>
          <p className={styles.heroDesc}>
            We create non-toxic, endocrine-safe and biodegradable solutions for menstrual care that are safe for women and gentle on the environment.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/snowflake-cares" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C12 2 6 8 6 15a6 6 0 0012 0C18 8 12 2 12 2z"/></svg>
              Explore Our Products
            </Link>
            <button className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16"/></svg>
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Hero center image area */}
        <div className={styles.heroCenter}>
          <img
            src="/images/products/pad-product.png"
            alt="Snowflake biodegradable sanitary pad with natural leaves"
            className={styles.heroPadImg}
          />
        </div>

        {/* Snowflake Card */}
        <div className={styles.snowflakeCard}>
          <div className={styles.snowflakeLogo}>
            <span className={styles.snowflakeScript}>snowflake.</span>
            <span className={styles.snowflakeSub}>CARE THAT UNDERSTANDS</span>
          </div>
          <ul className={styles.snowflakeFeatures}>
            <li>
              <span className={styles.sfIcon}>♻</span>
              Non-Toxic &amp; Safe
            </li>
            <li>
              <span className={styles.sfIcon}>♻</span>
              Plastic-Free
            </li>
            <li>
              <span className={styles.sfIcon}>♻</span>
              Biodegradable
            </li>
            <li>
              <span className={styles.sfIcon}>♻</span>
              Better for You, Better for Earth
            </li>
          </ul>
          <Link href="/snowflake-cares" className={styles.snowflakeBtn}>
            Explore Snowflake →
          </Link>
        </div>
      </section>

      {/* ===================== FEATURES STRIP ===================== */}
      <section className={styles.featuresStrip}>
        <div className="container">
          <div className={styles.featuresGrid}>
            {[
              { icon: '🌿', title: 'Non-Toxic & Safe', desc: '' },
              { icon: '♻️', title: 'Plastic-Free', desc: '& Biodegradable' },
              { icon: '💧', title: 'Fights Water', desc: 'Pollution' },
              { icon: '🌍', title: 'Responsible', desc: 'Waste Management' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.featureItem}>
                <span className={styles.featureItemIcon}>{icon}</span>
                <div>
                  <p className={styles.featureItemTitle}>{title}</p>
                  {desc && <p className={styles.featureItemDesc}>{desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE PROBLEM ===================== */}
      <section className={`${styles.problem} section`}>
        <div className="container">
          <div className={styles.problemGrid}>
            <div className={styles.problemLeft}>
              <p className="section-tag">THE PROBLEM</p>
              <h2 className={styles.problemTitle}>
                Millions of Women.<br />
                One Silent Health &amp; Environmental Crisis.
              </h2>
              <p className={styles.problemDesc}>
                Conventional menstrual products expose women to harmful chemicals and create massive plastic waste that harms our planet for centuries.
              </p>

              <div className={styles.statsGrid}>
                {[
                  { num: '35+', label: 'Crore Women', desc: 'Menstruate in India' },
                  { num: '20+', label: 'Harmful Chemicals', desc: 'Found in Conventional Pads' },
                  { num: '84%', label: 'Experience Pain', desc: 'During Periods' },
                  { num: '56%', label: 'Face Rashes', desc: '& Irritation' },
                ].map(({ num, label, desc }) => (
                  <div key={num} className={styles.statItem}>
                    <div className="stat-number">{num}</div>
                    <div className="stat-label">{label}</div>
                    <div className="stat-desc">{desc}</div>
                  </div>
                ))}
              </div>
              <p className={styles.sources}>Sources: NCBI Data, NFHS-5, U.S. EPA Research, iMarcGroup Report, Monitor Intelligence</p>
            </div>

            <div className={styles.problemRight}>
              <div className={styles.wastePic}>
                <img
                  src="/images/nature/landfill.png"
                  alt="Landfill waste from menstrual products"
                  className={styles.wastePicImg}
                />
                <div className={styles.wasteCard1}>
                  <div className={styles.wasteCardIcon}>🗑️</div>
                  <div className={styles.wasteCardNum}>~1.5 Lakh<br />Tonnes</div>
                  <div className={styles.wasteCardDesc}>of menstrual waste generated annually in India</div>
                </div>
                <div className={styles.wasteCard2}>
                  <div className={styles.wasteCardIcon}>🧪</div>
                  <div className={styles.wasteCardNum}>450–800<br />Years</div>
                  <div className={styles.wasteCardDesc}>for a single pad to decompose</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OUR SOLUTION ===================== */}
      <section className={`${styles.solution} section`}>
        <div className="container">
          <div className={styles.solutionGrid}>
            <div className={styles.solutionLeft}>
              <p className="section-tag">OUR SOLUTION</p>
              <h2 className={styles.solutionTitle}>
                A Pad That is<br />
                Actually Safe. 🌿
              </h2>
              <p className={styles.solutionDesc}>
                Snowflake by EarthImpact is a science-backed, plastic-free and biodegradable sanitary pad made with innovative, non-toxic materials for complete protection and peace of mind.
              </p>

              <div className={styles.solutionFeatures}>
                {[
                  { icon: '🌿', title: 'Endocrine-Safe & Non-Toxic' },
                  { icon: '💧', title: 'High Absorbency & Leak Protection' },
                  { icon: '🌾', title: 'Anti-Fungal & Anti-Microbial' },
                  { icon: '♻️', title: 'Biodegradable & Compostable' },
                ].map(({ icon, title }) => (
                  <div key={title} className={styles.solutionFeature}>
                    <span className={styles.solutionFeatureIcon}>{icon}</span>
                    <span className={styles.solutionFeatureText}>{title}</span>
                  </div>
                ))}
              </div>

              <Link href="/snowflake-cares" className="btn btn-primary">
                Discover Snowflake →
              </Link>
            </div>

            {/* Pad layers illustration */}
            <div className={styles.solutionCenter}>
              <div className={styles.padLayers}>
                {[
                  { label: 'Novel Biodegradable Top-Sheet', w: 200 },
                  { label: 'HemoSan® & Water Hyacinth Blend Absorbent Core', w: 185 },
                  { label: 'Novel Plastic-Free Leak Barrier', w: 170 },
                  { label: 'Plant-Based Adhesive Layer', w: 155 },
                  { label: 'Cotton Anti-Bacterial Back Sheet', w: 145 },
                ].map(({ label, w }, i) => (
                  <div key={i} className={styles.padLayer} style={{ '--layer-w': `${w}px` }}>
                    <div className={styles.padLayerShape}></div>
                    <span className={styles.padLayerLabel}>{label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.hydrogel}>
                <span>⚗️</span>
                <div>
                  <p className={styles.hydrogelSub}>Powered by our proprietary</p>
                  <p className={styles.hydrogelName}>Hydrogel "HemoSan"</p>
                </div>
              </div>
            </div>

            <div className={styles.solutionRight}>
              <p className={styles.solutionRightTag}>MADE WITH INNOVATION, ROOTED IN NATURE</p>
              <ul className={styles.layersList}>
                <li>Novel Biodegradable Top-Sheet</li>
                <li>HemoSan® &amp; Water Hyacinth Blend Absorbent Core</li>
                <li>Novel Plastic-Free Leak Barrier</li>
                <li>Plant-Based Adhesive Layer</li>
                <li>Cotton Anti-Bacterial Back Sheet</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OUR IMPACT ===================== */}
      <section className={`${styles.impact} section`}>
        <div className="container">
          <div className={styles.impactHeader}>
            <p className="section-tag">🌿 OUR IMPACT</p>
            <h2 className={styles.impactTitle}>Better Health. Cleaner Planet. Brighter Future.</h2>
          </div>
          <div className={styles.impactGrid}>
            {[
              { icon: '👩', title: 'Healthier for Women', desc: 'No harmful chemicals. Gentle on the most sensitive part of the body.' },
              { icon: '🌿', title: 'Cleaner for the Planet', desc: 'Zero plastic, zero toxic waste. Designed to biodegrade naturally.' },
              { icon: '🔬', title: 'Responsibly Innovated', desc: 'Science-backed materials that create real impact at scale.' },
              { icon: '🌍', title: 'Future-Ready Solutions', desc: 'Building a healthier, sustainable world for generations to come.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.impactCard}>
                <div className={styles.impactIcon}>{icon}</div>
                <h3 className={styles.impactCardTitle}>{title}</h3>
                <p className={styles.impactCardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className={styles.ctaBanner}>
        <img src="/images/nature/forest-river.png" alt="Forest river landscape" className={styles.ctaBannerBgImg} />
        <div className={styles.ctaBannerContent}>
          <h2 className={styles.ctaBannerTitle}>
            Every choice matters.<br />
            Let's build a healthier world together.
          </h2>
          <p className={styles.ctaBannerDesc}>
            Join us in redefining menstrual care with innovation that protects women and the planet.
          </p>
          <div className={styles.ctaBannerBtns}>
            <Link href="/snowflake-cares" className="btn btn-outline-white">Explore Our Products →</Link>
            <Link href="/our-story" className="btn btn-outline-white">Learn More About Us →</Link>
          </div>
        </div>
      </section>

      {/* ===================== BOTTOM STRIP ===================== */}
      <div className={styles.bottomStrip}>
        <span>SCIENCE-BACKED</span>
        <span className={styles.stripDot}>•</span>
        <span>NON-TOXIC</span>
        <span className={styles.stripLeaf}>🌿</span>
        <span>BIODEGRADABLE</span>
        <span className={styles.stripDot}>•</span>
        <span>RESPONSIBLE</span>
      </div>

      <Footer />
    </>
  );
}
