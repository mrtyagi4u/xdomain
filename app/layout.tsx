import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { metadata as siteMetadata } from './metadata';

export const metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: '#0e2a3a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
