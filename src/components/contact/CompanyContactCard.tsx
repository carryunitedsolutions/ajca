import { company } from '../../data/company'
import { PhoneIcon } from '../icons/Icons'

export function CompanyContactCard() {
  const iconClass = 'grid size-10 shrink-0 place-items-center rounded-full bg-white text-[var(--ssar-teal)]'

  return (
    <address className="mb-8 overflow-hidden rounded-2xl border border-[#d9e7e6] bg-[#f3f8f7] not-italic shadow-sm">
      <div className="h-1 bg-[var(--ssar-teal)]" />
      <div className="p-5 sm:p-7">
        <h2 className="text-3xl font-bold tracking-wide text-[var(--ssar-teal)]">{company.name}</h2>
        <p className="mt-2 text-base text-zinc-600">Proprietor <span className="mx-1 text-zinc-400">·</span> <span className="font-bold text-zinc-800">{company.proprietor}</span></p>

        <div className="mt-5 space-y-3 border-t border-[#d9e7e6] pt-5">
          <div className="flex items-center gap-3">
            <span className={iconClass}><svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
            <div className="min-w-0"><p className="text-sm text-zinc-500">Our location</p><p className="text-base leading-6 text-zinc-800">{company.address}</p></div>
          </div>
          <a href={`mailto:${company.email}`} className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssar-teal)]">
            <span className={iconClass}><svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg></span>
            <div className="min-w-0"><p className="text-sm text-zinc-500">Email us</p><p className="break-all text-base leading-6 text-zinc-800 group-hover:text-[var(--ssar-teal)] group-hover:underline">{company.email}</p></div>
          </a>
          <a href={company.phoneHref} className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssar-teal)]">
            <span className={iconClass}><PhoneIcon className="size-5" /></span>
            <div><p className="text-sm text-zinc-500">Call us</p><p className="text-base leading-6 text-zinc-800 group-hover:text-[var(--ssar-teal)] group-hover:underline">{company.phone}</p></div>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-[var(--ssar-teal)] px-4 py-2 text-sm font-bold text-white">{company.experience} of experience</span>
          <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-800">Pan-India services</span>
        </div>
      </div>
    </address>
  )
}
