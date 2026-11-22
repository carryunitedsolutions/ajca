import { CompanyBrand } from '../../components/common/CompanyBrand'
import { FormEvent, useState } from 'react'

export function SignInPage() {
  const [message, setMessage] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setMessage('Account sign-in is not available yet.') }
  return <main className="grid min-h-[620px] place-items-center bg-[var(--ssar-teal)] px-5 py-16"><section className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl"><div className="text-center"><CompanyBrand /></div><h1 className="mt-5 text-center text-3xl font-bold">Sign in</h1><form onSubmit={submit} className="mt-7 grid gap-5"><label>Email<input className="field mt-1" type="email" required /></label><label>Password<input className="field mt-1" type="password" required /></label><button className="orange-button">Sign in</button>{message && <p className="text-center text-sm text-zinc-600" role="status">{message}</p>}</form></section></main>
}
