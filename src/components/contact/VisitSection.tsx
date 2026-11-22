import { company } from '../../data/company'
import { TransportTabs } from './TransportTabs'

export function VisitSection() {
  const location = encodeURIComponent(company.address)

  return (
    <section className="bg-white section-pad" aria-labelledby="visit-title">
      <div className="site-container grid items-start gap-10 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-7">
          <iframe
            title={`Map of ${company.address}`}
            src={`https://maps.google.com/maps?q=${location}&z=14&output=embed`}
            className="h-[350px] w-full rounded-lg border-0 sm:h-[500px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-zinc-600">
            <span>{company.address}</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${location}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ssar-teal)] underline underline-offset-4"
            >Open in Google Maps</a>
          </div>
        </div>
        <div className="lg:col-[9/13]">
          <h2 id="visit-title" className="text-4xl leading-tight">Come Visit Us</h2>
          <p className="mb-5 mt-2 text-xl leading-7">Easy ways to reach us, no matter your favorite transport.</p>
          <TransportTabs />
        </div>
      </div>
    </section>
  )
}
