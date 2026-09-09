import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Awards, Recognition & Media | EarthImpact Innovations',
  description: 'EarthImpact Innovations recognised by AIC-IIIT Kottayam, SIIC IIT Kanpur Advaya 2.0, TBI NIT Calicut NIDHI-PRAYAS, IIM Calcutta Innovation Park NIDHI-EIR, STPI Bhubaneswar, and Winner of ReFlow Menstrual Health Hackathon.',
  keywords: [
    'EarthImpact awards', 'AIC IIIT Kottayam incubated', 'ReFlow hackathon winner',
    'SIIC IIT Kanpur Advaya 2.0', 'TBI NIT Calicut NIDHI-PRAYAS', 'IIM Calcutta NIDHI-EIR',
    'STPI Bhubaneswar recognition', 'GUESSS India entrepreneur', 'EarthImpact recognition', 'Soham Srivastava awards'
  ],
  alternates: { canonical: 'https://earthimpact.co.in/awards-media' },
  openGraph: {
    title: 'Awards & Recognition – EarthImpact Innovations',
    description: 'Recognized by AIC-IIIT Kottayam, STPI and UnLtd India for innovation in women\'s health.',
    url: 'https://earthimpact.co.in/awards-media',
  }
};

const recognitions = [
  {
    name: 'AIC-IIIT Kottayam — Pre-incubated Startup',
    badge: 'INCUBATION SUPPORT',
    desc: 'First pre-incubation. EarthImpact was pre-incubated at AIC-IIIT Kottayam, marking the formal start of the company\'s innovation journey.',
    year: '2024',
    logo: 'aic.jpeg'
  },
  {
    name: 'Winner — ReFlow Menstrual Health Innovation Hackathon',
    badge: 'CHALLENGE WINNER',
    desc: 'Won the ReFlow Menstrual Health Hackathon. The event was associated with IIT Bhubaneswar Research and Entrepreneurship Park.',
    year: '2025',
    logo: 'iit-bbs.webp'
  },
  {
    name: 'SIIC IIT Kanpur — Advaya 2.0',
    badge: 'PROGRAMME SELECTION',
    desc: 'Selected under Advaya 2.0 by SIIC IIT Kanpur. Funding received through the programme.',
    year: '2025',
    logo: 'aic.jpeg'
  },
  {
    name: 'TBI NIT Calicut — NIDHI-PRAYAS',
    badge: 'GOVERNMENT-BACKED INNOVATION SUPPORT',
    desc: 'Received NIDHI-PRAYAS support through TBI NIT Calicut.',
    year: '2025',
    logo: 'stpi.webp'
  },
  {
    name: 'IIM Calcutta Innovation Park — NIDHI-EIR',
    badge: 'INNOVATION SUPPORT',
    desc: 'Received NIDHI-EIR support through IIM Calcutta Innovation Park.',
    year: '2025',
    logo: 'stpi.webp'
  },
  {
    name: 'STPI Bhubaneswar',
    badge: 'GOVERNMENT TECHNOLOGY ECOSYSTEM',
    desc: 'Recognised by STPI Bhubaneswar under their technology ecosystem programme.',
    year: '2025',
    logo: 'stpi.webp'
  },
];

const mediaMentions = [
  { outlet: 'YOURSTORY', type: 'Featured Story', headline: 'How EarthImpact is making menstrual care safe, non-toxic and sustainable.', date: 'May 2025', logo: 'yourstory.webp' },
];

const milestones = [
  { year: '2024', event: 'Pre-incubated by AIC-IIIT Kottayam', desc: 'First pre-incubation. Began the formal EarthImpact innovation journey.', icon: '🚀' },
  { year: '2024–25', event: 'Research & Development', desc: 'Deep research in non-toxic, biodegradable materials and early prototyping.', icon: '🔬' },
  { year: 'Feb 2025', event: 'Company Incorporated', desc: 'EarthImpact Innovations Pvt. Ltd. officially incorporated.', icon: '🏛️' },
  { year: '2025', event: 'Winner — ReFlow Menstrual Health Hackathon', desc: 'Won the ReFlow Menstrual Health Innovation Hackathon.', icon: '🏆' },
  { year: '2025', event: 'SIIC IIT Kanpur — Advaya 2.0', desc: 'Selected under Advaya 2.0; funding received.', icon: '🎯' },
  { year: '2025', event: 'TBI NIT Calicut — NIDHI-PRAYAS', desc: 'Received NIDHI-PRAYAS support through TBI NIT Calicut.', icon: '🤝' },
  { year: '2025', event: 'IIM Calcutta Innovation Park — NIDHI-EIR', desc: 'Received NIDHI-EIR support.', icon: '🏅' },
  { year: '2025–26', event: 'GUESSS India & UnLtd India', desc: 'Soham Srivastava recognised as GUESSS India Entrepreneur. Supported by UnLtd India.', icon: '🌍' },
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
                { icon: '🚀', num: 'Selected', label: 'Recognitions' },
                { icon: '🔬', num: 'NIDHI', label: 'PRAYAS & EIR Support' },
                { icon: '🏆', num: 'Advaya', label: '2.0 IIT Kanpur' },
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
