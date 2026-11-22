import { NavLink } from 'react-router-dom'

export function NotFoundPage() {
  return <main className="grid min-h-[520px] place-items-center bg-white px-5 text-center"><div><p className="text-8xl font-bold text-[var(--ssar-orange)]">404</p><h1 className="mt-4 text-4xl font-bold">Page not found</h1><p className="mt-3 text-lg text-zinc-600">The page you requested does not exist.</p><NavLink to="/" className="orange-button mt-7">Back to Home</NavLink></div></main>
}
