import { FormEvent } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { SearchIcon } from '../../components/icons/Icons'
import { findSearchResults } from '../../data/searchIndex'

export function SearchPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const query = params.get('q')?.trim() ?? ''
  const results = findSearchResults(query)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = String(new FormData(event.currentTarget).get('q') ?? '').trim()
    navigate(value ? `/search?q=${encodeURIComponent(value)}` : '/search')
  }

  return (
    <main className="min-h-[65vh] bg-[#edf4f4] section-pad">
      <div className="site-container max-w-4xl">
        <h1 className="text-4xl font-bold md:text-5xl">Search the website</h1>
        <p className="mt-3 text-lg text-zinc-600">Find pages, services and company information.</p>

        <form role="search" onSubmit={submit} className="mt-8 flex gap-2 rounded-lg border border-zinc-300 bg-white p-2 shadow-sm">
          <input key={query} name="q" type="search" defaultValue={query} autoFocus aria-label="Search all pages" placeholder="Search all pages..." className="min-w-0 flex-1 px-3 text-lg outline-none" />
          <button type="submit" className="orange-button gap-2"><SearchIcon className="size-5" />Search</button>
        </form>

        <p className="mt-8 text-base text-zinc-600" role="status">
          {query ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query}”` : 'All pages'}
        </p>

        {results.length > 0 ? (
          <ul className="mt-4 grid gap-4">
            {results.map((page) => (
              <li key={page.path}>
                <NavLink to={page.path} className="block rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-[var(--ssar-teal)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ssar-teal)]">
                  <h2 className="text-2xl font-bold text-[var(--ssar-teal)]">{page.title}</h2>
                  <p className="mt-2 text-base leading-7 text-zinc-700">{page.description}</p>
                  <span className="mt-3 block text-sm text-zinc-500">{page.path}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-8">
            <h2 className="text-2xl font-bold">No matching pages found</h2>
            <p className="mt-2 text-base text-zinc-600">Try a different word, such as “staffing”, “salary”, or “contact”.</p>
          </div>
        )}
      </div>
    </main>
  )
}
