import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Story – Soham Srivastava, Founder of EarthImpact Innovations',
  description: 'Meet Soham Srivastava, founder of EarthImpact Innovations Pvt. Ltd. Learn how a personal experience at IIT Bhubaneswar sparked a mission to create safe, biodegradable sanitary pads for women in India.',
  keywords: [
    'Soham Srivastava', 'Soham Srivastav', 'Soham Srivastava EarthImpact',
    'EarthImpact Innovations founder', 'IIT Bhubaneswar entrepreneur',
    'menstrual health innovator India', 'Snowflakes pad founder',
    'sustainable startup Bhubaneswar Odisha', 'EarthImpact story'
  ],
  alternates: { canonical: 'https://earthimpact.co.in/our-story' },
  openGraph: {
    title: 'Our Story – Soham Srivastava, Founder of EarthImpact Innovations',
    description: 'Meet Soham Srivastava, founder of EarthImpact Innovations. From IIT Bhubaneswar to building India\'s safest biodegradable sanitary pad.',
    url: 'https://earthimpact.co.in/our-story',
    images: [{ url: 'https://earthimpact.co.in/images/founder/soham.jpg', alt: 'Soham Srivastava - Founder EarthImpact' }],
  }
};


const timelineItems = [
  {
    icon: '💡',
    title: 'The Spark',
    period: '(Early 2024)',
    desc: 'A personal experience made us question the safety of conventional menstrual products.',
  },
  {
    icon: '📖',
    title: 'Research & Exploration',
    period: '(2024)',
    desc: 'We dived deep into science, materials and real-world data to understand the problem better.',
  },
  {
    icon: '🔬',
    title: '1.5 Years of R&D',
    period: '(2024)',
    desc: 'Extensive experimentation to develop non-toxic, endocrine-safe and biodegradable solutions.',
  },
  {
    icon: '🌿',
    title: 'From Idea to EarthImpact',
    period: '(Feb 2025)',
    desc: 'EarthImpact Innovations Pvt. Ltd. was incorporated to turn our research into real products and real impact.',
  },
  {
    icon: '🩹',
    title: 'Creating Snowflake',
    period: '(2025)',
    desc: 'Our first product line Snowflake — a safe, comfortable and sustainable menstrual care solution.',
  },
  {
    icon: '🌍',
    title: 'Building for a Better Tomorrow',
    period: '(Ongoing)',
    desc: 'Scaling impact, collaborating with ecosystems and working towards a healthier planet for future generations.',
  },
];

export default function OurStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Soham Srivastav",
            "jobTitle": "Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "EarthImpact Innovations Pvt. Ltd."
            },
            "url": "https://earthimpact.co.in/our-story",
            "description": "Founder of EarthImpact Innovations, focusing on safe, non-toxic, and sustainable menstrual care."
          })
        }}
      />
      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className="section-tag">OUR STORY 🌿</p>
            <h1 className={styles.heroTitle}>
              A personal journey.<br />
              A purpose-driven mission.
            </h1>
            <p className={styles.heroDesc}>
              EarthImpact was born from a real-life experience that opened our eyes to a hidden crisis in menstrual care—one that impacts millions of women and our planet.
            </p>
            <p className={styles.heroDesc}>
              What started as a moment of pain and curiosity, turned into years of research, innovation, and relentless commitment to build solutions that are truly safe, sustainable, and responsible.
            </p>

            <div className={styles.pillarsGrid}>
              {[
                { icon: '❤️', title: 'Rooted in Empathy', desc: 'Real experiences spark real change.' },
                { icon: '🧪', title: 'Driven by Science', desc: '1.5+ years of deep research & innovation.' },
                { icon: '🌿', title: 'Committed to Sustainability', desc: 'Solutions that are kind to you and the planet.' },
                { icon: '👥', title: 'Built for Impact', desc: 'Creating meaningful, long-term change.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{icon}</div>
                  <p className={styles.pillarTitle}>{title}</p>
                  <p className={styles.pillarDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.founderCircle}>
              <div className={styles.founderBg}>
                <img
                  src="/images/founder/soham.jpg"
                  alt="Soham Srivastava - Founder & Chief Empathy Officer"
                  className={styles.founderImg}
                />
              </div>
              <div className={styles.founderCard}>
                <p className={styles.founderName}>Soham Srivastava</p>
                <p className={styles.founderTitle}>Founder &amp; Chief Empathy Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== JOURNEY TIMELINE ===================== */}
      <section className={styles.timeline}>
        <div className="container">
          <p className="section-tag" style={{ justifyContent: 'center', marginBottom: 8 }}>🌿</p>
          <p className={styles.timelineTag}>OUR JOURNEY SO FAR</p>

          <div className={styles.timelineTrack}>
            <div className={styles.timelineLine}></div>
            {timelineItems.map(({ icon, title, period, desc }, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot}>
                  <div className={styles.timelineIcon}>{icon}</div>
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{title}</h3>
                  <p className={styles.timelinePeriod}>{period}</p>
                  <p className={styles.timelineDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY WE EXIST ===================== */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <p className="section-tag">WHY WE EXIST 🌿</p>
              <h2 className={styles.whyTitle}>
                To create safe, sustainable and science-backed solutions for every woman.
              </h2>
              <p className={styles.whyDesc}>
                We believe every woman deserves products that are safe for her body and gentle on our planet.
              </p>
            </div>

            <div className={styles.whyCards}>
              {[
                {
                  icon: '🛡️',
                  title: 'Our Mission',
                  desc: 'To innovate and deliver non-toxic, endocrine-safe and biodegradable products that improve women\'s health and reduce environmental harm.',
                },
                {
                  icon: '👁️',
                  title: 'Our Vision',
                  desc: 'A world where menstrual care is safe, sustainable and accessible for every woman.',
                },
                {
                  icon: '🎯',
                  title: 'Our Purpose',
                  desc: 'To combine science, empathy and innovation to solve real problems and create lasting positive impact.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrap}>
                    <div className={styles.whyCardIcon}>{icon}</div>
                  </div>
                  <h3 className={styles.whyCardTitle}>{title}</h3>
                  <p className={styles.whyCardDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUOTE BANNER ===================== */}
      <section className={styles.quoteBanner}>
        <img src="/images/nature/forest-river.png" alt="Misty forest landscape" className={styles.quoteBannerBgImg} />
        <div className={styles.quoteBannerContent}>
          <span className={styles.quoteMarkLarge}>&quot;</span>
          <blockquote className={styles.quoteText}>
            EarthImpact is more than a company.<br />
            It's a commitment to health, sustainability<br />
            and a better future for all.
          </blockquote>
          <div className={styles.quoteStar}>✦</div>
          <p className={styles.quoteBottom}>
            We are just getting started.<br />
            The best impact is yet to come.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
