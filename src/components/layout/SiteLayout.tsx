import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

export function SiteLayout() {
  return <div className="page-shell"><ScrollToTop /><Header /><div className="grow"><Outlet /></div><Footer /></div>
}
