import { useEffect } from 'react'
import { company } from '../../data/company'

export function HomeStructuredData() {
  useEffect(() => {
    const homeUrl = new URL('/', window.location.origin).href
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${homeUrl}#organization`,
          name: company.name,
          url: homeUrl,
          logo: new URL('/logo.jpeg', homeUrl).href,
          description: 'AJCA GROUP provides manpower supply, recruitment, staffing and payroll support across India.',
          founder: {
            '@type': 'Person',
            name: company.founder,
          },
          email: company.email,
          telephone: company.phone,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Rishra',
            addressRegion: 'West Bengal',
            addressCountry: 'IN',
          },
          areaServed: {
            '@type': 'Country',
            name: 'India',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${homeUrl}#website`,
          name: company.name,
          url: homeUrl,
          publisher: { '@id': `${homeUrl}#organization` },
        },
      ],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => script.remove()
  }, [])

  return null
}
