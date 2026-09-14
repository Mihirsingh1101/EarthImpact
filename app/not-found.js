import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leaf}>🌿</div>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page doesn&apos;t exist.</h1>
        <p className={styles.desc}>
          The page you&apos;re looking for may have moved or the URL may be incorrect.
        </p>
        <div className={styles.btns}>
          <Link href="/" className="btn btn-primary">← Back to Home</Link>
          <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/our-story">Our Story</Link>
          <Link href="/snowflake">Snowflake</Link>
          <Link href="/snowflake-cares">Snowflake Cares</Link>
          <Link href="/insights">Insights</Link>
        </nav>
      </div>
    </div>
  );
}
