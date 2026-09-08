import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Insights | EarthImpact Innovations',
  description: 'Evidence-based articles on menstrual health, sustainable materials, endocrine-disrupting chemicals and biodegradable menstrual care — by EarthImpact Innovations.',
  alternates: { canonical: 'https://earthimpact.co.in/insights' },
  openGraph: {
    title: 'Insights | EarthImpact Innovations',
    description: 'Evidence-based articles on menstrual health, EDCs, sustainable materials and biodegradable menstrual care.',
    url: 'https://earthimpact.co.in/insights',
  },
};

const articles = [
  {
    slug: 'what-are-edcs',
    title: 'What Are Endocrine-Disrupting Chemicals (EDCs)?',
    excerpt: 'EDCs are chemicals that interfere with the body\'s hormonal system. Many are found in everyday products — including conventional sanitary pads. Here\'s what the science says.',
    date: 'September 2026',
    readTime: '5 min read',
    tag: 'Health & Safety',
  },
  // Future articles will be added here
  {
    slug: null,
    title: 'Why Menstrual Waste Is a Growing Environmental Problem in India',
    excerpt: 'India generates an estimated ~1.13 lakh tonnes of used sanitary-pad waste reaching landfills annually. Most is plastic-based and can persist for centuries. Here\'s why this matters.',
    date: 'Coming Soon',
    readTime: null,
    tag: 'Environment',
  },
  {
    slug: null,
    title: 'What Is the Difference Between Biodegradable and Compostable Menstrual Products?',
    excerpt: 'The terms biodegradable and compostable are often used interchangeably, but they mean very different things. Understanding the difference matters when making a safer choice.',
    date: 'Coming Soon',
    readTime: null,
    tag: 'Materials & Science',
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className="container">
          <p className="section-tag">INSIGHTS 🌿</p>
          <h1 className={styles.heroTitle}>Evidence-based writing on menstrual health, materials and sustainability.</h1>
          <p className={styles.heroDesc}>
            We write about things that matter — the science behind safer products, the reality of menstrual waste, and the innovations changing everyday care. Written by the EarthImpact team.
          </p>
        </div>
      </section>

      {/* ===================== ARTICLES ===================== */}
      <section className={`${styles.articles} section`}>
        <div className="container">
          <div className={styles.articlesGrid}>
            {articles.map(({ slug, title, excerpt, date, readTime, tag }) => (
              <div key={title} className={`${styles.articleCard} ${!slug ? styles.articleCardSoon : ''}`}>
                <div className={styles.articleMeta}>
                  <span className={styles.articleTag}>{tag}</span>
                  {readTime && <span className={styles.articleRead}>{readTime}</span>}
                </div>
                <h2 className={styles.articleTitle}>{title}</h2>
                <p className={styles.articleExcerpt}>{excerpt}</p>
                <div className={styles.articleFooter}>
                  <span className={styles.articleDate}>{date}</span>
                  {slug ? (
                    <Link href={`/insights/${slug}`} className={styles.articleLink}>
                      Read Article →
                    </Link>
                  ) : (
                    <span className={styles.articleSoon}>Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
