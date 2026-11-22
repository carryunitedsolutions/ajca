import { useState } from 'react'
import { faqs } from '../../data/siteData'

export function FaqList() {
  const [open, setOpen] = useState(0)
  return <div className="divide-y divide-black/10">{faqs.map(([question, answer], index) => <article key={question}>
    <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-xl font-bold" aria-expanded={open === index}><span>{question}</span><span className="text-3xl font-normal text-[var(--ssar-orange)]">{open === index ? '−' : '+'}</span></button>
    {open === index && <p className="pb-6 pr-8 text-lg leading-7 text-zinc-600">{answer}</p>}
  </article>)}</div>
}
