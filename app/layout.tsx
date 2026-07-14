import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, IBM_Plex_Sans, Inter, Outfit } from 'next/font/google'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _courierPrime = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] });
const _ibmPlexSans = IBM_Plex_Sans({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'course-present of Ony Seven',
  description: 'AI One Day Course Presentation by Ony Seven',
  keywords: ['AI course', 'presentation', 'Ony Seven', 'AI web app'],
  authors: [{ name: 'Ony Seven' }],
  openGraph: {
    title: 'course-present of Ony Seven',
    description: 'AI One Day Course Presentation by Ony Seven',
    type: 'website',
    url: 'https://onyseven.github.io',
    siteName: 'course-present',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'course-present of Ony Seven',
    description: 'AI One Day Course Presentation by Ony Seven',
  },
  icons: {
    icon: [
      {
        url: '/img/logo7smarts.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/img/logo7smarts.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/img/logo7smarts.png',
        type: 'image/png',
      },
    ],
    apple: '/img/logo7smarts.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
