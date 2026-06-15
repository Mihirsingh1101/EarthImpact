import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  metadataBase: new URL('https://earthimpact.co.in'),
  title: {
    default: 'EarthImpact Innovations – Building Safer Solutions for Women & Our Planet',
    template: '%s | EarthImpact Innovations'
  },
  description: 'EarthImpact creates non-toxic, endocrine-safe and biodegradable solutions for menstrual care that are safe for women and gentle on the environment.',
  keywords: ['EarthImpact', 'Earth Impact', 'Menstrual Care', 'Sustainable Women Health', 'EarthImpact Innovations Pvt Ltd', 'Snowflakes', 'Soham Srivastav'],
  authors: [{ name: 'Soham Srivastav' }],
  creator: 'EarthImpact Innovations Pvt. Ltd.',
  openGraph: {
    title: 'EarthImpact Innovations – Safer Solutions for Women & Our Planet',
    description: 'EarthImpact creates non-toxic, endocrine-safe and biodegradable menstrual care products like Snowflakes.',
    url: 'https://earthimpact.co.in',
    siteName: 'EarthImpact',
    images: [
      {
        url: '/images/products/pad-product.png',
        width: 800,
        height: 600,
        alt: 'EarthImpact Snowflakes Products',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EarthImpact Innovations',
    description: 'Non-toxic, endocrine-safe, and biodegradable menstrual care products.',
    images: ['/images/products/pad-product.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EarthImpact Innovations Pvt. Ltd.",
              "url": "https://earthimpact.co.in",
              "logo": "https://earthimpact.co.in/icon.svg",
              "founder": {
                "@type": "Person",
                "name": "Soham Srivastav"
              },
              "description": "EarthImpact creates non-toxic, endocrine-safe and biodegradable solutions for menstrual care.",
              "sameAs": [
                "https://www.linkedin.com/company/earthimpact"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "EarthImpact Innovations",
              "url": "https://earthimpact.co.in"
            })
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
