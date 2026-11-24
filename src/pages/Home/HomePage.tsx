import { OwnerProfile } from '../../components/common/OwnerProfile'
import { NavLink } from 'react-router-dom'
import { HomeContactSection } from '../../components/home/HomeContactSection'
import { HeroCompanyCard } from '../../components/home/HeroCompanyCard'
import { GovernmentBusinessSection } from '../../components/home/GovernmentBusinessSection'

const homeServices = [
  { title: 'PAYROLL SERVICES', image: '/assets/payroll.webp', text: 'AJCA GROUP take care of the payroll compliance obligation such as the Provident Fund (PF), Employees State Insurance (ESI), Professional Tax (PT) and Labour Welfare Fund (LWF).' },
  { title: 'CONTRACT REQUIREMENT', image: '/assets/contract.webp', text: 'AJCA GROUP hired temporary manpower who work on a contract basis. The contract period is fixed and the company has the discretion to terminate or continue the engagement after completion.' },
  { title: 'PERMANENT REQUIREMENT', image: '/assets/permanent.webp', text: 'AJCA GROUP gives fulltime employees who are expected to work and grow with the company. These employees are fully on the payroll and liable to all benefits provided by law including ESI and PF.' },
]

export function HomePage() {
  return (
    <main>
      <section className="maze-pattern overflow-hidden">
        <div className="grid lg:h-[700px] lg:grid-cols-12 lg:grid-rows-[repeat(14,50px)]">
          <div className="h-3 bg-[var(--ssar-orange)] lg:col-[1/5] lg:row-[1/5] lg:h-auto" />

          <img
            src="/assets/home-hero.webp"
            alt="AJCA GROUP manpower solutions"
            className="h-72 w-full object-cover sm:h-80 lg:col-[5/8] lg:row-[1/10] lg:h-full"
          />

          <div className="flex min-h-60 flex-col items-end justify-center bg-white/90 p-6 text-right sm:min-h-72 sm:p-8 lg:col-[8/13] lg:row-[1/10] lg:min-h-0 lg:bg-transparent lg:p-8 xl:p-10">
            <h1 className="text-5xl leading-[1.2] text-[var(--ssar-orange)] sm:text-6xl lg:text-[clamp(3.5rem,5vw,5rem)]">
              Man-Power<br />Solutions
            </h1>
            <p className="mt-6 text-2xl font-bold lg:mt-12 lg:text-[2rem]">We are Recruiters</p>
          </div>

          <img
            src="/assets/office.webp"
            alt="People attending a recruitment presentation"
            className="hidden h-full w-full object-cover lg:col-[1/5] lg:row-[5/15] lg:block"
          />

          <HeroCompanyCard />
        </div>
      </section>

      <section className="bg-[#eaf2f2] section-pad">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[.18em] text-[var(--ssar-orange)]">13 years of experience · Pan India</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">AJCA GROUP</h2>
            <p className="mt-7 text-left text-lg leading-8 sm:text-justify">AJCA GROUP is a manpower and staffing company based in Rishra, Hooghly, West Bengal. Led by founder Ajit Kumar Jha, the company brings 13 years of experience to supporting businesses across India.</p>
            <p className="mt-5 text-left text-lg leading-8 sm:text-justify">We help businesses find the workforce they need through manpower supply, recruitment and staffing support. Our approach focuses on understanding each client’s requirements and building lasting working relationships.</p>
          </div>
          <img src="/assets/interview.webp" alt="Professional interview" className="min-h-[430px] w-full rounded-sm object-cover shadow-xl" />
        </div>
      </section>

      <section className="bg-[var(--ssar-teal)] section-pad">
        <div className="site-container">
          <h2 className="mb-12 text-center text-5xl text-white">Our Services</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {homeServices.map((service) => <article key={service.title} className="min-w-0 overflow-hidden border-[7px] border-[var(--ssar-orange)] bg-white shadow-[7px_8px_0_#8a704e] sm:shadow-[12px_12px_0_#8a704e]"><img src={service.image} alt="" className="h-56 w-full object-cover" /><div className="p-6"><h3 className="text-2xl font-bold">{service.title}</h3><p className="mt-3 text-lg leading-7">{service.text}</p></div></article>)}
          </div>
          <div className="mt-12 text-center"><NavLink to="/our-services" className="orange-button">Explore all services</NavLink></div>
        </div>
      </section>

      <GovernmentBusinessSection />

      <section className="bg-[#edf4f4] section-pad">
        <div className="site-container"><h2 className="mb-12 text-center text-5xl">Our Mission & Vision</h2><div className="grid gap-7 lg:grid-cols-2">
          <article className="relative isolate min-h-[390px] overflow-hidden rounded-md bg-[url('/assets/mission.webp')] bg-cover bg-center p-10 text-white"><div className="absolute inset-0 -z-10 bg-black/60"/><h3 className="text-4xl font-bold">Our Mission</h3><p className="mt-5 text-xl leading-8">Our mission is to meet and surpass client’s expectation in providing quality services with outstanding values that enables them to transform today’s challenges into tomorrow’s successes.</p><p className="mt-4 text-lg leading-8">We believe in maintaining long term relationship with our clients by serving them with ethical, highly qualitative and in utmost way with least turn around time.</p></article>
          <article className="relative isolate min-h-[390px] overflow-hidden rounded-md bg-[url('/assets/vision.webp')] bg-cover bg-center p-10 text-white"><div className="absolute inset-0 -z-10 bg-black/60"/><h3 className="text-4xl font-bold">Our Vision</h3><p className="mt-5 text-xl leading-8">By adhering to our unwavering ethics and creating value for all of our stakeholders, we aim to become one of the leading human resources consulting firms.</p><p className="mt-4 text-lg leading-8">To become leading and the first choice for integrated skilled manpower service provider globally.</p></article>
        </div></div>
      </section>

      <section className="bg-[var(--ssar-teal)] section-pad text-white">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2">
          <div><h2 className="text-4xl font-bold">Our Culture</h2><p className="mt-5 text-lg leading-8">We believe in maintaining long term relationship with our clients by serving them with ethical, highly qualitative and in utmost way with least turn around time.</p><h3 className="mt-10 text-3xl font-bold">Connecting Companies to the Right Workforces</h3><p className="mt-5 text-lg leading-8">Manpower is the key to success for any economic or production activity. At AJCA GROUP we help businesses grow by recruiting the right people for their specialized and customized staffing and HR needs. Timely and trustworthy solutions for all staffing needs backed by 13 years of experience.</p></div>
          <img src="/assets/workforce.webp" alt="Connecting companies to workforces" className="w-full rounded-md shadow-2xl" />
        </div>
      </section>

      <OwnerProfile />
      <HomeContactSection />
    </main>
  )
}
