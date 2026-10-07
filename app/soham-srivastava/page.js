import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Soham Srivastava | Founder of EarthImpact Innovations',
  description: 'Soham Srivastava is the founder of EarthImpact Innovations, building safer and sustainable solutions for women\'s health through innovation, materials and technology.',
  keywords: [
    'Soham Srivastava', 'Soham Srivastav', 'Soham Srivastava EarthImpact',
    'EarthImpact Innovations founder',
    'biodegradable sanitary pad innovator India', 'menstrual health entrepreneur India',
  ],
  alternates: { canonical: 'https://earthimpact.co.in/soham-srivastava' },
  openGraph: {
    title: 'Soham Srivastava | Founder of EarthImpact Innovations',
    description: 'Soham Srivastava is the founder of EarthImpact Innovations, building safer and sustainable solutions for women\'s health.',
    url: 'https://earthimpact.co.in/soham-srivastava',
    images: [{ url: 'https://earthimpact.co.in/images/founder/soham.jpg', alt: 'Soham Srivastava - Founder of EarthImpact Innovations' }],
  },
};

const milestones = [
  { year: '2026', icon: '🤝', title: 'SIIC IIT Kanpur — Advaya 2.0', desc: 'Selected under Advaya 2.0 by SIIC IIT Kanpur; CSR funding received from Pernod Richard India Foundation.' },
  { year: '2025', icon: '🌱', title: 'UnLtd India Fellow', desc: 'Supported by UnLtd India as a social entrepreneur.' },
  { year: '2025', icon: '🌍', title: 'GUESSS India Entrepreneur (ProBono)', desc: 'Soham Srivastava recognised as GUESSS India Entrepreneur.' },
  { year: '2025', icon: '🏅', title: 'TBI NIT Calicut — NIDHI-PRAYAS', desc: 'Received NIDHI-PRAYAS support through TBI NIT Calicut.' },
  { year: 'Feb 2025', icon: '🚀', title: 'EarthImpact Incorporated', desc: 'EarthImpact Innovations Pvt. Ltd. was officially incorporated, turning years of research into a real company.' },
  { year: '2025', icon: '🏆', title: 'Winner — ReFlow Menstrual Health Hackathon', desc: 'Won the ReFlow Menstrual Health Innovation Hackathon. The event was associated with IIT Bhubaneswar Research and Entrepreneurship Park.' },
  { year: '2024-present', icon: '🔬', title: '2+ Years of R&D', desc: 'Extensive research and development in non-toxic, biodegradable materials for menstrual care, based at NIT Calicut.' },
  { year: '2024', icon: '🌟', title: 'IIMCIP: NIDHI EIR', desc: 'Received NIDHI-EIR support through IIM Calcutta Innovation Park.' },
  { year: '2024', icon: '🏛️', title: 'Pre-incubated by AIC-IIIT Kottayam', desc: 'First pre-incubation at AIC-IIIT Kottayam — marking the formal start of the EarthImpact innovation journey.' },
];

const ecosystemLinks = [
  { name: 'AIC-IIIT Kottayam', role: 'Pre-incubated by (2024)', logo: '/images/logos/incubators/aic.jpeg' },
  { name: 'SIIC IIT Kanpur', role: 'Selected under Advaya 2.0; CSR funding received from Pernod Richard India Foundation', logo: '/images/logos/incubators/siic-iit kanpur.webp' },
  { name: 'TBI NIT Calicut', role: 'Incubation & R&D Support — NIDHI-PRAYAS', logo: '/images/logos/incubators/tbi nitc logo.jpeg' },
  { name: 'IIM Calcutta Innovation Park', role: 'NIDHI-EIR support', logo: '/images/logos/incubators/iimcip logo.jpeg' },
  { name: 'STPI Bhubaneswar', role: 'Technology Ecosystem Support', logo: '/images/logos/incubators/stpi.webp' },
  { name: 'UnLtd India', role: 'Social Enterprise Support', logo: '/images/logos/incubators/unltd.jpg' },
];

