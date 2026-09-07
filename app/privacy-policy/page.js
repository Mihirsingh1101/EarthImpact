import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Privacy Policy | EarthImpact Innovations',
  description: 'Privacy Policy for EarthImpact Innovations Pvt. Ltd. — how we collect, use and protect your data on earthimpact.co.in.',
  alternates: { canonical: 'https://earthimpact.co.in/privacy-policy' },
  robots: { index: false }, // Legal pages are typically noindexed
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className="section-tag">LEGAL 📋</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: September 2026</p>
        </div>
      </section>

      <section className={`${styles.content} section`}>
        <div className="container">
          <div className={styles.policy}>

            <p className={styles.intro}>
              EarthImpact Innovations Pvt. Ltd. (&ldquo;EarthImpact&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit <strong>earthimpact.co.in</strong> (the &ldquo;Site&rdquo;).
            </p>
            <p className={styles.intro}>
              Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Information you provide directly</strong> — such as your name, email address, organisation and message when you use our contact form.</li>
              <li><strong>Usage data</strong> — pages visited, time spent on the Site, browser type and operating system, collected via Google Analytics 4 and Microsoft Clarity.</li>
              <li><strong>Newsletter subscriptions</strong> — if you subscribe to our newsletter, your email address is collected and managed by our chosen email marketing provider.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your enquiries and messages</li>
              <li>Send newsletters and updates (only if you have subscribed)</li>
              <li>Understand how visitors use the Site to improve content and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Analytics and Tracking Tools</h2>
            <p>
              We use <strong>Google Analytics 4</strong> to measure website traffic and user behaviour. Google Analytics uses cookies and similar technologies. Data is anonymised and aggregated. You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>
            <p>
              We also use <strong>Microsoft Clarity</strong> for behavioural analytics including heatmaps and session recordings. Microsoft Clarity does not sell personal data. You can learn more at <a href="https://clarity.microsoft.com/privacy" target="_blank" rel="noopener noreferrer">clarity.microsoft.com/privacy</a>.
            </p>

            <h2>4. Contact Form</h2>
            <p>
              When you submit our contact form, your message is processed by <strong>Formspree</strong>, a third-party form processing service. Please review <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree's Privacy Policy</a>.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement reasonable technical and organisational measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our Site may link to external websites. We are not responsible for the privacy practices of those websites.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct or request deletion of your personal data. To exercise these rights, contact us at <a href="mailto:info@earthimpact.co.in">info@earthimpact.co.in</a>.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by a revised &ldquo;Last updated&rdquo; date at the top of this page.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact:<br />
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
