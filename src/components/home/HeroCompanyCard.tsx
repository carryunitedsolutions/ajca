import { company } from '../../data/company'

export function HeroCompanyCard() {
  return (
    <div className="relative overflow-hidden bg-[var(--ssar-teal)] px-7 py-7 text-white lg:col-[5/13] lg:row-[10/15] lg:px-10 lg:py-5">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 size-64 rounded-full border border-white/15" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-16 size-64 rounded-full border border-white/10" />

      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-white/75">Manpower &amp; staffing solutions</p>
          <h2 className="mt-1 text-3xl font-bold leading-tight sm:text-4xl">{company.name}</h2>
          <p className="mt-1 text-base text-white/85">Proprietor <span className="font-bold text-white">{company.proprietor}</span></p>
        </div>
        <div className="rounded-lg border border-white/50 bg-[var(--ssar-orange)] px-5 py-2 text-center text-white shadow-lg shadow-black/15">
          <span className="block text-2xl font-bold leading-none sm:text-3xl">{company.experience}</span>
          <span className="mt-1 block text-sm font-bold uppercase tracking-wider">of experience</span>
        </div>
      </div>

      <address className="relative mt-4 grid gap-x-4 gap-y-3 border-t border-white/30 pt-3 not-italic lg:grid-cols-[1.05fr_.8fr_1.15fr]">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[.12em] text-white/70">Based in</p>
          <a className="mt-1 inline-block text-lg leading-snug underline-offset-4 hover:underline focus-visible:underline" href={company.mapsHref} target="_blank" rel="noopener noreferrer" aria-label={`Open ${company.address} in Google Maps`}>{company.address}</a>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[.12em] text-white/70">Contact No.</p>
          <a className="mt-1 inline-block text-lg leading-snug underline-offset-4 hover:underline focus-visible:underline" href={company.phoneHref}>{company.phone}</a>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[.12em] text-white/70">E-Mail</p>
          <a className="mt-1 inline-block break-all text-lg leading-snug underline-offset-4 hover:underline focus-visible:underline" href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </address>
    </div>
  )
}
