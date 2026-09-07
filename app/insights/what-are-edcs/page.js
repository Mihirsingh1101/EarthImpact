import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'What Are Endocrine-Disrupting Chemicals (EDCs)? | EarthImpact Insights',
  description: 'EDCs are chemicals that interfere with the body\'s hormonal system. Many are found in conventional sanitary pads. Learn what the science says and what safer alternatives look like.',
  alternates: { canonical: 'https://earthimpact.co.in/insights/what-are-edcs' },
  openGraph: {
    title: 'What Are Endocrine-Disrupting Chemicals (EDCs)? | EarthImpact Insights',
    description: 'EDCs in everyday menstrual products — what they are, how they work, and why EarthImpact is building around them.',
    url: 'https://earthimpact.co.in/insights/what-are-edcs',
  },
};

export default function WhatAreEDCsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Are Endocrine-Disrupting Chemicals (EDCs)?",
    "description": "EDCs are chemicals that interfere with the body's hormonal system. Many are found in conventional sanitary pads. Here's what the science says.",
    "datePublished": "2026-09-05",
    "dateModified": "2026-09-05",
    "author": {
      "@type": "Person",
      "name": "Soham Srivastava",
      "url": "https://earthimpact.co.in/soham-srivastava"
    },
    "publisher": {
      "@id": "https://earthimpact.co.in/#organization"
    },
    "mainEntityOfPage": "https://earthimpact.co.in/insights/what-are-edcs"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* ===================== HERO ===================== */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/insights" className={styles.breadcrumbLink}>← Back to Insights</Link>
          </div>
          <div className={styles.articleMeta}>
            <span className={styles.articleTag}>Health &amp; Safety</span>
            <span className={styles.articleDate}>September 2026</span>
            <span className={styles.articleRead}>5 min read</span>
          </div>
          <h1 className={styles.heroTitle}>
            What Are Endocrine-Disrupting Chemicals (EDCs)?
          </h1>
          <p className={styles.heroDesc}>
            EDCs are chemicals that interfere with the body's hormonal system. Research has found them in conventional sanitary pads. Here's what the science says — and why it matters for every woman.
          </p>
          <div className={styles.authorRow}>
            <img
              src="/images/founder/soham.jpg"
              alt="Soham Srivastava"
              className={styles.authorAvatar}
            />
            <div>
              <Link href="/soham-srivastava" className={styles.authorName}>Soham Srivastava</Link>
              <p className={styles.authorRole}>Founder, EarthImpact Innovations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ARTICLE BODY ===================== */}
      <article className={`${styles.article} section`}>
        <div className="container">
          <div className={styles.articleLayout}>
            <div className={styles.articleBody}>

              <p className={styles.lead}>
                Every month, millions of women use conventional sanitary pads for several days at a time. What most people don't know is that many conventional pads contain chemicals that belong to a category called endocrine-disrupting chemicals, or EDCs — substances that can interfere with the body's hormonal system.
              </p>

              <h2>What Is the Endocrine System?</h2>
              <p>
                The endocrine system is the body's hormonal network — a collection of glands that produce and release hormones controlling growth, metabolism, reproduction, mood and immune function. Hormones act as chemical messengers, and the system is highly sensitive to very small quantities of chemical signals.
              </p>
              <p>
                This sensitivity is also what makes the system vulnerable: certain external chemicals can mimic, block or otherwise interfere with natural hormones at extremely low concentrations.
              </p>

              <h2>What Are Endocrine-Disrupting Chemicals?</h2>
              <p>
                Endocrine-disrupting chemicals (EDCs) are substances — natural or synthetic — that can alter the function of the endocrine system, potentially causing adverse health effects. The World Health Organization and the United Nations Environment Programme have identified EDCs as a global concern.
              </p>
              <p>
                Common examples of EDCs found in consumer and industrial products include:
              </p>
              <ul className={styles.list}>
                <li><strong>Phthalates</strong> — used to make plastics flexible; found in many personal care products</li>
                <li><strong>Bisphenol A (BPA)</strong> — found in plastics and linings; known to mimic oestrogen</li>
                <li><strong>Dioxins and furans</strong> — by-products of chlorine bleaching processes used in some absorbent materials</li>
                <li><strong>Volatile Organic Compounds (VOCs)</strong> — found in fragrances and adhesives</li>
                <li><strong>Pesticide residues</strong> — possible in non-organic cotton-based materials</li>
              </ul>

              <h2>EDCs and Conventional Sanitary Pads</h2>
              <p>
                Research has identified EDCs and other potentially harmful substances in commercially available sanitary pads. A study published in <em>Reproductive Toxicology</em> detected phthalates, BPA and other volatile chemicals in products tested across multiple countries. The concern is not simply exposure but the duration and proximity: a sanitary pad is in contact with one of the most permeable and sensitive areas of the body for 4–8 hours per use, multiple days per month, for decades.
              </p>
              <p>
                Conventional pad manufacturing often involves:
              </p>
              <ul className={styles.list}>
                <li>Chlorine bleaching of pulp, which can produce dioxins</li>
                <li>Synthetic superabsorbent polymers (SAPs) with chemical coatings</li>
                <li>Plastic leak-guard layers and back sheets</li>
                <li>Adhesives and fragrance chemicals (including VOCs)</li>
              </ul>
              <div className={styles.callout}>
                <span className={styles.calloutIcon}>🔬</span>
                <p>
                  <strong>What the data shows:</strong> Conventional sanitary pads have been found to contain over 20 potentially harmful chemicals, including EDCs, VOCs and allergens. The long-term health effects of cumulative low-dose exposure remain an area of active research.
                </p>
              </div>

              <h2>What Does "Endocrine-Safe" Mean?</h2>
              <p>
                An endocrine-safe product is designed and formulated to avoid chemicals that are known or suspected to disrupt hormonal function. This typically means:
              </p>
              <ul className={styles.list}>
                <li>Avoiding phthalates, BPA, dioxins, parabens and synthetic fragrances</li>
                <li>Using plant-based or naturally derived materials where possible</li>
                <li>Avoiding chlorine bleaching processes that produce harmful by-products</li>
                <li>Minimising the use of synthetic adhesives and chemical coatings</li>
              </ul>
              <p>
                At EarthImpact, designing for endocrine safety is a core principle — not a marketing claim. Our Snowflake pad is built around materials selected specifically to avoid known EDC sources.
              </p>

              <h2>The Regulatory Gap</h2>
              <p>
                In India and in many other countries, there are no mandatory requirements for sanitary pad manufacturers to disclose the full list of chemicals used in their products. This means that consumers are often making choices without access to the information they need to protect themselves.
              </p>
              <p>
                Advocacy for better regulation and product transparency is part of the broader mission at EarthImpact — because women deserve to know what is in the products they use.
              </p>

              <h2>What Can You Do?</h2>
              <p>
                The most direct step is to choose products made with transparent, non-toxic materials. When evaluating menstrual products, look for:
              </p>
              <ul className={styles.list}>
                <li>Explicit claims of "phthalate-free", "BPA-free", "fragrance-free" and "dioxin-free"</li>
                <li>Plastic-free construction across all layers</li>
                <li>Materials derived from plant-based sources where possible</li>
                <li>Brands that publish ingredient or material disclosures</li>
              </ul>

              {/* CTA */}
              <div className={styles.articleCta}>
                <p className={styles.ctaText}>
                  Learn how Snowflake by EarthImpact is designed to be non-toxic, endocrine-safe and plastic-free.
                </p>
                <Link href="/snowflake-cares" className="btn btn-primary">
                  Explore Snowflake Cares →
                </Link>
              </div>

              {/* Sources */}
              <div className={styles.sources}>
                <h3>Sources & Further Reading</h3>
                <ul className={styles.sourceList}>
                  <li>
                    WHO/UNEP — <a href="https://www.who.int/publications/i/item/WHO-HEP-ECH-EDC-2013.1" target="_blank" rel="noopener noreferrer">State of the Science of Endocrine Disrupting Chemicals (2012)</a>
                  </li>
                  <li>
                    Boisen, K.A. et al. — Research on EDCs in personal care products, <em>Reproductive Toxicology</em>
                  </li>
                  <li>
                    U.S. EPA — <a href="https://www.epa.gov/endocrine-disruption" target="_blank" rel="noopener noreferrer">Endocrine Disruption research and resources</a>
                  </li>
                </ul>
                <p className={styles.disclaimer}>
                  This article presents publicly available scientific research and regulatory information. It is not medical advice. EarthImpact Innovations does not make therapeutic claims about its products.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarTitle}>About the Author</p>
                <img
                  src="/images/founder/soham.jpg"
                  alt="Soham Srivastava"
                  className={styles.sidebarAvatar}
                />
                <Link href="/soham-srivastava" className={styles.sidebarAuthorName}>Soham Srivastava</Link>
                <p className={styles.sidebarAuthorRole}>Founder, EarthImpact Innovations</p>
              </div>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarTitle}>Explore Snowflake</p>
                <p className={styles.sidebarText}>Our non-toxic, endocrine-safe and biodegradable sanitary pad.</p>
                <Link href="/snowflake-cares" className={`btn btn-primary ${styles.sidebarBtn}`}>
                  Learn More →
                </Link>
              </div>
              <div className={styles.sidebarCard}>
                <p className={styles.sidebarTitle}>More Articles</p>
                <Link href="/insights" className={styles.sidebarLink}>← All Insights</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
