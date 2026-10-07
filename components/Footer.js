import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <div className={styles.logoWrap} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Link href="/">
              <img src="/images/logos/earthimpact%20logo/EarthImpact%20logo.png" alt="EarthImpact Logo" width="100" height="36" style={{ objectFit: 'contain', borderRadius: '8px' }} />
            </Link>
            <div style={{ color: '#c1d1c1', fontSize: '0.85rem', letterSpacing: '0.5px' }}>Innovations Pvt. Ltd.</div>
          </div>
          <p className={styles.tagline}>Building safer, science-backed and sustainable solutions for women and our planet.</p>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/company/earthimpact-innovations" target="_blank" rel="noopener noreferrer" className={styles.social} title="Follow EarthImpact on LinkedIn">in</a>
            <a href="https://www.instagram.com/earthimpact.innovations" className={styles.social} target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/our-story">Our Story</Link></li>
            <li><Link href="/soham-srivastava">Soham Srivastava</Link></li>
            <li><Link href="/snowflake-cares">Snowflake Cares</Link></li>
            <li><Link href="/ecosystem-support">Ecosystem Support</Link></li>
            <li><Link href="/awards-media">Awards &amp; Media</Link></li>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Our Solutions</h4>
          <ul className={styles.linkList}>
            <li><Link href="/snowflake-cares">Snowflake Cares</Link></li>
            <li><Link href="/insights">Insights &amp; Research</Link></li>
            <li><Link href="/contact">Partner with Us</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Legal</h4>
          <ul className={styles.linkList}>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Use</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.quoteText}>Every choice matters. Let's build a healthier world together.</p>
          <div className={styles.leafIllustration}>
            <svg width="60" height="80" viewBox="0 0 60 80" fill="none" opacity="0.3">
              <path d="M30 10 Q50 20 48 50 Q46 70 30 75 Q14 70 12 50 Q10 20 30 10Z" stroke="#4A6050" strokeWidth="1.5" fill="none"/>
              <path d="M30 15 L30 72" stroke="#4A6050" strokeWidth="1" strokeDasharray="2,3"/>
              <path d="M30 30 Q40 28 45 35" stroke="#4A6050" strokeWidth="0.8" fill="none"/>
              <path d="M30 40 Q20 38 15 45" stroke="#4A6050" strokeWidth="0.8" fill="none"/>
              <path d="M30 50 Q40 48 44 55" stroke="#4A6050" strokeWidth="0.8" fill="none"/>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 EarthImpact Innovations Pvt. Ltd. All rights reserved.</span>
        <div className={styles.bottomRight}>
          <span>Science-Backed</span>
          <span className={styles.dot}>•</span>
          <span>Non-Toxic</span>
          <span className={styles.dot}>•</span>
          <span>Biodegradable</span>
          <span className={styles.dot}>•</span>
          <span>Responsible</span>
          <span className={styles.goldStar}>✦</span>
        </div>
      </div>
    </footer>
  );
}
