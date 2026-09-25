import { Link } from 'react-router-dom'
import { contact, navLinks, socialLinks } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="UpSkilliT logo" className="h-9 w-auto" />
            <span className="text-white font-semibold text-lg">UpSkilliT</span>
          </div>
          <p className="text-sm leading-relaxed">
            Leading corporate IT training provider since 2018, helping teams transform their
            skills with AI-enhanced delivery methods.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>{contact.address}</li>
            <li>Phone: {contact.phone}</li>
            <li>Mobile/WhatsApp: {contact.mobile}</li>
            <li>Email: {contact.email}</li>
            <li>{contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} UpSkilliT. All rights reserved.</span>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-white transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