export default function SohamSrivastavaPage() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Soham Srivastava",
      "alternateName": "Soham Srivastav",
      "jobTitle": "Founder & Chief Empathy Officer",
      "url": "https://earthimpact.co.in/soham-srivastava",
      "image": "https://earthimpact.co.in/images/founder/soham.jpg",
      "description": "Soham Srivastava is the founder of EarthImpact Innovations Pvt. Ltd., building non-toxic, endocrine-safe and biodegradable solutions for women's menstrual health in India.",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://earthimpact.co.in/#organization",
        "name": "EarthImpact Innovations Pvt. Ltd."
      },
      "alumniOf": undefined,
      "sameAs": [
        "https://www.linkedin.com/in/namaste-soham"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />

      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className="section-tag">FOUNDER ✦ EARTHIMPACT INNOVATIONS</p>
            <h1 className={styles.heroTitle}>Soham Srivastava</h1>
            <p className={styles.heroRole}>Founder &amp; Chief Empathy Officer</p>
            <p className={styles.heroTagline}>
              Building safer, science-backed and sustainable solutions for women and our planet.
            </p>
            <div className={styles.heroBtns}>
              <a
                href="https://www.linkedin.com/in/namaste-soham"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                Connect on LinkedIn
              </a>
              <Link href="/" className="btn btn-secondary">
                Visit EarthImpact →
              </Link>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.founderImageWrap}>
              <img
                src="/images/founder/soham.jpg"
                alt="Soham Srivastava — Founder and Chief Empathy Officer of EarthImpact Innovations"
                className={styles.founderImage}
              />
              <div className={styles.founderBadge}>
                <span className={styles.badgeIcon}>🌿</span>
                <span className={styles.badgeText}>EarthImpact Innovations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section className={`${styles.about} section`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <p className="section-tag">ABOUT 🌿</p>
              <h2 className={styles.aboutTitle}>Science-driven founder. Mission-first company.</h2>
            </div>
            <div className={styles.aboutRight}>
              <p className={styles.aboutText}>
                Soham Srivastava is an entrepreneur and innovator focused on women's health and sustainable materials. He founded EarthImpact Innovations with a science-first mindset, addressing one of India's most overlooked health and environmental challenges — menstrual care.
              </p>
              <p className={styles.aboutText}>
                His journey began with empathy: a real-life experience that opened his eyes to the hidden risks in everyday products, and sparked a multi-year commitment to finding better answers. Soham spent over 1.5 years in research, material science exploration and prototype development before founding EarthImpact.
              </p>
              <p className={styles.aboutText}>
                Today, he leads EarthImpact Innovations Pvt. Ltd. — a company on a mission to make safer, science-backed and biodegradable menstrual care the standard, not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY EARTHIMPACT ===================== */}
      <section className={styles.why}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>💡</div>
              <h3 className={styles.whyTitle}>The Spark</h3>
              <p className={styles.whyDesc}>
                A personal experience revealed that conventional sanitary pads have been found to contain multiple potentially concerning chemicals — including phthalates and other substances detected in tested products. Women may be exposed to these for hours every month for decades.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🔬</div>
              <h3 className={styles.whyTitle}>The Research</h3>
              <p className={styles.whyDesc}>
                Rather than accept the status quo, Soham spent 1.5+ years studying the science — exploring materials, understanding the regulatory landscape, and developing prototypes for a truly safer alternative.
              </p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🌍</div>
              <h3 className={styles.whyTitle}>The Mission</h3>
              <p className={styles.whyDesc}>
                Conventional pads also generate an estimated ~1.13 lakh tonnes of used sanitary-pad waste reaching Indian landfills annually (Toxics Link). These pads can persist for centuries in landfill conditions. Soham's mission is to solve both crises at once — building products that are safer for women's bodies and for the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BUILDING EARTHIMPACT ===================== */}
      <section className={`${styles.building} section`}>
        <div className="container">
          <div className={styles.buildingGrid}>
            <div className={styles.buildingLeft}>
              <p className="section-tag">BUILDING EARTHIMPACT 🚀</p>
              <h2 className={styles.buildingTitle}>What he is working on right now.</h2>
              <p className={styles.buildingDesc}>
                Soham is focused on bringing EarthImpact's first product — Snowflake — from research and prototype to a market-ready, certified solution for women across India. This means continuing material validation, building ecosystem partnerships and educating the market about the real risks of conventional period care.
              </p>
              <p className={styles.buildingDesc}>
                Longer term, EarthImpact aims to expand its product range, deepen its scientific validation and scale impact across rural and urban India — where 35+ crore women menstruate every month.
              </p>
              <Link href="/snowflake-cares" className="btn btn-primary">
                Explore Snowflake →
              </Link>
            </div>
            <div className={styles.buildingRight}>
              {[
                { icon: '🧪', label: 'Proprietary HemoSan hydrogel' },
                { icon: '♻️', label: 'Designed to be plastic-free and biodegradable' },
                { icon: '🔬', label: 'Hygiene-focused materials and formulation' },
                { icon: '🤝', label: 'Supported by NIDHI-PRAYAS, NIDHI-EIR and incubators' },
                { icon: '🌱', label: 'Designed to reduce persistent plastic waste at end of life' },
              ].map(({ icon, label }) => (
                <div key={label} className={styles.buildingPoint}>
                  <span className={styles.buildingPointIcon}>{icon}</span>
                  <span className={styles.buildingPointText}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MILESTONES ===================== */}
      <section className={styles.milestones}>
        <div className="container">
          <p className="section-tag" style={{ justifyContent: 'center' }}>MILESTONES ✦</p>
          <h2 className={styles.milestonesTitle}>Verified recognitions and achievements.</h2>
          <div className={styles.milestonesTrack}>
            <div className={styles.milestonesLine} />
            {milestones.map(({ year, icon, title, desc }) => (
              <div key={title} className={styles.milestoneItem}>
                <div className={styles.milestoneDot}>
                  <span className={styles.milestoneIcon}>{icon}</span>
                </div>
                <p className={styles.milestoneYear}>{year}</p>
                <h3 className={styles.milestoneTitle}>{title}</h3>
                <p className={styles.milestoneDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ECOSYSTEM ===================== */}
      <section className={`${styles.ecosystem} section`}>
        <div className="container">
          <p className="section-tag">ECOSYSTEM SUPPORT 🌿</p>
          <h2 className={styles.ecosystemTitle}>Backed by institutions that believe in the mission.</h2>
          <div className={styles.ecosystemGrid}>
            {ecosystemLinks.map(({ name, role, logo }) => (
              <div key={name} className={styles.ecosystemCard}>
                <div className={styles.ecosystemLogo}>
                  <img src={logo} alt={`${name} logo`} className={styles.ecosystemLogoImg} />
                </div>
                <p className={styles.ecosystemName}>{name}</p>
                <p className={styles.ecosystemRole}>{role}</p>
              </div>
            ))}
          </div>
          <div className={styles.ecosystemCta}>
            <Link href="/ecosystem-support" className="btn btn-secondary">
              View Full Ecosystem →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== MEDIA ===================== */}
      <section className={styles.media}>
        <div className="container">
          <p className="section-tag">IN THE MEDIA 📰</p>
          <h2 className={styles.mediaTitle}>External coverage and features.</h2>
          <div className={styles.mediaGrid}>
            <div className={styles.mediaCard}>
              <div className={styles.mediaOutlet}>
                <img
                  src="/images/logos/media/yourstory.webp"
                  alt="YourStory logo"
                  className={styles.mediaLogo}
                />
              </div>
              <p className={styles.mediaType}>Featured Story</p>
              <p className={styles.mediaHeadline}>
                How EarthImpact is making menstrual care safe, non-toxic and sustainable.
              </p>
              <p className={styles.mediaDate}>May 2025</p>
            </div>
          </div>
          <div className={styles.mediaCta}>
            <Link href="/awards-media" className="btn btn-secondary">
              See All Recognition →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CONNECT ===================== */}
      <section className={styles.connect}>
        <div className="container">
          <div className={styles.connectGrid}>
            <div className={styles.connectLeft}>
              <p className="section-tag">CONNECT ✦</p>
              <h2 className={styles.connectTitle}>
                Have a question, idea or opportunity?<br />
                Soham personally reads every message.
              </h2>
              <div className={styles.connectDetails}>
                <a
                  href="https://www.linkedin.com/in/namaste-soham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.connectLink}
                >
                  <span className={styles.connectIcon}>💼</span>
                  <span>linkedin.com/in/namaste-soham</span>
                </a>
                <a href="mailto:info@earthimpact.co.in" className={styles.connectLink}>
                  <span className={styles.connectIcon}>✉️</span>
                  <span>info@earthimpact.co.in</span>
                </a>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Send a Message →
              </Link>
            </div>
            <div className={styles.connectRight}>
              <div className={styles.signatureBlock}>
                <div className={styles.sigLine} />
                <p className={styles.sigName}>Soham Srivastava</p>
                <p className={styles.sigRole}>Founder &amp; Chief Empathy Officer</p>
                <p className={styles.sigCompany}>EarthImpact Innovations Pvt. Ltd.</p>
                <div className={styles.sigLeaf}>🌿</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
