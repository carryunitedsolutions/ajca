import { CompanyContactCard } from '../../components/contact/CompanyContactCard'
import { ContactForm } from '../../components/common/ContactForm'
import { FaqList } from '../../components/contact/FaqList'
import { VisitSection } from '../../components/contact/VisitSection'

export function ContactPage() {
  return <main>
    <section className="rounded-b-[4rem] bg-white section-pad"><div className="site-container grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
      <div><h1 className="text-5xl">Contact us</h1><p className="mb-7 mt-3 text-xl">Contact us about anything related to our company or services.</p><CompanyContactCard /><ContactForm /></div>
      <img src="/assets/contact-building.webp" alt="Contact our company" className="h-full max-h-[620px] w-full rounded-md object-cover" />
    </div></section>
    <section className="bg-[var(--ssar-orange)] px-4 py-24 text-center text-white"><h2 className="mx-auto max-w-5xl text-5xl leading-tight md:text-7xl">13 years of experience. Serving businesses across India.</h2><p className="mt-4 text-xl">Join us and make your company a better place.</p></section>
    <section className="bg-[#edf4f4] section-pad"><div className="site-container grid gap-14 lg:grid-cols-[.65fr_1.35fr]"><div><p className="font-bold uppercase tracking-[.2em] text-[var(--ssar-orange)]">Frequently asked questions</p><h2 className="mt-3 text-5xl">Need help?</h2><p className="mt-5 text-lg leading-8 text-zinc-600">In this section, you can address common questions efficiently.</p></div><FaqList /></div></section>
    <VisitSection />
  </main>
}
