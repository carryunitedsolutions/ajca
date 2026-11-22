import { useState } from 'react'
import { company } from '../../data/company'

const tabs = [
  ['By Train', 'Planning a train journey to Rishra, Hooghly? Contact our team before travelling for the exact office location and onward directions.'],
  ['By Car', 'Use the map to plan your journey to Rishra, Hooghly, West Bengal. Please call us for the exact office address and parking information before your visit.'],
  ['By Bike', 'Find Rishra, Hooghly, West Bengal on the map and contact our team for the final directions to our office.'],
]

export function TransportTabs() {
  const [active, setActive] = useState(0)
  return (
    <div>
      {tabs.map(([label, description], index) => {
        const expanded = active === index
        return (
          <div key={label} className={`rounded-md ${expanded ? 'bg-[#f6f6f7]' : ''}`}>
            <h3>
              <button
                type="button"
                id={`transport-trigger-${index}`}
                aria-expanded={expanded}
                aria-controls={`transport-panel-${index}`}
                onClick={() => setActive(expanded ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-xl font-bold focus-visible:outline-2 focus-visible:outline-[var(--ssar-teal)]"
              >
                {label}
                <svg className={`size-5 shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m4 8 8 8 8-8" /></svg>
              </button>
            </h3>
            <div id={`transport-panel-${index}`} role="region" aria-labelledby={`transport-trigger-${index}`} hidden={!expanded} className="px-6 pb-7 pt-3 text-lg leading-6">
              <p>{description}</p>
              <a href={company.phoneHref} className="mt-4 inline-block text-[var(--ssar-teal)] underline underline-offset-4">{company.phone}</a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
