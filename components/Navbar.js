'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Snowflake Cares', href: '/snowflake-cares' },
  { label: 'Ecosystem Support', href: '/ecosystem-support' },
  { label: 'Awards & Media', href: '/awards-media' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2C14 2 8 8 8 15a6 6 0 0012 0C20 8 14 2 14 2z" fill="#2C3D2E"/>
              <path d="M14 8C14 8 10 12 10 17a4 4 0 008 0C18 12 14 8 14 8z" fill="#4A6050"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>earth</span>
            <span className={styles.logoBold}>impact.</span>
            <span className={styles.logoSub}>Innovations Pvt. Ltd.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className={styles.ctaBtn}>
          Get in Touch
        </Link>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen2 : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen3 : styles.bar}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
