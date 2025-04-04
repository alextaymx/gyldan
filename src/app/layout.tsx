/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/index.scss';

import React from 'react';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gyldan.com.my'),
  title: 'Gyldan | Premium Coliving & Property Management Solutions',
  description:
    'Gyldan offers premium coliving spaces through Grandeur Coliving, luxury property management with Gyldan Properties, and upscale accommodations at Grandeur Suites. Experience excellence in modern living.',
  keywords:
    'coliving, property management, luxury suites, Grandeur Coliving, Gyldan Properties, Grandeur Suites, premium accommodations, modern living',
  authors: [{ name: 'Gyldan' }],
  creator: 'Gyldan',
  publisher: 'Gyldan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://gyldan.com.my',
  },
  openGraph: {
    title: 'Gyldan | Premium Coliving & Property Management Solutions',
    description:
      'Gyldan offers premium coliving spaces through Grandeur Coliving, luxury property management with Gyldan Properties, and upscale accommodations at Grandeur Suites. Experience excellence in modern living.',
    url: 'https://gyldan.com.my',
    siteName: 'Gyldan',
    images: [
      {
        url: '/assets/img/logo/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gyldan - Premium Coliving & Property Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyldan | Premium Coliving & Property Management Solutions',
    description:
      'Gyldan offers premium coliving spaces through Grandeur Coliving, luxury property management with Gyldan Properties, and upscale accommodations at Grandeur Suites. Experience excellence in modern living.',
    images: ['/assets/img/logo/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/img/logo/favicon.ico',
    apple: '/assets/img/logo/apple-touch-icon.png',
  },
  // verification: {
  //   google: 'your-google-site-verification',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/logo/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
