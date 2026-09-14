import './globals.css';
import Navbar from '@/components/Navbar';

// Analytics IDs are sourced from .env.local — fill them in before going live.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;


export const metadata = {
  metadataBase: new URL('https://www.earthimpact.co.in'),
  title: {
    default: 'EarthImpact Innovations – Biodegradable Sanitary Pads | Soham Srivastava',
    template: '%s | EarthImpact Innovations'
  },
  description: 'EarthImpact Innovations Pvt. Ltd. develops safer, science-backed and sustainable solutions for women\'s health in India, starting with menstrual care. Founded by Soham Srivastava.',
  keywords: [
    'EarthImpact', 'Earth Impact', 'EarthImpact Innovations', 'EarthImpact Innovations Pvt Ltd',
    'Soham Srivastava', 'Soham Srivastav', 'Soham Srivastava EarthImpact', 'EarthImpact Innovations founder', 'Snowflakes sanitary pad', 'biodegradable sanitary pad India',
    'non-toxic sanitary pad', 'eco-friendly menstrual pad', 'sustainable menstrual care India',
    'organic sanitary pad India', 'plastic-free sanitary pad', 'HemoSan hydrogel',
    'menstrual health startup India', 'women health innovation India', 'biodegradable sanitary pad India',
    'AIC IIIT Kottayam startup', 'STPI recognized startup',
    'earthimpact.co.in', 'earthimpact innovations bhubaneswar odisha'
  ],
  authors: [{ name: 'Soham Srivastava', url: 'https://www.earthimpact.co.in/our-story' }],
  creator: 'EarthImpact Innovations Pvt. Ltd.',
  publisher: 'EarthImpact Innovations Pvt. Ltd.',
  category: 'Health & Wellness',
  alternates: {
    canonical: 'https://www.earthimpact.co.in',
  },
  openGraph: {
    title: 'EarthImpact Innovations – Safer, Science-Backed Sanitary Pads for Women',
    description: 'EarthImpact creates science-backed, plastic-free and biodegradable sanitary pads (Snowflakes), formulated with material-safety focus. Founded by Soham Srivastava.',
    url: 'https://www.earthimpact.co.in',
    siteName: 'EarthImpact Innovations',
    images: [
      {
        url: 'https://www.earthimpact.co.in/images/products/pad-product.png',
        width: 1200,
        height: 630,
        alt: 'EarthImpact Snowflakes – Biodegradable Sanitary Pads',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EarthImpact Innovations – Safer Sanitary Pads',
    description: 'Science-backed, plastic-free and biodegradable menstrual pads by Soham Srivastava. Designed with material-safety focus.',
    images: ['https://www.earthimpact.co.in/images/products/pad-product.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="geo.region" content="IN-OD" />
        <meta name="geo.placename" content="Bhubaneswar, Odisha, India" />
        <meta name="geo.position" content="20.2961;85.8245" />
        <meta name="ICBM" content="20.2961, 85.8245" />

        {/* ── Google Analytics 4 ── */}
        {GA_ID && GA_ID !== 'G-XXXXXXXXXX' && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* ── Microsoft Clarity ── */}
        {CLARITY_ID && CLARITY_ID !== 'your_clarity_project_id_here' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
              `,
            }}
          />
        )}
      </head>
      <body>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.earthimpact.co.in/#organization",
              "name": "EarthImpact Innovations Pvt. Ltd.",
              "alternateName": ["EarthImpact", "Earth Impact Innovations"],
              "url": "https://www.earthimpact.co.in",
              "logo": "https://www.earthimpact.co.in/logo.png",
              "image": "https://www.earthimpact.co.in/images/products/pad-product.png",
              "description": "EarthImpact Innovations develops safer, science-backed and sustainable solutions for women's menstrual health in India, starting with Snowflake — a plastic-free, biodegradable sanitary pad.",
              "founder": {
                "@type": "Person",
                "name": "Soham Srivastava",
                "alternateName": "Soham Srivastav",
                "jobTitle": "Founder & Chief Empathy Officer",
                "worksFor": { "@id": "https://www.earthimpact.co.in/#organization" },
                "url": "https://www.earthimpact.co.in/soham-srivastava"
              },
              "foundingDate": "2025",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "TBI, NIT Calicut, NIT Campus P.O.",
                "addressLocality": "Kozhikode",
                "addressRegion": "Kerala",
                "postalCode": "673601",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@earthimpact.co.in",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/earthimpact-innovations-pvt-ltd",
                "https://www.linkedin.com/in/namaste-soham",
                "https://www.instagram.com/earthimpact.innovations"
              ]
            })
          }}
        />
        {/* WebSite + SearchAction Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "EarthImpact Innovations",
              "url": "https://www.earthimpact.co.in",
              "description": "Science-backed, plastic-free and biodegradable sanitary pads by EarthImpact Innovations. Designed for safer menstrual care in India.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.earthimpact.co.in/?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
