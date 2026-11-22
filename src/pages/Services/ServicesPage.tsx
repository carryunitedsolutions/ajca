import { PageHero } from '../../components/common/PageHero'
import { primaryServices, reasons, serviceOfferings } from '../../data/siteData'

export function ServicesPage() {
  return <main><PageHero title="Services" />
    <section className="relative overflow-hidden bg-[var(--ssar-teal)] section-pad"><div className="absolute -right-40 -top-60 size-[650px] rounded-full bg-[var(--ssar-brown)] opacity-90"/><div className="site-container relative grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {primaryServices.map((service)=><article key={service.title} className="min-w-0 bg-white shadow-[6px_8px_0_var(--ssar-orange)] sm:shadow-[14px_18px_0_var(--ssar-orange)]"><img src={service.image} alt={service.title} className="h-52 w-full object-cover"/><div className="p-5"><h2 className="text-2xl font-bold leading-6">{service.title}</h2><p className="mt-3 text-lg leading-6">{service.description}</p></div></article>)}
    </div>
    <div className="site-container relative mt-28 text-white"><h2 className="text-5xl">✽&nbsp; Why Choose Us</h2><div className="mt-9 grid gap-8 md:grid-cols-2 xl:grid-cols-4">{reasons.map(([title,text],index)=><article key={title}><span className="text-7xl text-[var(--ssar-orange)]">{index+1}</span><div className="mt-4 border-t border-white/20 pt-5"><h3 className="text-3xl leading-8">{title}</h3><p className="mt-3 text-lg leading-7">{text}</p></div></article>)}</div></div>
    </section>
    <section className="bg-[#edf4f4] section-pad"><div className="site-container"><div className="max-w-3xl"><h2 className="text-5xl font-bold">Our Service Offerings</h2><p className="mt-5 text-xl leading-8">We provide end-to-end manpower management solutions to ensure smooth and hassle-free workforce operations:</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{serviceOfferings.map(([title,text])=><article key={title} className="border-l-4 border-[var(--ssar-orange)] bg-white p-6 shadow-sm"><h3 className="text-2xl font-bold text-[var(--ssar-teal)]">{title}</h3><p className="mt-3 text-lg leading-7 text-zinc-700">{text}</p></article>)}</div></div></section>
  </main>
}
