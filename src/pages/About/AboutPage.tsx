import { OwnerProfile } from '../../components/common/OwnerProfile'
import { PageHero } from '../../components/common/PageHero'

export function AboutPage() {
  return <main><PageHero title="About us" />
    <section className="bg-[#f5f7fa] section-pad"><div className="site-container grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
      <div className="space-y-5 text-lg leading-8 text-zinc-800">
        <p>At AJCA GROUP, we specialize in delivering reliable and efficient manpower supply services tailored for modern logistics and supply chain operations. With a strong presence across India, we support businesses in Warehouse, Sort Center, Delivery Center, Fulfillment Center, and Mother Hub operations.</p>
        <p>Our mission is to empower organizations with skilled and unskilled manpower that enhances productivity, minimizes downtime, and ensures seamless day-to-day operations. We understand the dynamic nature of logistics, and our workforce solutions are designed to adapt to your business requirements with speed and precision.</p>
        <p>Led by founder Ajit Kumar Jha, AJCA GROUP brings 13 years of experience and serves clients across India from Rishra, Hooghly, West Bengal.</p>
        <p>At AJCA GROUP, we are committed to building long-term partnerships by delivering quality manpower, maintaining high service standards, and supporting our clients in achieving their business goals.</p>
      </div>
      <div className="text-center text-[var(--ssar-teal)]"><p className="text-7xl font-bold">13</p><p className="mt-3 text-2xl">Years of experience</p><p className="mt-2 text-lg">Pan-India presence</p></div>
    </div></section>
    <section className="bg-[var(--ssar-teal)] section-pad text-white"><div className="site-container grid gap-10 md:grid-cols-3">
      {[['Our Vision','Consistent performance and uptime ensure efficient, reliable service with minimal interruptions and quick response times.'],['Our Mission','Speed and efficiency ensure tasks are completed quickly and resources are used optimally, enhancing productivity and satisfaction.'],['Our value','Growth capability is a system’s ability to scale and adapt, meeting increasing demands and evolving needs for long-term success.']].map(([title,text], index)=><article key={title} className="border-t border-white/30 pt-7"><span className="text-6xl text-[var(--ssar-orange)]">{index+1}</span><h2 className="mt-5 text-3xl font-bold">{title}</h2><p className="mt-4 text-lg leading-8 text-white/90">{text}</p></article>)}
    </div></section>
    <OwnerProfile />
  </main>
}
