import React from 'react'
import Script from 'next/script'

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'Paladin MMA Academy',
    image: 'https://paladinmma.com/og-image.jpg',
    '@id': 'https://paladinmma.com',
    url: 'https://paladinmma.com',
    telephone: '+1-786-237-4918',
    email: 'contact@paladinmma.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2091 W 76th St',
      addressLocality: 'Hialeah',
      addressRegion: 'FL',
      postalCode: '33016',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.8277,
      longitude: -80.3244,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/pld_mma',
      'http://www.tiktok.com/@sportmmma',
      'https://www.facebook.com/share/1VJnzTy7Sq/?mibextid=wwXIfr',
      'https://www.youtube.com/@Pldshoto',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '34',
    },
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const FAQSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need experience to join Paladin MMA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all! We welcome complete beginners and have programs for all skill levels. Our expert coaches will guide you from day one.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I bring to my first class?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Just comfortable workout clothes and water. We provide all equipment for your trial class.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does membership cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer flexible membership plans starting at $99/month. Contact us for detailed pricing and special offers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What martial arts do you teach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer Brazilian Jiu-Jitsu, Muay Thai, Kickboxing, MMA, Boxing, Wrestling, and specialized programs for kids and women.',
        },
      },
    ],
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Paladin MMA Academy',
    url: 'https://paladinmma.com',
    logo: 'https://paladinmma.com/logo.png',
    description:
      'Premier MMA training facility in Hialeah offering Brazilian Jiu-Jitsu, Muay Thai, Kickboxing, and comprehensive martial arts programs for all ages and skill levels.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-786-237-4918',
      email: 'contact@paladinmma.com',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['en', 'es'],
    },
    sameAs: [
      'https://www.instagram.com/pld_mma',
      'http://www.tiktok.com/@sportmmma',
      'https://www.facebook.com/share/1VJnzTy7Sq/?mibextid=wwXIfr',
      'https://www.youtube.com/@Pldshoto',
    ],
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

