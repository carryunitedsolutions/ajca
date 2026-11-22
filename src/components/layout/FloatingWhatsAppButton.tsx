import { company } from '../../data/company'
import { WhatsAppIcon } from '../icons/Icons'

export function FloatingWhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AJCA GROUP on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full border-2 border-white bg-[#25d366] text-white shadow-[0_6px_24px_rgba(0,0,0,0.25)] transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128c4a] sm:bottom-6 sm:right-6 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  )
}
