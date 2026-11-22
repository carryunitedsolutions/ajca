import { PageHero } from '../../components/common/PageHero'

export function PrivacyPage() {
  return <main><PageHero title="Privacy Policy" /><section className="bg-[#edf4f4] section-pad"><div className="site-container max-w-4xl space-y-8 text-lg leading-8 text-zinc-700">
    <p>AJCA GROUP respects your privacy. Information submitted through this website is used only to respond to your enquiries and provide requested staffing services.</p>
    <section><h2 className="text-3xl font-bold text-zinc-900">Information we collect</h2><p className="mt-3">We may collect your name, phone number, email address, company details, and the information you include in contact forms.</p></section>
    <section><h2 className="text-3xl font-bold text-zinc-900">How we use information</h2><p className="mt-3">We use submitted information to communicate with you, understand your staffing requirements, and improve our services. We do not sell your personal information.</p></section>
    <section><h2 className="text-3xl font-bold text-zinc-900">Contact</h2><p className="mt-3">For privacy questions, email <a className="text-[var(--ssar-teal)] underline" href="mailto:ajcahr2020@gmail.com">ajcahr2020@gmail.com</a>.</p></section>
  </div></section></main>
}
