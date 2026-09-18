import type { Metadata } from 'next';

const SITE_URL = 'https://www.xdomain.pro';
const TITLE = 'XDomain — One identity. Reach anyone, anywhere.';
const DESCRIPTION =
  'XDomain is one private, provider-independent identity that works across every network and device — no juggling phone numbers or emails, less spam and impersonation, easier appointments, and your identity travels with you (no roaming or platform lock-in).';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: '%s — XDomain',
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  keywords: [
    'XDomain',
    'digital identity',
    'provider-independent identity',
    'universal identity',
    'private communication',
    'appointments without sharing calendar',
    'anti-spam identity',
    'roaming free identity',
  ],
  authors: [{ name: 'XDomain Research' }],
  creator: 'XDomain Research',
  publisher: 'XDomain Research',
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'XDomain',
    locale: 'en_US',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL + '/',
    images: [
      {
        url: SITE_URL + '/og-image.jpg',
        secureUrl: SITE_URL + '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'XDomain — one identity for every network: no phone/email juggling, less spam, easier appointments, works everywhere.',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xdomain',
    title: TITLE,
    description: DESCRIPTION,
    images: [SITE_URL + '/og-image.jpg'],
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
  },
};

