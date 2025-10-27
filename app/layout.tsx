import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import {
  LocalBusinessSchema,
  FAQSchema,
  OrganizationSchema,
} from '@/components/seo/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://paladinmma.com'),
  title: 'Paladin MMA Academy | Premier MMA Training in Miami/Hialeah',
  description: 'Elite MMA, Brazilian Jiu-Jitsu, Muay Thai training in Miami/Hialeah. Expert coaches, world-class facilities, programs for all skill levels. Start your warrior journey today.',
  keywords: 'MMA training Miami, MMA academy Hialeah, Brazilian Jiu-Jitsu Miami, Muay Thai classes Hialeah, kickboxing Miami, martial arts training, MMA gym Florida',
  authors: [{ name: 'Paladin MMA Academy' }],
  creator: 'Paladin MMA Academy',
  publisher: 'Paladin MMA Academy',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paladinmma.com',
    siteName: 'Paladin MMA Academy',
    title: 'Paladin MMA Academy | Premier MMA Training in Miami/Hialeah',
    description: 'Elite MMA, Brazilian Jiu-Jitsu, Muay Thai training in Miami/Hialeah. Expert coaches, world-class facilities.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Paladin MMA Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paladin MMA Academy | Premier MMA Training in Miami/Hialeah',
    description: 'Elite MMA, Brazilian Jiu-Jitsu, Muay Thai training in Miami/Hialeah.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LocalBusinessSchema />
        <FAQSchema />
        <OrganizationSchema />
        {children}
      </body>
    </html>
  )
}

