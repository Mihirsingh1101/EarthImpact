import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Awards & Media – Recognized Today, Creating Impact for Tomorrow | EarthImpact',
  description: 'EarthImpact\'s journey of innovation and impact has been recognized by leading organizations, media platforms, and changemakers.',
};

const recognitions = [
  {
    name: 'STPI Incorporation',
    subtitle: '',
    badge: 'GOVERNMENT RECOGNITION',
    desc: 'Officially recognized by STPI for our deep-tech innovation in women\'s health and sustainable materials.',
    year: '2025',
    logo: 'stpi.webp'
  },
  {
    name: 'AIC IIT Kottayam Incubated Startup',
    subtitle: '',
    badge: 'INCUBATION SUPPORT',
    desc: 'Proud to be incubated at AIC IIT Kottayam and part of a strong innovation-driven startup ecosystem.',
    year: '2024',
    logo: 'aic.jpeg'
  },
  {
    name: 'UNICEF India Collaborative Partner',
    subtitle: '',
    badge: 'COLLABORATION',
    desc: 'Working together for safer, healthier and more dignified menstrual care for every woman.',
    year: '2024',
    logo: 'unicef-logo.png'
  },
];

const mediaMentions = [
  { outlet: 'YOURSTORY', type: 'Featured Story', headline: 'How EarthImpact is making menstrual care safe, non-toxic and sustainable.', date: 'May 2025', logo: 'yourstory.webp' },
];

const milestones = [
  { year: '2024', event: 'Incubated by AIC IIT Kottayam', desc: 'Began our innovation journey with strong mentorship and support.', icon: '🏆' },
  { year: '2024', event: 'Research & Development', desc: 'Launched deep research in non-toxic, biodegradable materials.', icon: '🔬' },
  { year: '2025', event: 'Company Incorporated', desc: 'EarthImpact Innovations Pvt. Ltd. was officially incorporated.', icon: '🚀' },
  { year: '2025', event: 'Hackathon Winner', desc: 'Won ReFlow Menstrual Health Hackathon by IIT BBS & UNICEF India.', icon: '👥' },
  { year: '2025', event: 'Recognized by STPI & GUESSS', desc: 'Recognized for innovation and entrepreneurship excellence.', icon: '🏅' },
  { year: 'Ongoing', event: 'Growing Impact, Scaling Solutions', desc: 'Continuing to innovate, collaborate and create real impact.', icon: '🌿' },
];

export default function AwardsMediaPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className="section-tag">AWARDS & RECOGNITION ✦</p>
            <h1 className={styles.heroTitle}>
              Recognized Today.<br />
              Creating Impact<br />
              for Tomorrow.
              <span className={styles.goldStar}>✦</span>
            </h1>
            <p className={styles.heroDesc}>
              Our journey of innovation and impact has been recognized by leading organizations, media platforms, and changemakers who believe in building a better, safer and more sustainable world.
            </p>

            <div className={styles.statsRow}>
              {[
                { icon: '🏆', num: '15+', label: 'Awards & Recognitions' },
                { icon: '📰', num: '20+', label: 'Media Mentions' },
                { icon: '👥', num: '10+', label: 'Prestigious Platforms' },
              ].map(({ icon, num, label }) => (
                <div key={num} className={styles.miniStat}>
                  <span className={styles.miniStatIcon}>{icon}</span>
                  <div>
                    <p className={styles.miniStatNum}>{num}</p>
                    <p className={styles.miniStatLabel}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED RECOGNITIONS ===================== */}
      <section className={styles.recognitions}>
        <div className="container">
          <p className={styles.recTag}>🌿 &nbsp; FEATURED RECOGNITIONS</p>
          <div className={styles.recGrid}>
            {recognitions.map(({ name, badge, desc, year, logo }) => (
              <div key={name} className={styles.recCard}>
                <div className={styles.recCardTop}>
                  <img src={`/images/logos/incubators/${logo}`} alt={name} className={styles.recImg} />
                </div>
                <p className={styles.recName}>{name}</p>
                <span className={styles.recBadge}>{badge}</span>
                <p className={styles.recDesc}>{desc}</p>
                <p className={styles.recYear}>{year}</p>
              </div>
            ))}
          </div>
          <div className={styles.recCta}>
            <Link href="/contact" className="btn btn-primary">View All Recognitions →</Link>
          </div>
        </div>
      </section>

      {/* ===================== MEDIA MENTIONS ===================== */}
      <section className={styles.media}>
        <div className="container">
          <p className={styles.mediaSubTag}>IN THE SPOTLIGHT</p>
          <h2 className={styles.mediaTitle}>Media &amp; Press Mentions</h2>
          <div className={styles.mediaGrid}>
            {mediaMentions.map(({ outlet, type, headline, date, logo }) => (
              <div key={outlet + date} className={styles.mediaCard}>
                <div className={styles.outletTop}>
                  <img src={`/images/logos/media/${logo}`} alt={outlet} className={styles.mediaImg} />
                </div>
                <p className={styles.mediaType}>{type}</p>
                <p className={styles.mediaHeadline}>{headline}</p>
                <p className={styles.mediaDate}>{date}</p>
              </div>
            ))}
          </div>
          <div className={styles.mediaCta}>
            <button className="btn btn-secondary">Explore More Coverage →</button>
          </div>
        </div>
      </section>

      {/* ===================== MILESTONES ===================== */}
      <section className={styles.milestones}>
        <div className="container">
          <p className={styles.milestoneTag}>OUR MILESTONES, OUR MOTIVATION</p>
          <div className={styles.milestoneTrack}>
            <div className={styles.milestoneLine}></div>
            {milestones.map(({ year, event, desc, icon }, i) => (
              <div key={i} className={styles.milestoneItem}>
                <div className={styles.milestoneDot}>
                  <span className={styles.milestoneIcon}>{icon}</span>
                </div>
                <p className={styles.milestoneYear}>{year}</p>
                <h3 className={styles.milestoneEvent}>{event}</h3>
                <p className={styles.milestoneDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== QUOTE BANNER ===================== */}
      <section className={styles.quoteBanner}>
        <div className="container">
          <div className={styles.quoteGrid}>
            <div className={styles.quoteLeft}>
              <span className={styles.quoteMark}>"</span>
              <h3 className={styles.quoteTitle}>Awards are milestones, but impact is our destination.</h3>
              <p className={styles.quoteDesc}>We remain committed to creating safe products for women and a sustainable future for our planet.</p>
            </div>
            <div className={styles.quoteRight}>
              {[
                { icon: '💡', label: 'Driven by Innovation' },
                { icon: '❤️', label: 'Guided by Empathy' },
                { icon: '🌿', label: 'Inspired by Impact' },
              ].map(({ icon, label }) => (
                <div key={label} className={styles.quoteRightItem}>
                  <div className={styles.quoteItemIcon}>{icon}</div>
                  <p className={styles.quoteItemLabel}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Strip */}
      <div className={styles.bottomStrip}>
        <span>Care that understands. Innovation that protects.</span>
        <span className={styles.sep}>|</span>
        <span>Science-Backed • Non-Toxic • Biodegradable • Responsible</span>
        <span className={styles.goldStar2}>✦</span>
      </div>

      <Footer />
    </>
  );
}
