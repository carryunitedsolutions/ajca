import { NavLink } from 'react-router-dom'

const organisations = [
  'Central Government Departments',
  'State Government Departments',
  'Public Sector Undertakings (PSUs)',
  'Government Institutions',
  'Other authorised organisations',
]

const opportunities = [
  'GeM Bids',
  'Government Tenders',
  'Manpower Outsourcing Contracts',
  'Eligible Procurement Opportunities',
]

export function GovernmentBusinessSection() {
  return (
    <section aria-labelledby="government-business-title" className="relative isolate overflow-hidden bg-[#173f42] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-40 -z-10 size-[27rem] rounded-full border border-white/10 sm:size-[36rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-24 -z-10 size-[22rem] rounded-full border border-white/10 sm:size-[30rem]" />
      <div className="site-container">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#ffaf84]">Government business readiness</p>
          <h2 id="government-business-title" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            AJCA GROUP – Ready for Government Business Through <span className="text-[#ff8b4e]">GeM</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
            AJCA GROUP is fully prepared and committed to participating in Government Business Opportunities through the Government e-Marketplace (GeM). We are ready to work with Central Government Departments, State Government Departments, Public Sector Undertakings (PSUs), Government Institutions and other authorised organisations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-2xl border border-white/15 bg-white/[.07] p-6 shadow-2xl backdrop-blur-sm sm:p-8">
            <h3 className="text-2xl font-bold">Built to deliver at scale</h3>
            <p className="mt-4 text-lg leading-8 text-white/85">
              With our professional management, experienced workforce, strong operational capabilities and commitment to quality service delivery, we are confident in handling government projects and large-scale service requirements efficiently.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/85">
              We are ready to participate in GeM Bids, Government Tenders, Manpower Outsourcing Contracts and other eligible procurement opportunities. Our objective is to build long-term professional relationships with government organisations by ensuring transparency, accountability, timely execution and reliable service support.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl bg-[#eaf2f2] p-6 text-[#173f42] sm:p-7">
              <h3 className="text-xl font-bold">Ready to work with</h3>
              <ul className="mt-4 space-y-2 text-base leading-6">
                {organisations.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[var(--ssar-orange)]" />{item}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#ff8b4e]/60 bg-[#eb5a17]/15 p-6 sm:p-7">
              <h3 className="text-xl font-bold">Procurement opportunities</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {opportunities.map((item) => <span key={item} className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-sm font-bold leading-5">{item}</span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/25 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-bold">AJCA GROUP – Committed to Quality, Reliability and Excellence in Government Services.</p>
            <p className="mt-2 text-lg text-[#ffaf84]">Ready to Serve. Ready to Deliver. Ready for Government Business.</p>
          </div>
          <NavLink to="/contactus" className="orange-button shrink-0 self-start sm:self-auto">Contact our team</NavLink>
        </div>
      </div>
    </section>
  )
}
