import { ContactForm } from '../common/ContactForm'
import { company } from '../../data/company'
import { WhatsAppIcon, PhoneIcon } from '../icons/Icons'
import './home-contact.css'

export function HomeContactSection() {
  return (
    <section id="home-contact" className="home-contact" aria-labelledby="home-contact-title">
      <div className="site-container home-contact-grid">
        <div className="home-contact-image">
          <img src="/assets/contact-keyboard.webp" alt="Hands typing on a white keyboard" loading="lazy" />
        </div>
        <div className="home-contact-copy">
          <h2 id="home-contact-title">Contact Us</h2>
          <p>We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to help. Simply fill out the form below, and we aim to respond to all inquiries within 24 hours. Thank you for getting in touch!</p>
        </div>
        <address className="home-contact-details">
          <a href={`mailto:${company.email}`}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 5h20v14H2z"/><path d="m2 6 10 7L22 6" fill="none" stroke="#eaf2f2" strokeWidth="1.5"/></svg>{company.email}</a>
          <div className="home-contact-actions">
            <a href={company.phoneHref}><PhoneIcon />{company.phone}</a>
            <a className="whatsapp-link" href={company.whatsappHref} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />WhatsApp</a>
          </div>
          <a className="home-contact-map" href={company.mapsHref} target="_blank" rel="noopener noreferrer" aria-label={`Open ${company.address} in Google Maps`}><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg><span>Rishra, Hooghly<br/>West Bengal</span></a>
        </address>
        <div className="home-contact-form"><ContactForm compact /></div>
      </div>
    </section>
  )
}
