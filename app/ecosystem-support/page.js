import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Ecosystem Support – Stronger Together | EarthImpact',
  description: 'EarthImpact is proud to be supported by leading incubators, innovators, and government bodies who believe in our mission.',
};

const incubators = [
  { name: 'AIC IIT Kottayam', tagline: 'Incubated in 2024', logo: 'aic.jpeg' },
  { name: 'IIT Bhubaneswar', tagline: 'Supported Innovation', logo: 'iit-bbs.webp' },
  { name: 'UNICEF India', tagline: 'Collaborative Partner', logo: 'unicef-logo.png' },
  { name: 'STPI Bhubaneswar', tagline: 'Technical Support & Recognition', logo: 'stpi.webp' },
  { name: 'UnLtd India', tagline: 'Social Entrepreneur Recognition', logo: 'unltd.jpg' },
];

const ecosystemTimeline = [
  { year: '2024', title: 'Incubated by AIC IIT Kottayam', desc: 'This marked the beginning of our innovation journey.' },
  { year: '2024', title: 'Research & Prototype', desc: 'Deep research, material innovation and early prototyping.' },
  { year: '2025', title: 'Collaborations & Hackathon Win', desc: 'Won ReFlow Menstrual Health Hackathon by IIT BBS & UNICEF India.' },
  { year: '2025', title: 'Company Incorporated', desc: 'EarthImpact Innovations Pvt. Ltd. was incorporated.' },
  { year: '2026', title: 'Recognition & Acceleration', desc: 'Recognized by STPI, GUESSS India & UnLtd India.' },
  { year: 'Beyond', title: 'Scaling Impact', desc: 'Expanding solutions, building partnerships and creating a sustainable future.' },
];

const networkCategories = [
  {
    icon: '🎓',
    title: 'Academic Partners',
    desc: 'Collaborating with premier institutions for research, innovation and validation.',
    members: ['AIC', 'IIT Bhubaneswar', 'CIPET'],
  },
  {
    icon: '🤝',
    title: 'Innovation Partners',
    desc: 'Working with innovation programs and challenge platforms.',
    members: ['UNICEF India', 'ReFlow', 'GUESSS'],
  },
  {
    icon: '🏛️',
    title: 'Government & Support Bodies',
    desc: 'Supported by organizations that empower startups and deep-tech.',
    members: ['STPI', 'DPIIT', '#startupindia'],
  },
  {
    icon: '👥',
    title: 'Community & Impact Collaborators',
    desc: 'Partnering with communities and organizations for real-world impact.',
    members: ['NGOs', 'Women Groups', 'Health Orgs'],
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
