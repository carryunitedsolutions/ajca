import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { FloatingWhatsAppButton } from './FloatingWhatsAppButton'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'
import { CanonicalUrl } from '../seo/CanonicalUrl'

export function SiteLayout() {
  return <div className="page-shell"><CanonicalUrl /><ScrollToTop /><Header /><div className="grow"><Outlet /></div><Footer /><FloatingWhatsAppButton /></div>
}
