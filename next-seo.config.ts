import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Paladin MMA Academy',
  defaultTitle: 'Paladin MMA Academy | Premier MMA Training in Miami/Hialeah',
  description:
    'Elite MMA, Brazilian Jiu-Jitsu, Muay Thai training in Miami/Hialeah. Expert coaches, world-class facilities, programs for all skill levels.',
  canonical: 'https://paladinmma.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paladinmma.com',
    siteName: 'Paladin MMA Academy',
    images: [
      {
        url: 'https://paladinmma.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Paladin MMA Academy',
      },
    ],
  },
  twitter: {
    handle: '@paladinmma',
    site: '@paladinmma',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}

export default config

