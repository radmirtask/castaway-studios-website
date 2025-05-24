import React, { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/games', label: 'Games' },
    { href: '/team', label: 'Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          Castaway
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-800 hover:text-gray-600"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu (only when open) */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 p-4">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-gray-800 hover:text-gray-600"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
