import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'XDomain - Your Identity. Your Domain. Your Communication.',
    template: '%s - XDomain',
  },
  description:
    'XDomain explores a future beyond email addresses and phone numbers: user-owned Internet identity, permission-based communication, private appointments and provider-independent reach.',
  metadataBase: new URL('https://xdomain.pro'),
  openGraph: {
    type: 'website',
    siteName: 'XDomain Research',
    title: 'XDomain - Your Identity. Your Domain. Your Communication.',
    description:
      'XDomain explores a future beyond email addresses and phone numbers: user-owned Internet identity, permission-based communication, private appointments and provider-independent reach.',
    url: 'https://xdomain.pro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'XDomain - Your Identity. Your Domain. Your Communication.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XDomain - Your Identity. Your Domain. Your Communication.',
    description:
      'XDomain explores a future beyond email addresses and phone numbers: user-owned Internet identity, permission-based communication, private appointments and provider-independent reach.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};
