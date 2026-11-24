import { company } from './company'
import { faqs, primaryServices, reasons, serviceOfferings } from './siteData'

type SearchPage = {
  title: string
  path: string
  description: string
  searchableText: string
}

export const searchPages: SearchPage[] = [
  {
    title: 'Home',
    path: '/',
    description: 'AJCA GROUP manpower solutions, company overview, experience and services.',
    searchableText: 'home manpower recruiters staffing payroll contract permanent requirement mission vision culture pan India 13 years experience government GeM bids tenders PSU public sector manpower outsourcing procurement',
  },
  {
    title: 'Services',
    path: '/our-services',
    description: 'Warehouse, sort center, fulfillment and mother hub staffing, recruitment and workforce services.',
    searchableText: [
      'services manpower staffing recruitment payroll contract permanent requirement',
      ...primaryServices.flatMap(({ title, description }) => [title, description]),
      ...reasons.flat(),
      ...serviceOfferings.flat(),
    ].join(' '),
  },
  {
    title: 'About Us',
    path: '/about-us',
    description: 'Learn about AJCA GROUP, founder Ajit Kumar Jha and 13 years of experience across India.',
    searchableText: `about company founder owner director ${company.name} ${company.founder} ${company.address} logistics supply chain warehouse vision mission values pan India`,
  },
  {
    title: 'Contact Us',
    path: '/contactus',
    description: `Send an enquiry, call ${company.phone}, email ${company.email}, or find us in ${company.address}.`,
    searchableText: `contact enquiry question message form phone email address map directions visit support ${company.phone} ${company.email} ${company.address} ${faqs.flat().join(' ')}`,
  },
  {
    title: 'Appointment',
    path: '/appointment',
    description: 'Appointment availability and how to arrange a time with our team.',
    searchableText: 'appointment book booking schedule meeting time availability arrange',
  },
  {
    title: 'Privacy Policy',
    path: '/privacy',
    description: 'How AJCA GROUP handles contact information and protects your privacy.',
    searchableText: 'privacy policy personal information data collection security email phone enquiry',
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    description: 'Account sign-in information.',
    searchableText: 'sign in login account password email',
  },
]

export function findSearchResults(query: string): SearchPage[] {
  const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return searchPages

  return searchPages
    .map((page) => {
      const title = page.title.toLocaleLowerCase()
      const content = `${page.title} ${page.description} ${page.searchableText}`.toLocaleLowerCase()
      const matches = terms.every((term) => content.includes(term))
      const score = title.includes(terms.join(' ')) ? 2 : terms.filter((term) => title.includes(term)).length
      return { page, matches, score }
    })
    .filter(({ matches }) => matches)
    .sort((a, b) => b.score - a.score)
    .map(({ page }) => page)
}
