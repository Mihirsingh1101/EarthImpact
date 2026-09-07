import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../privacy-policy/page.module.css';

export const metadata = {
  title: 'Terms of Use | EarthImpact Innovations',
  description: 'Terms of Use for earthimpact.co.in — EarthImpact Innovations Pvt. Ltd.',
  alternates: { canonical: 'https://earthimpact.co.in/terms' },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="section-tag">LEGAL 📋</p>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.updated}>Last updated: September 2026</p>
        </div>
      </section>

      <section className={`${styles.content} section`}>
        <div className="container">
          <div className={styles.policy}>

            <p className={styles.intro}>
              Welcome to <strong>earthimpact.co.in</strong>, the official website of EarthImpact Innovations Pvt. Ltd. (&ldquo;EarthImpact&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing or using this Site, you agree to be bound by these Terms of Use.
            </p>

            <h2>1. Use of the Site</h2>
            <p>
              You may use this Site for lawful purposes only. You agree not to use the Site in any way that violates applicable laws or regulations, infringes upon our intellectual property rights, or harms other users.
            </p>

            <h2>2. Intellectual Property</h2>
            <p>
              All content on this Site — including text, images, graphics, logos, product descriptions and design — is the property of EarthImpact Innovations Pvt. Ltd. and is protected under applicable intellectual property laws. You may not reproduce, distribute or use our content without explicit written permission.
            </p>

            <h2>3. No Product Claims</h2>
            <p>
              Content on this Site is for informational purposes only. Nothing on this Site constitutes medical advice, a therapeutic claim or a guarantee of product efficacy. EarthImpact's products are not intended to diagnose, treat, cure or prevent any disease.
            </p>

            <h2>4. Contact Forms and Communications</h2>
            <p>
              By submitting a message through our contact form, you consent to EarthImpact using that information to respond to your enquiry. We do not sell or share your contact information with third parties except as described in our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>

            <h2>5. External Links</h2>
            <p>
              Our Site may contain links to third-party websites. These are provided for convenience only. EarthImpact does not endorse or take responsibility for the content of external sites.
            </p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>
              The Site is provided &ldquo;as is&rdquo; without warranties of any kind. We do not warrant that the Site will be error-free or uninterrupted.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, EarthImpact Innovations Pvt. Ltd. shall not be liable for any indirect, incidental or consequential damages arising from your use of the Site.
            </p>

            <h2>8. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Continued use of the Site after changes constitutes acceptance of the updated Terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For questions about these Terms, contact us at:<br />
              <strong>EarthImpact Innovations Pvt. Ltd.</strong><br />
              IIT Bhubaneswar Research Park, Bhubaneswar, Odisha 751013, India<br />
              Email: <a href="mailto:info@earthimpact.co.in">info@earthimpact.co.in</a>
            </p>

            <div className={styles.backLink}>
              <Link href="/" className="btn btn-secondary">← Back to Home</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
