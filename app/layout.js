import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  metadataBase: new URL('https://earthimpact.co.in'),
  title: {
    default: 'EarthImpact Innovations – Biodegradable Sanitary Pads | Soham Srivastava',
    template: '%s | EarthImpact Innovations'
  },
  description: 'EarthImpact Innovations Pvt. Ltd. creates non-toxic, endocrine-safe, biodegradable sanitary pads (Snowflakes) for women in India. Founded by Soham Srivastava, IIT Bhubaneswar. Safe for women & planet.',
  keywords: [
    'EarthImpact', 'Earth Impact', 'EarthImpact Innovations', 'EarthImpact Innovations Pvt Ltd',
    'Soham Srivastava', 'Soham Srivastav', 'Soham Srivastava EarthImpact', 'Soham Srivastava IIT Bhubaneswar',
    'Snowflakes pad', 'Snowflakes sanitary pad', 'biodegradable sanitary pad India',
    'non-toxic sanitary pad', 'eco-friendly menstrual pad', 'sustainable menstrual care India',
    'organic sanitary pad India', 'plastic-free sanitary pad', 'HemoSan hydrogel',
    'menstrual health startup India', 'women health startup Bhubaneswar', 'IIT Bhubaneswar startup',
    'UNICEF India partner', 'AIC IIT Kottayam startup', 'STPI recognized startup',
    'earthimpact.co.in', 'earthimpact innovations bhubaneswar odisha'
  ],
  authors: [{ name: 'Soham Srivastava', url: 'https://earthimpact.co.in/our-story' }],
  creator: 'EarthImpact Innovations Pvt. Ltd.',
  publisher: 'EarthImpact Innovations Pvt. Ltd.',
  category: 'Health & Wellness',
  alternates: {
    canonical: 'https://earthimpact.co.in',
  },
  openGraph: {
    title: 'EarthImpact Innovations – Biodegradable Sanitary Pads for Women',
    description: 'EarthImpact creates non-toxic, endocrine-safe and biodegradable sanitary pads (Snowflakes). Safe for women & gentle on the planet. Founded by Soham Srivastava.',
    url: 'https://earthimpact.co.in',
    siteName: 'EarthImpact Innovations',
    images: [
      {
        url: 'https://earthimpact.co.in/images/products/pad-product.png',
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
    title: 'EarthImpact Innovations – Biodegradable Sanitary Pads',
    description: 'Non-toxic, endocrine-safe, biodegradable menstrual pads by Soham Srivastava.',
    images: ['https://earthimpact.co.in/images/products/pad-product.png'],
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
      </head>
      <body>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EarthImpact Innovations Pvt. Ltd.",
              "alternateName": ["EarthImpact", "Earth Impact Innovations"],
              "url": "https://earthimpact.co.in",
              "logo": "https://earthimpact.co.in/icon.svg",
              "image": "https://earthimpact.co.in/images/products/pad-product.png",
              "description": "EarthImpact Innovations creates non-toxic, endocrine-safe and biodegradable sanitary pads for women in India.",
              "founder": {
                "@type": "Person",
                "name": "Soham Srivastava",
                "alternateName": "Soham Srivastav",
                "jobTitle": "Founder & Chief Empathy Officer",
                "affiliation": "IIT Bhubaneswar"
              },
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "IIT Bhubaneswar Research Park",
                "addressLocality": "Bhubaneswar",
                "addressRegion": "Odisha",
                "postalCode": "751013",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8881007017",
                "contactType": "customer service",
                "email": "info@earthimpact.co.in",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/earthimpact",
                "https://www.linkedin.com/in/namaste-soham"
              ],
              "knowsAbout": [
                "Biodegradable Sanitary Pads",
                "Menstrual Health",
                "Sustainable Materials",
                "HemoSan Hydrogel",
                "Women Health Innovation"
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
              "url": "https://earthimpact.co.in",
              "description": "Biodegradable sanitary pads and sustainable menstrual care by EarthImpact Innovations.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://earthimpact.co.in/?q={search_term_string}"
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
