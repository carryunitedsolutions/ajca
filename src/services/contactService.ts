import { company } from '../data/company'
import type { ContactSubmission } from '../types/contact'

export function buildContactMailto(details: ContactSubmission): string {
  const body = [
    details.message.trim(),
    '',
    '---',
    `Name: ${details.name.trim()}`,
    `Email: ${details.email.trim()}`,
    ...(details.phone.trim() ? [`Phone: ${details.phone.trim()}`] : []),
    ...(details.company?.trim() ? [`Company: ${details.company.trim()}`] : []),
  ].join('\r\n')

  return `mailto:${company.email}?subject=${encodeURIComponent(details.subject.trim())}&body=${encodeURIComponent(body)}`
}
