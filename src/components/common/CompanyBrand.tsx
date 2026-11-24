import { company } from '../../data/company'

type CompanyBrandProps = {
  variant?: 'header' | 'footer'
}

export function CompanyBrand({ variant = 'header' }: CompanyBrandProps) {
  return (
    <img
      src="/logo.jpeg"
      alt={company.name}
      width="1536"
      height="1024"
      className={`block h-auto object-contain mix-blend-multiply ${variant === 'footer' ? 'w-44 sm:w-48' : 'w-28 sm:w-32'}`}
    />
  )
}
