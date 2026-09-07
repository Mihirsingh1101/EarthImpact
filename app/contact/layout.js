// layout.js supplies metadata for the Contact page because
// page.js is a 'use client' component and cannot export metadata directly.
export const metadata = {
  title: 'Contact EarthImpact Innovations | Get in Touch',
  description: 'Contact EarthImpact Innovations Pvt. Ltd. for partnerships, investment, research collaboration or media inquiries. Reach Soham Srivastava at info@earthimpact.co.in.',
  keywords: [
    'contact EarthImpact', 'EarthImpact partnership', 'invest in EarthImpact',
    'Soham Srivastava contact', 'earthimpact.co.in contact',
    'menstrual health startup partnership India'
  ],
  alternates: { canonical: 'https://earthimpact.co.in/contact' },
  openGraph: {
    title: 'Contact EarthImpact Innovations | Get in Touch',
    description: 'Reach out for partnerships, investment or media. Contact Soham Srivastava at info@earthimpact.co.in.',
    url: 'https://earthimpact.co.in/contact',
  },
};

export default function ContactLayout({ children }) {
  return children;
}
