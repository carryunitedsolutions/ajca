import { NavLink } from 'react-router-dom'

export function AppointmentPage() {
  return <main className="grid min-h-[520px] place-items-center bg-white px-5 py-20 text-center"><div><div className="mx-auto grid size-20 place-items-center rounded-full bg-[var(--ssar-teal)] text-4xl text-white">⌚</div><h1 className="mt-7 text-3xl font-bold">There is currently no appointment available</h1><p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">Please contact our team directly and we will help you arrange a suitable time.</p><NavLink to="/contactus" className="orange-button mt-7">Contact Us</NavLink></div></main>
}
