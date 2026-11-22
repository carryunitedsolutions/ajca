import { CompanyBrand } from '../common/CompanyBrand'
import { company } from '../../data/company'
import { FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CloseIcon, MenuIcon, SearchIcon } from '../icons/Icons'

const links = [['Home', '/'], ['Services', '/our-services'], ['About Us', '/about-us']]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const navigate = useNavigate()
  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = new FormData(event.currentTarget).get('search')?.toString().toLowerCase() ?? ''
    if (value.includes('service') || value.includes('staff')) navigate('/our-services')
    else if (value.includes('about') || value.includes('company')) navigate('/about-us')
    else if (value.includes('contact') || value.includes('phone')) navigate('/contactus')
    else navigate('/')
    setSearchOpen(false); setMobileOpen(false)
  }
  const navClass = ({ isActive }: { isActive: boolean }) => `text-[1.05rem] transition-colors hover:text-[var(--ssar-orange)] ${isActive ? 'text-black' : 'text-zinc-600'}`

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#edf4f4]/95 backdrop-blur">
      <div className="site-container flex h-[86px] items-center gap-9">
        <NavLink to="/" aria-label="AJCA GROUP home" className="shrink-0"><CompanyBrand /></NavLink>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path} className={navClass}>{label}</NavLink>)}
        </nav>
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button onClick={() => setSearchOpen((value) => !value)} className="grid size-11 place-items-center rounded-full bg-black/[.035] hover:bg-black/[.07]" aria-label="Search"><SearchIcon /></button>
            {searchOpen && <form onSubmit={submitSearch} className="absolute right-0 top-14 flex w-72 rounded-lg border border-black/10 bg-white p-2 shadow-xl"><input name="search" autoFocus className="min-w-0 grow px-2 outline-none" placeholder="Search..." aria-label="Search" /><button className="rounded bg-[var(--ssar-teal)] p-2 text-white" aria-label="Submit search"><SearchIcon className="size-4" /></button></form>}
          </div>
          <a href={company.phoneHref} className="whitespace-nowrap text-sm text-zinc-600">{company.phone}</a>
          <NavLink to="/sign-in" className="rounded-md border border-zinc-300 px-4 py-2 text-zinc-600 hover:bg-white">Sign in</NavLink>
          <NavLink to="/contactus" className="orange-button">Contact Us</NavLink>
        </div>
        <button onClick={() => setMobileOpen((value) => !value)} className="ml-auto grid size-11 place-items-center lg:hidden" aria-expanded={mobileOpen} aria-label="Toggle navigation">{mobileOpen ? <CloseIcon /> : <MenuIcon />}</button>
      </div>
      {mobileOpen && <div className="border-t border-black/10 bg-[#edf4f4] px-5 pb-6 pt-4 lg:hidden">
        <form onSubmit={submitSearch} className="mb-5 flex rounded-md border border-black/10 bg-white p-2"><input name="search" className="min-w-0 grow px-2 outline-none" placeholder="Search..." aria-label="Search" /><button className="p-2" aria-label="Submit search"><SearchIcon /></button></form>
        <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
          {links.map(([label, path]) => <NavLink onClick={() => setMobileOpen(false)} key={path} to={path} className={navClass}>{label}</NavLink>)}
          <a href={company.phoneHref} className="text-sm text-zinc-600">{company.phone}</a>
          <a href={`mailto:${company.email}`} className="text-sm text-zinc-600 break-all">{company.email}</a>
          <NavLink onClick={() => setMobileOpen(false)} to="/sign-in" className="rounded-md border border-zinc-300 px-4 py-2 text-center">Sign in</NavLink>
          <NavLink onClick={() => setMobileOpen(false)} to="/contactus" className="orange-button">Contact Us</NavLink>
        </nav>
      </div>}
    </header>
  )
}
