'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', org: '', subject: '', message: '', updates: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactTypes = [
    { icon: '👥', label: 'For Partnerships', desc: "Let's collaborate for bigger impact." },
    { icon: '💼', label: 'For Investors', desc: 'Invest in innovations that matter.' },
    { icon: '📣', label: 'For Media', desc: 'Stories that inspire change.' },
  ];

  return (
    <>
      {/* ===================== HERO / CONTACT FORM ===================== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <svg width="100%" height="100%" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" fill="none">
            <rect width="1440" height="700" fill="#F5F1E8"/>
            <ellipse cx="1000" cy="400" rx="500" ry="400" fill="#E8E3D8" opacity="0.4"/>
            <path d="M900 100 Q1200 200 1440 400 L1440 700 L900 700Z" fill="#EDE8DB" opacity="0.5"/>
          </svg>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className="section-tag">LET'S CREATE IMPACT TOGETHER ✦</p>
            <h1 className={styles.heroTitle}>
              We'd love to<br />
              hear from you.
              <span className={styles.leavesEmoji}>🌿</span>
            </h1>
            <p className={styles.heroDesc}>
              Whether you're a partner, investor, researcher, organization, or someone who believes in our mission — let's connect and build a healthier world for women and our planet.
            </p>

            <div className={styles.contactTypes}>
              {contactTypes.map(({ icon, label, desc }) => (
                <div key={label} className={styles.contactType}>
                  <div className={styles.ctIcon}>{icon}</div>
                  <div>
                    <p className={styles.ctLabel}>{label}</p>
                    <p className={styles.ctDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✅</div>
                <h3>Message sent!</h3>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>Send us a message</h2>
                <p className={styles.formSubtitle}>We'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.inputWrap}>
                      <span className={styles.inputIcon}>👤</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.inputWrap}>
                      <span className={styles.inputIcon}>✉️</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                      />
                    </div>
                  </div>
                  <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}>🏢</span>
                    <input
                      type="text"
                      name="org"
                      placeholder="Organization (Optional)"
                      value={formData.org}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}>📌</span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}>✏️</span>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${styles.input} ${styles.textarea}`}
                      rows={5}
                    />
                  </div>
                  <label className={styles.checkboxWrap}>
                    <input
                      type="checkbox"
                      name="updates"
                      checked={formData.updates}
                      onChange={handleChange}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxLabel}>I'd like to receive updates from EarthImpact.</span>
                  </label>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                    <span>📨</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ===================== GET IN TOUCH SECTION ===================== */}
      <section className={styles.getInTouch}>
        <div className="container">
          <div className={styles.gitGrid}>
            <div className={styles.gitLeft}>
              <p className="section-tag">GET IN TOUCH 🌿</p>
              <h2 className={styles.gitTitle}>
                We're here to connect, collaborate &amp; create change.
              </h2>
              <div className={styles.contactDetails}>
                {[
                  { icon: '✉️', label: 'Email Us', value: 'info@earthimpact.co.in' },
                  { icon: '📞', label: 'Call Us', value: '+91 8881007017\n+91 9369416234' },
                  { icon: '📍', label: 'Visit Us', value: 'IIT Bhubaneswar Research Park\nBhubaneswar, Odisha 751013, India' },
                  { icon: '🌐', label: 'Website', value: 'www.earthimpactinnovations.com' },
                  { icon: '💼', label: 'Follow Us', value: 'https://www.linkedin.com/in/namaste-soham' },
                ].map(({ icon, label, value }) => (
                  <div key={label} className={styles.contactDetail}>
                    <div className={styles.detailIcon}>{icon}</div>
                    <div>
                      <p className={styles.detailLabel}>{label}</p>
                      <p className={styles.detailValue}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.gitCenter}>
              <div className={styles.founderCircle}>
                <div className={styles.founderBg}>
                  <img
                    src="/images/founder/soham.jpg"
                    alt="Soham Srivastava"
                    className={styles.founderImg}
                  />
                </div>
              </div>
            </div>

            <div className={styles.gitRight}>
              <p className="section-tag">LET'S BUILD IMPACT, TOGETHER ✦</p>
              <h2 className={styles.gitRightTitle}>
                Driven by Empathy.<br />
                Guided by Science.<br />
                Committed to Impact.
              </h2>
              <p className={styles.gitRightDesc}>
                Have a question, idea, or opportunity? I personally read every message.
              </p>
              <div className={styles.founderSignature}>
                <div className={styles.sigLine}></div>
                <p className={styles.founderName}>Soham Srivastava</p>
                <p className={styles.founderRole}>Founder &amp; Chief Empathy Officer</p>
                <p className={styles.founderCompany}>EarthImpact Innovations Pvt. Ltd.</p>
                <p className={styles.signature}>Soham Srivastava</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PARTNER WITH US ===================== */}
      <section className={styles.partner}>
        <div className="container">
          <div className={styles.partnerGrid}>
            <div className={styles.partnerLeft}>
              <p className="section-tag">PARTNER WITH US 🌿</p>
              <h2 className={styles.partnerTitle}>
                Be part of a movement that puts women's health and planet first.
              </h2>
              <p className={styles.partnerDesc}>
                Together, we can develop safer products, create meaningful impact, and build a sustainable future for generations to come.
              </p>
              <Link href="#" className="btn btn-primary">
                Explore Partnership Opportunities →
              </Link>
            </div>
            <div className={styles.partnerRight}>
              {[
                { icon: '🤝', title: 'Co-Develop Innovations', desc: 'Work with us on science-backed solutions.' },
                { icon: '🌍', title: 'Distribute & Scale Impact', desc: 'Join hands to bring safe solutions to more women.' },
                { icon: '🔬', title: 'Research & Validate', desc: 'Collaborate on research for real world impact.' },
                { icon: '📣', title: 'Spread Awareness', desc: 'Partner with us to educate and empower communities.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className={styles.partnerCard}>
                  <div className={styles.partnerCardIcon}>{icon}</div>
                  <h3 className={styles.partnerCardTitle}>{title}</h3>
                  <p className={styles.partnerCardDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER ===================== */}
      <section className={styles.newsletter}>
        <div className="container">
          <div className={styles.newsletterGrid}>
            <div className={styles.newsletterLeft}>
              <div className={styles.newsletterIcon}>✉️</div>
              <div>
                <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                <p className={styles.newsletterDesc}>Subscribe to our newsletter for the latest updates on our innovations, impact, and upcoming milestones.</p>
              </div>
            </div>
            <div className={styles.newsletterRight}>
              <input type="email" placeholder="Your email address" className={styles.newsletterInput} />
              <button className={styles.newsletterBtn}>Subscribe →</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
