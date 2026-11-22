import { CompanyBrand } from '../common/CompanyBrand'
import { NavLink } from 'react-router-dom'

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.5-1 1-1h2.8V2.1L14.7 2C11.3 2 10.5 4.1 10.5 6.3v2.2H8v4.1h2.5V22H14v-9.4h3.1l.5-4.1H14Z" /></svg>
}

function XIcon() {
  return <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.8-6.3L6.7 22H3.6l7.1-8.2L3 2h6.3l4.4 5.8L18.9 2Zm-1.1 17.8h1.7L8.4 4.1H6.6l11.2 15.7Z" /></svg>
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
}

export function Footer() {
  return (
    <footer className="reference-footer bg-[#eaf2f2] text-[#242424]">
      <div className="site-container grid items-center py-10 lg:grid-cols-12">
        <div className="py-4 lg:col-span-2">
          <NavLink to="/" aria-label="AJCA GROUP home">
            <CompanyBrand />
          </NavLink>
        </div>

        <nav className="flex flex-col items-center justify-center gap-1 py-4 text-[#a33f10] lg:col-span-8 lg:flex-row" aria-label="Footer navigation">
          <NavLink className="px-4 py-2 hover:text-[var(--ssar-orange)]" to="/">Home</NavLink>
          <NavLink className="px-4 py-2 hover:text-[var(--ssar-orange)]" to="/about-us">About us</NavLink>
          <NavLink className="px-4 py-2 hover:text-[var(--ssar-orange)]" to="/our-services">Services</NavLink>
          <NavLink className="px-4 py-2 hover:text-[var(--ssar-orange)]" to="/privacy">Privacy Policy</NavLink>
          <NavLink className="orange-button ml-0 lg:ml-4" to="/contactus">Contact us today</NavLink>
        </nav>

        <div className="flex items-center justify-center gap-6 py-4 lg:col-span-2">
          <a href="#" aria-label="Facebook" className="p-2 hover:text-[var(--ssar-orange)]"><FacebookIcon /></a>
          <a href="#" aria-label="X" className="p-2 hover:text-[var(--ssar-orange)]"><XIcon /></a>
          <a href="#" aria-label="Instagram" className="p-2 hover:text-[var(--ssar-orange)]"><InstagramIcon /></a>
        </div>
      </div>

      <div className="site-container grid gap-2 py-4 text-center text-sm text-zinc-600 md:grid-cols-2 md:text-left">
        <p>Copyright © AJCA GROUP</p>
        <p className="text-[#242424] md:text-right">
          Powered by <a href="https://www.odoo.com" className="font-bold text-[#a33f10]">Odoo</a> - Create a{' '}
          <a href="https://www.odoo.com/app/website" className="text-[#a33f10]">free website</a>
        </p>
      </div>
    </footer>
  )
}
