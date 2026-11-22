import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { AboutPage } from '../pages/About/AboutPage'
import { AppointmentPage } from '../pages/Appointment/AppointmentPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { HomePage } from '../pages/Home/HomePage'
import { NotFoundPage } from '../pages/NotFound/NotFoundPage'
import { PrivacyPage } from '../pages/Privacy/PrivacyPage'
import { ServicesPage } from '../pages/Services/ServicesPage'
import { SignInPage } from '../pages/SignIn/SignInPage'
import { SearchPage } from '../pages/Search/SearchPage'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="our-services" element={<ServicesPage />} />
        <Route path="contactus" element={<ContactPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
