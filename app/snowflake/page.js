import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Snowflake | Sustainable Menstrual Care by EarthImpact',
  description: "Snowflake is EarthImpact's science-backed, plastic-free and biodegradable sanitary pad. Built with HemoSan Hydrogel and natural materials, designed to avoid chemicals of concern. Currently in research and validation.",
  alternates: { canonical: 'https://www.earthimpact.co.in/snowflake' },
  openGraph: {
    title: 'Snowflake | Sustainable Menstrual Care by EarthImpact Innovations',
    description: 'Science-backed, plastic-free menstrual care. HemoSan Hydrogel. Biodegradable under specified conditions. Currently in development and validation.',
    url: 'https://www.earthimpact.co.in/snowflake',
    type: 'website',
  },
};

export default function SnowflakePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Snowflake",
    "description": "Snowflake is EarthImpact's science-backed, plastic-free and biodegradable sanitary pad, designed to avoid chemicals of concern and reduce environmental impact.",
    "brand": {
      "@type": "Brand",
      "name": "EarthImpact Innovations"
    },
    "manufacturer": {
      "@id": "https://www.earthimpact.co.in/#organization"
    },
    "url": "https://www.earthimpact.co.in/snowflake"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className="section-tag">THE PRODUCT ❄️</p>
            <h1 className={styles.heroTitle}>
              Snowflake.<br />
              <span className={styles.heroAccent}>A pad designed differently.</span>
            </h1>
            <p className={styles.heroDesc}>
              Snowflake is EarthImpact&apos;s core product — a science-backed, plastic-free and biodegradable sanitary pad formulated with material-safety focus. Currently in research and validation.
            </p>
            <div className={styles.devBadge}>
              <span className={styles.devDot} />
              Development Stage: Research → Prototype → Validation → Certification
            </div>
            <div className={styles.heroBtns}>
              <Link href="/snowflake-cares" className="btn btn-primary">
                The Mission Behind Snowflake →
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Partner With Us →
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.padImageWrap}>
              <img
                src="/images/products/pad-product.png"
                alt="Snowflake — EarthImpact's biodegradable sanitary pad"
                className={styles.padImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY SNOWFLAKE ===================== */}
      <section className={`${styles.whySection} section`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="section-tag">WHY SNOWFLAKE</p>
            <h2 className={styles.sectionTitle}>The problem with conventional pads.</h2>
            <p className={styles.sectionDesc}>
              Conventional sanitary pads typically contain plastics, synthetic chemicals and processing by-products.
              Research has detected phthalates, VOCs and other potentially concerning substances in tested products.
              Most pads are not biodegradable and can persist in landfills for centuries.
              Snowflake was designed to address all of this.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCT CONSTRUCTION ===================== */}
      <section className={`${styles.construction} section`}>
        <div className="container">
          <p className="section-tag">PRODUCT CONSTRUCTION</p>
          <h2 className={styles.sectionTitle}>How Snowflake is built.</h2>
          <p className={styles.sectionDesc}>
            Snowflake uses a layered architecture designed to balance absorbency, safety and end-of-life impact.
            Each layer is selected for a specific function using materials chosen to avoid identified chemicals of concern.
          </p>
          <div className={styles.layerGrid}>
            {[
              { num: '01', title: 'Top Sheet', desc: 'Soft, skin-contact layer made from plant-derived fibres. Designed to be gentle and breathable.' },
              { num: '02', title: 'HemoSan Hydrogel Layer', desc: 'EarthImpact\'s proprietary innovation. A hydrogel formulation designed to improve fluid management and hygiene performance. Details are held confidential to protect IP.' },
              { num: '03', title: 'Absorbent Core', desc: 'Natural cellulose-based core material for high absorbency without synthetic SAP dependency where possible.' },
              { num: '04', title: 'Back Sheet', desc: 'Designed to be plastic-free. Provides leakage control without conventional plastic film.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className={styles.layerCard}>
                <div className={styles.layerNum}>{num}</div>
                <h3 className={styles.layerTitle}>{title}</h3>
                <p className={styles.layerDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== HEMOSAN ===================== */}
      <section className={`${styles.hemosan} section`}>
        <div className="container">
          <div className={styles.hemosanGrid}>
            <div className={styles.hemosanLeft}>
              <p className="section-tag">INNOVATION</p>
              <h2 className={styles.hemosanTitle}>
                HemoSan Hydrogel.<br />
                <span className={styles.hemosanAccent}>Our proprietary material innovation.</span>
              </h2>
              <p className={styles.hemosanDesc}>
                HemoSan is EarthImpact&apos;s internally developed hydrogel formulation. It is designed to enhance fluid management within the pad, improving hygiene performance while aligning with our material-safety focus.
              </p>
              <p className={styles.hemosanDesc}>
                The exact formulation, percentages and process parameters remain confidential as part of EarthImpact&apos;s IP protection strategy. We disclose function and intent — not recipe.
              </p>
              <div className={styles.hemosanBadge}>🧪 Proprietary Formulation — IP Protected</div>
            </div>
            <div className={styles.hemosanRight}>
              {[
                { icon: '💧', label: 'Fluid Management', sub: 'Designed to enhance absorption performance' },
                { icon: '🌿', label: 'Material-Safety Focus', sub: 'Formulated to avoid chemicals of concern' },
                { icon: '🔬', label: 'Research-Backed', sub: 'Developed through iterative R&D at NIT Calicut' },
              ].map(({ icon, label, sub }) => (
                <div key={label} className={styles.hemosanFeature}>
                  <div className={styles.hemosanIcon}>{icon}</div>
                  <div>
                    <p className={styles.hemosanFeatureLabel}>{label}</p>
                    <p className={styles.hemosanFeatureSub}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MATERIALS ===================== */}
      <section className={`${styles.materials} section`}>
        <div className="container">
          <p className="section-tag">MATERIALS</p>
          <h2 className={styles.sectionTitle}>What Snowflake is made of.</h2>
          <p className={styles.sectionDesc}>
            Snowflake uses plant-based and naturally derived material classes wherever possible, guided by sustainability and safety logic.
          </p>
          <div className={styles.materialGrid}>
            {[
              { icon: '🌿', title: 'Plant-Derived Fibres', desc: 'Natural cellulose and plant-based fibres for skin-contact layers and the absorbent core.' },
              { icon: '🌊', title: 'Hydrogel Innovation', desc: 'HemoSan Hydrogel — EarthImpact\'s proprietary fluid-management layer.' },
              { icon: '♻️', title: 'Plastic-Free Construction', desc: 'Designed to avoid conventional plastic film layers. Full scope of plastic-free claim is verified per layer during validation.' },
              { icon: '🌱', title: 'Biodegradable Under Defined Conditions', desc: 'The materials are designed to biodegrade under specified test conditions. Biodegradability certification is part of the validation roadmap.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.materialCard}>
                <div className={styles.materialIcon}>{icon}</div>
                <h3 className={styles.materialTitle}>{title}</h3>
                <p className={styles.materialDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DEVELOPMENT STATUS ===================== */}
      <section className={`${styles.devStatus} section`}>
        <div className="container">
          <p className="section-tag">DEVELOPMENT STATUS</p>
          <h2 className={styles.sectionTitle}>Where we are right now.</h2>
          <p className={styles.sectionDesc}>
            EarthImpact is a research and development stage company. We are transparent about where Snowflake sits in its development journey.
          </p>
          <div className={styles.stageTrack}>
            {[
              { label: 'Research', active: true, done: true },
              { label: 'Prototype', active: true, done: true },
              { label: 'Validation', active: true, done: false },
              { label: 'Certification', active: false, done: false },
              { label: 'Commercialisation', active: false, done: false },
            ].map(({ label, active, done }, i) => (
              <div key={label} className={styles.stageItem}>
                <div className={`${styles.stageDot} ${done ? styles.stageDone : ''} ${active && !done ? styles.stageCurrent : ''}`}>
                  {done ? '✓' : i + 1}
                </div>
                <p className={`${styles.stageLabel} ${active ? styles.stageLabelActive : ''}`}>{label}</p>
              </div>
            ))}
          </div>
          <p className={styles.devNote}>
            ⚠️ Snowflake is not yet commercially available. Performance claims on absorbency, leakage and safety will be published only when supported by independent test evidence.
          </p>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaGrid}>
            <div>
              <h2 className={styles.ctaTitle}>Follow Snowflake&apos;s development.</h2>
              <p className={styles.ctaDesc}>
                Join us to stay updated on milestones, validation progress and the path to commercialisation.
              </p>
            </div>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-primary">Get in Touch →</Link>
              <Link href="/snowflake-cares" className="btn btn-secondary">The Mission →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
