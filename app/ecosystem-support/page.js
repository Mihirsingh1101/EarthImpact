import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Ecosystem Support & Networks | EarthImpact Innovations',
  description: 'EarthImpact Innovations is supported by AIC-IIIT Kottayam, TBI NIT Calicut, SIIC IIT Kanpur, IIM Calcutta Innovation Park, UnLtd India and STPI Bhubaneswar.',
  keywords: [
    'EarthImpact ecosystem', 'AIC IIIT Kottayam', 'TBI NIT Calicut',
    'SIIC IIT Kanpur', 'IIM Calcutta Innovation Park', 'UnLtd India',
    'menstrual health startup incubator India', 'NIDHI-PRAYAS', 'NIDHI-EIR'
  ],
  alternates: { canonical: 'https://www.earthimpact.co.in/ecosystem-support' },
  openGraph: {
    title: 'Ecosystem Support & Networks | EarthImpact Innovations',
    description: 'EarthImpact is supported by AIC-IIIT Kottayam, TBI NIT Calicut, SIIC IIT Kanpur, IIM Calcutta Innovation Park, UnLtd India and STPI Bhubaneswar.',
    url: 'https://www.earthimpact.co.in/ecosystem-support',
  }
};

const incubators = [
  { name: 'AIC-IIIT Kottayam', tagline: 'Pre-incubated by', logo: 'aic.jpeg' },
  { name: 'SIIC IIT Kanpur', tagline: 'Selected under Advaya 2.0; funding received', logo: 'aic.jpeg' },
  { name: 'TBI NIT Calicut', tagline: 'Incubation & R&D Support — NIDHI-PRAYAS', logo: 'stpi.webp' },
  { name: 'IIM Calcutta Innovation Park', tagline: 'NIDHI-EIR support', logo: 'stpi.webp' },
  { name: 'UnLtd India', tagline: 'Social Enterprise Support', logo: 'unltd.jpg' },
  { name: 'STPI Bhubaneswar', tagline: 'Technology Ecosystem Support', logo: 'stpi.webp' },
];

const ecosystemTimeline = [
  { year: '2024', title: 'Pre-incubated by AIC-IIIT Kottayam', desc: 'First pre-incubation — marked the beginning of the formal EarthImpact journey.' },
  { year: '2024–25', title: 'Research & Prototype Development', desc: 'Deep research, material innovation and early prototyping at NIT Calicut.' },
  { year: '2025', title: 'ReFlow Hackathon Winner', desc: 'Won ReFlow Menstrual Health Innovation Hackathon.' },
  { year: 'Feb 2025', title: 'Company Incorporated', desc: 'EarthImpact Innovations Pvt. Ltd. officially incorporated.' },
  { year: '2025', title: 'NIDHI-PRAYAS & NIDHI-EIR', desc: 'Received NIDHI-PRAYAS through TBI NIT Calicut and NIDHI-EIR through IIM Calcutta Innovation Park.' },
  { year: '2025–26', title: 'GUESSS India & UnLtd India Recognition', desc: 'Soham Srivastava recognised as GUESSS India Entrepreneur. Supported by UnLtd India.' },
];

const networkCategories = [
  {
    icon: '🚀',
    title: 'Incubation & Innovation Support',
    desc: 'Supported by incubators and innovation programmes that empower deep-tech startups.',
    members: ['AIC-IIIT Kottayam', 'SIIC IIT Kanpur', 'TBI NIT Calicut', 'IIM Calcutta Innovation Park'],
  },
  {
    icon: '🏆',
    title: 'Challenge & Recognition',
    desc: 'Recognised through competitive innovation challenges and entrepreneur programmes.',
    members: ['ReFlow Hackathon Winner', 'GUESSS India Entrepreneur'],
  },
  {
    icon: '🏛️',
    title: 'Government & Technology Ecosystem',
    desc: 'Supported by government-backed bodies that empower innovation startups.',
    members: ['STPI Bhubaneswar', 'NIDHI-PRAYAS', 'NIDHI-EIR'],
  },
  {
    icon: '🤝',
    title: 'Community & Impact',
    desc: 'Supported by organisations that champion social enterprise and impact.',
    members: ['UnLtd India'],
  },
];

