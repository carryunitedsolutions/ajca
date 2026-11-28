import { company } from '../../data/company'

export function OwnerProfile() {
  return (
    <section className="bg-white py-16 md:py-24" aria-label="Our founder">
      <div className="site-container grid items-center gap-10 md:grid-cols-[minmax(0,.85fr)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        <img src={company.ownerImage} alt="Ajit Kumar Jha, founder of AJCA GROUP" width="1122" height="1402" loading="lazy" className="mx-auto h-auto w-full max-w-[420px] rounded-lg" />
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[var(--ssar-orange)]">Meet our Proprietor founder</p>
          <h2 className="text-4xl font-bold md:text-5xl">{company.founder}</h2>
          <p className="mt-3 text-xl text-[var(--ssar-teal)]">Proprietor Founder · {company.name}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">{company.ownerDescription}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-base text-[var(--ssar-teal)]">
            <span className="rounded border border-current/20 px-4 py-2">13 years of experience</span>
            <span className="rounded border border-current/20 px-4 py-2">Pan-India presence</span>
          </div>
        </div>
      </div>
    </section>
  )
}
