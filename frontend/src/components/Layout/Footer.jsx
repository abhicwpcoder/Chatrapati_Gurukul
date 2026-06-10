import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const quickLinks = ['About', 'Courses', 'Faculty', 'Contact']
  const hostelLinks = ['Boys Hostel', 'Girls Hostel', 'Facilities', 'Rules']

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Chatrapati<span className="text-accent-gold">Gurukul</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Excellence in education since 2024. Shaping young minds for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="hover:text-accent-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`} className="text-gray-300 hover:text-accent-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gold">Hostel</h4>
            <ul className="space-y-2">
              {hostelLinks.map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-accent-gold transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent-gold mt-1" />
                <span className="text-gray-300 text-sm">Aryanandi Chauk, Karegaon Road, Parbhani - 431401</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent-gold" />
                <span className="text-gray-300">+91 8308403750</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent-gold" />
                <span className="text-gray-300">info@chatrapatigurukul.co.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={18} className="text-accent-gold" />
                <span className="text-gray-300">Mon-Sat: 8 AM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Chatrapati Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;