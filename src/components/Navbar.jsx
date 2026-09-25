import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-purple-700 bg-purple-50'
        : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="UpSkilliT logo" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-gray-900">UpSkilliT</span>
        </NavLink>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-purple-50"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
