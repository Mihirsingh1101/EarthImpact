import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'EarthImpact Innovations – Building Safer Solutions for Women & Our Planet',
  description: 'EarthImpact creates non-toxic, endocrine-safe and biodegradable solutions for menstrual care that are safe for women and gentle on the environment.',
  keywords: 'earthimpact, menstrual care, biodegradable, non-toxic, snowflake, sustainable, women health',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
