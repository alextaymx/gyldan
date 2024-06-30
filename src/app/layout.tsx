/* eslint-disable @next/next/no-page-custom-font */
import '@/styles/index.scss';

import React from 'react';

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
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"
        />
        <title>Gyldan - Management & Consulting Firm | Gyldan Group</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
