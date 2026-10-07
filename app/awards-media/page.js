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
  alternates: { canonical: 'https://www.earthimpact.co.in/awards-media' },
  openGraph: {
    title: 'Awards & Recognition – EarthImpact Innovations',
    description: 'Recognized by AIC-IIIT Kottayam, STPI and UnLtd India for innovation in women\'s health.',
    url: 'https://www.earthimpact.co.in/awards-media',
  }
};

const recognitions = [
  {
    name: 'AIC-IIIT Kottayam — Pre-incubated Startup',
    badge: 'INCUBATION SUPPORT',
    desc: 'First pre-incubation. EarthImpact was pre-incubated at AIC-IIIT Kottayam, marking the formal start of the company\'s innovation journey.',
    year: '2024',
    logo: 'aic.jpeg',
    hoverImage: 'Awarded by AIC IIITK.JPG.jpeg'
  },
  {
    name: 'Winner — ReFlow Menstrual Health Innovation Hackathon',
    badge: 'CHALLENGE WINNER',
    desc: 'Won the ReFlow Menstrual Health Hackathon 2025 — a recognition for innovation in menstrual health and sustainable product development.',
    year: '2025',
    logo: 'iit-bbs.webp',
    hoverImage: 'Winner of ReFlow Hackathon by IIT Bhubaneswar.jpg'
  },
  {
    name: 'Appreciation from HOD Gynae Dept, AIIMS Patna',
    badge: 'RECOGNITION',
    desc: 'Awarded by Dr. Mukta, Head of Department of Gynaecology, AIIMS Patna.',
    year: '2024',
    logo: 'aiimspatna.webp', 
    hoverImage: 'Awarded by Dr. Mukta AIIMS Patna HOD Gynae Dept..JPG.jpeg'
  },
  {
    name: '30 Under 30',
    badge: 'FOUNDER RECOGNITION',
    desc: 'Soham Srivastava featured on the 30 Under 30 cover page.',
    year: '2025',
    logo: '30U30.png',
    hoverImage: 'Soham 30 under 30 cover page.jpg'
  },
  {
    name: 'SIIC IIT Kanpur — Advaya 2.0',
    badge: 'PROGRAMME SELECTION',
    desc: 'Selected under Advaya 2.0 by SIIC IIT Kanpur. CSR funding received from Pernod Richard India Foundation.',
    year: '2026',
    logo: 'siic-iit kanpur.webp'
  },
  {
    name: 'TBI NIT Calicut — NIDHI-PRAYAS',
    badge: 'GOVERNMENT-BACKED INNOVATION SUPPORT',
    desc: 'Received NIDHI-PRAYAS support through TBI NIT Calicut.',
    year: '2025',
    logo: 'tbi nitc logo.jpeg'
  },
  {
    name: 'IIM Calcutta Innovation Park — NIDHI-EIR',
    badge: 'INNOVATION SUPPORT',
    desc: 'Received NIDHI-EIR support through IIM Calcutta Innovation Park.',
    year: '2024',
    logo: 'iimcip logo.jpeg'
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
            {recognitions.map(({ name, badge, desc, year, logo, hoverImage }) => (
              <div key={name} className={styles.recCard}>
                <div className={styles.recCardInner}>
                  <div className={styles.recCardTop}>
                    <img src={logo.startsWith('/') ? logo : `/images/logos/incubators/${logo}`} alt={name} className={styles.recImg} />
                  </div>
                  <p className={styles.recName}>{name}</p>
                  <span className={styles.recBadge}>{badge}</span>
                  <p className={styles.recDesc}>{desc}</p>
                  <p className={styles.recYear}>{year}</p>
                </div>
                {hoverImage && (
                  <div className={styles.recHoverImgContainer}>
                    <img src={`/images/awards/${hoverImage}`} alt={`${name} recognition photo`} className={styles.recHoverImg} />
                  </div>
                )}
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
