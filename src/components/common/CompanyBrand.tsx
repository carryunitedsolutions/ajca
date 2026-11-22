import { company } from '../../data/company'

export function CompanyBrand() {
  return <span className="inline-flex flex-col text-center leading-none" aria-label={company.name}>
    <span className="text-3xl font-bold tracking-[.12em] text-[var(--ssar-teal)]">AJCA</span>
    <span className="mt-2 text-sm font-bold tracking-[.35em] text-[var(--ssar-orange)]">GROUP</span>
  </span>
}
