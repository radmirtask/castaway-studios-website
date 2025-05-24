import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section: Company */}
        <div>
          <h3 className="text-white font-semibold mb-2">Castaway Studios</h3>
          <p className="text-sm">
            We craft mobile experiences that tell stories and spark imagination.
          </p>
        </div>

        {/* Section: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/games" className="hover:text-white">Games</a></li>
            <li><a href="/team" className="hover:text-white">Team</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Section: Social or Contact */}
        <div>
          <h3 className="text-white font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm mb-2">
            <a href="mailto:hello@castawaystudios.com" className="hover:text-white">
              hello@castawaystudios.com
            </a>
          </p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Twitter" className="hover:text-white">
              {/* Simple Twitter icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20c7.547 0 11.675-6.155..."></path>
              </svg>
            </a>
            <a href="#" aria-label="Discord" className="hover:text-white">
              {/* Simple Discord icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2..."></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © {year} Castaway Studios. All rights reserved.
      </div>
    </footer>
  );
}
