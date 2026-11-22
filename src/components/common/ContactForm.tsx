import { FormEvent, useState } from 'react'
import { buildContactMailto } from '../../services/contactService'

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [draftOpened, setDraftOpened] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const values = Object.fromEntries(new FormData(event.currentTarget))
    window.location.href = buildContactMailto({
      name: String(values.name ?? ''),
      phone: String(values.phone ?? ''),
      email: String(values.email ?? ''),
      company: String(values.company ?? ''),
      subject: String(values.subject ?? ''),
      message: String(values.message ?? ''),
    })
    setDraftOpened(true)
  }
  return (
    <form onSubmit={submit} onChange={() => setDraftOpened(false)} className="grid gap-4">
      {compact ? <>
        <label className="home-form-row"><span>Your Name *</span><input className="field" name="name" autoComplete="name" required /></label>
        <label className="home-form-row"><span>Phone Number *</span><input className="field" name="phone" autoComplete="tel" type="tel" defaultValue="+91" required /></label>
        <label className="home-form-row"><span>Your Email *</span><input className="field" name="email" autoComplete="email" type="email" required /></label>
      </> : <div className="grid gap-4 sm:grid-cols-2">
        <label>Name *<input className="field mt-1" name="name" required placeholder={compact ? '' : 'John Doe'} /></label>
        <label>Phone Number{compact ? ' *' : ''}<input className="field mt-1" name="phone" required={compact} type="tel" placeholder={compact ? '' : '+1 555-555-5556'} /></label>
        <label>Email *<input className="field mt-1" name="email" required type="email" placeholder={compact ? '' : 'example@mail.com'} /></label>
        {!compact && <label>Company<input className="field mt-1" name="company" placeholder="ACME Corp" /></label>}
      </div>}
      <label className={compact ? 'home-form-row' : ''}><span>Subject *</span><input className="field mt-1" name="subject" required placeholder={compact ? '' : 'Describe your request'} /></label>
      <label className={compact ? 'home-form-row' : ''}><span>{compact ? 'Your Question' : 'Message'} *</span><textarea className="field mt-1 min-h-32 resize-y" name="message" required placeholder={compact ? '' : 'Write down your message'} /></label>
      {/* <p className="text-sm text-zinc-600">Submitting opens your email app with the form details filled in. Please press Send there to email us.</p> */}
      <div className="flex flex-wrap items-center justify-end gap-4">
        {draftOpened && <p className="text-[var(--ssar-teal)]" role="status">Email draft should open now. If it does not, set a default email app on your device.</p>}
        <button type="submit" className="orange-button">Submit
      </button>
      </div>
    </form>
  )
}