export default function EcosystemSupportPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className="section-tag">ECOSYSTEM SUPPORT & NETWORKS 🌿</p>
            <h1 className={styles.heroTitle}>
              Stronger Together.<br />
              Building Impact<br />
              Through <span className={styles.green}>Ecosystems.</span>
            </h1>
            <p className={styles.heroDesc}>
              EarthImpact is proud to be supported by leading incubators, innovators, and government bodies who believe in our mission and empower us to build solutions that matter.
            </p>
            <Link href="/our-story" className="btn btn-primary">
              Our Journey So Far →
            </Link>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.handsImage}>
              <div className={styles.handsCircle}>
                <img
                  src="/images/nature/hands-plant.png"
                  alt="Hands holding a plant seedling — ecosystem collaboration"
                  className={styles.handsImg}
                />
              </div>
              <div className={styles.quoteCard}>
                <span className={styles.quoteIcon}>"</span>
                <p className={styles.quoteText}>
                  Together with our ecosystem, we are building innovations that create real impact for women and our planet.
                </p>
                <div className={styles.quoteStar}>✦</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INCUBATORS ===================== */}
      <section className={styles.incubators}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span>🏛️</span>
            <p className={styles.incubatorTag}>INCUBATORS & GOVERNMENT SUPPORT</p>
          </div>
          <div className={styles.incubatorsGrid}>
            {incubators.map(({ name, tagline, logo }) => (
              <div key={name} className={styles.incubatorCard}>
                <div className={styles.incubatorLogo}>
                  <img src={`/images/logos/incubators/${logo}`} alt={name} className={styles.incubatorImg} />
                </div>
                <p className={styles.incubatorName}>{name}</p>
                <p className={styles.incubatorTagline}>{tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ECOSYSTEM TIMELINE ===================== */}
      <section className={styles.timelineSection}>
        <div className="container">
          <p className={styles.timelineTag}>OUR JOURNEY WITH THE ECOSYSTEM</p>
          <div className={styles.timelineTrack}>
            <div className={styles.timelineLine}></div>
            {ecosystemTimeline.map(({ year, title, desc }, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <div className={styles.timelineIcon}>
                    {['🌱','🔬','👥','🚀','🏆','🌍'][i]}
                  </div>
                </div>
                <p className={styles.timelineYear}>{year}</p>
                <h3 className={styles.timelineTitle}>{title}</h3>
                <p className={styles.timelineDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ECOSYSTEM NETWORK ===================== */}
      <section className={styles.network}>
        <div className="container">
          <div className={styles.networkHeader}>
            <span>👥</span>
            <p className={styles.networkTag}>OUR ECOSYSTEM NETWORK</p>
          </div>
          <div className={styles.networkGrid}>
            {networkCategories.map(({ icon, title, desc, members }) => (
              <div key={title} className={styles.networkCard}>
                <div className={styles.networkIcon}>{icon}</div>
                <h3 className={styles.networkTitle}>{title}</h3>
                <p className={styles.networkDesc}>{desc}</p>
                <div className={styles.networkMembers}>
                  {members.map(m => (
                    <span key={m} className={styles.memberBadge}>{m}</span>
                  ))}
                </div>
                <p className={styles.networkMore}>...and more</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaLeft}>
              <div className={styles.ctaPlant}>🌱</div>
              <div>
                <h3 className={styles.ctaTitle}>We believe collaboration is the catalyst for meaningful innovation.</h3>
                <p className={styles.ctaDesc}>Together, we can build a healthier world for women and a greener future for generations.</p>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <div className={styles.ctaMailIcon}>✉️</div>
              <div>
                <h3 className={styles.ctaRightTitle}>Interested in partnering with us?<br />Let's build impact together.</h3>
                <Link href="/contact" className={styles.ctaBtn}>Let's Connect →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <div className={styles.bottomStrip}>
        <span>Science-backed • Non-toxic • Biodegradable • Responsible</span>
        <span className={styles.stripRight}>Care that understands. Innovation that protects.</span>
        <span className={styles.goldStar}>✦</span>
      </div>

      <Footer />
    </>
  );
}
