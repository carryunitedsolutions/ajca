import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { company } from '../../data/company'

const indexablePaths = new Set(['/', '/about-us', '/our-services', '/contactus', '/privacy'])

export function CanonicalUrl() {
  const { pathname } = useLocation()

  useEffect(() => {
    const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')

    if (!indexablePaths.has(pathname)) {
      existing?.remove()
      return
    }

    const canonical = existing ?? document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = new URL(pathname, company.siteUrl).href
    if (!existing) document.head.appendChild(canonical)
  }, [pathname])

  return null
}
