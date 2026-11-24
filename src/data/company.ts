const whatsappMessage = 'Hello AJCA GROUP, I would like to know more about your manpower and staffing services.'
const address = 'Rishra, Hooghly, West Bengal'

export const company = {
  name: 'AJCA GROUP',
  founder: 'Ajit Kumar Jha',
  email: 'ajcahr2020@gmail.com',
  phone: '+91 70039 65882',
  phoneHref: 'tel:+917003965882',
  whatsappHref: `https://wa.me/917003965882?text=${encodeURIComponent(whatsappMessage)}`,
  address,
  mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  coverage: 'Pan India',
  experience: '13 years',
  ownerImage: '/assets/owner.jpeg',
  ownerDescription: 'Ajit Kumar Jha is the founder of AJCA GROUP, based in Rishra, Hooghly, West Bengal. With 13 years of experience, AJCA GROUP serves businesses across India, focusing on dependable manpower support and lasting client relationships.',
} as const
