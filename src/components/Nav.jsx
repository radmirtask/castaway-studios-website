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

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'twitter', label: 'Twitter' },
    { href: 'https://instagram.com', icon: 'instagram', label: 'Instagram' },
    { href: 'https://linkedin.com', icon: 'linkedin', label: 'LinkedIn' },
    { href: 'https://discord.com', icon: 'discord', label: 'Discord' },
  ];

  const SocialIcon = ({ icon }) => {
    const iconPaths = {
      twitter: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
      instagram: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11v11h-11z M9 22h6c5 0 9-4 9-9V9c0-5-4-9-9-9H9C4 0 0 4 0 9v4c0 5 4 9 9 9z",
      linkedin: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z",
      discord: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"
    };

    return (
      <svg 
        className="w-5 h-5" 
        fill="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconPaths[icon]} />
      </svg>
    );
  };

  return (
    <>
      <style jsx>{`
        .nav-link-home:hover {
          color: #B316D5 !important;
          border-color: #B316D5 !important;
        }
        .nav-link-home:hover .bg-overlay {
          background-color: #B316D5 !important;
          opacity: 0.1 !important;
        }
        
        .nav-link-games:hover {
          color: #CD2373 !important;
          border-color: #CD2373 !important;
        }
        .nav-link-games:hover .bg-overlay {
          background-color: #CD2373 !important;
          opacity: 0.1 !important;
        }
        
        .nav-link-team:hover {
          color: #FFEE34 !important;
          border-color: #FFEE34 !important;
        }
        .nav-link-team:hover .bg-overlay {
          background-color: #FFEE34 !important;
          opacity: 0.1 !important;
        }
        
        .nav-link-careers:hover {
          color: #B316D5 !important;
          border-color: #B316D5 !important;
        }
        .nav-link-careers:hover .bg-overlay {
          background-color: #B316D5 !important;
          opacity: 0.1 !important;
        }
        
        .nav-link-contact:hover {
          color: #CD2373 !important;
          border-color: #CD2373 !important;
        }
        .nav-link-contact:hover .bg-overlay {
          background-color: #CD2373 !important;
          opacity: 0.1 !important;
        }

        .social-icon-0:hover {
          background-color: #B316D5 !important;
          border-color: #B316D5 !important;
          color: #1B031B !important;
          box-shadow: 0 0 20px rgba(179, 22, 213, 0.4) !important;
        }
        
        .social-icon-1:hover {
          background-color: #CD2373 !important;
          border-color: #CD2373 !important;
          color: #1B031B !important;
          box-shadow: 0 0 20px rgba(205, 35, 115, 0.4) !important;
        }
        
        .social-icon-2:hover {
          background-color: #FFEE34 !important;
          border-color: #FFEE34 !important;
          color: #1B031B !important;
          box-shadow: 0 0 20px rgba(255, 238, 52, 0.4) !important;
        }
        
        .social-icon-3:hover {
          background-color: #B316D5 !important;
          border-color: #B316D5 !important;
          color: #1B031B !important;
          box-shadow: 0 0 20px rgba(179, 22, 213, 0.4) !important;
        }

        .mobile-nav-link-0:hover {
          background-color: #B316D5 !important;
          color: #1B031B !important;
        }
        
        .mobile-nav-link-1:hover {
          background-color: #CD2373 !important;
          color: #1B031B !important;
        }
        
        .mobile-nav-link-2:hover {
          background-color: #FFEE34 !important;
          color: #1B031B !important;
        }
        
        .mobile-nav-link-3:hover {
          background-color: #B316D5 !important;
          color: #1B031B !important;
        }
        
        .mobile-nav-link-4:hover {
          background-color: #CD2373 !important;
          color: #1B031B !important;
        }

        .mobile-social-icon-0:hover {
          background-color: #B316D5 !important;
          color: #1B031B !important;
        }
        
        .mobile-social-icon-1:hover {
          background-color: #CD2373 !important;
          color: #1B031B !important;
        }
        
        .mobile-social-icon-2:hover {
          background-color: #FFEE34 !important;
          color: #1B031B !important;
        }
        
        .mobile-social-icon-3:hover {
          background-color: #B316D5 !important;
          color: #1B031B !important;
        }

        .hamburger-btn:hover {
          background-color: #B316D5 !important;
          color: #1B031B !important;
        }
      `}</style>
      
      <nav className="fixed w-full backdrop-blur-sm z-50 shadow-lg" style={{ backgroundColor: 'rgba(27, 3, 27, 0.9)' }}>
        <div className="container mx-auto px-4 py-4">
          {/* Desktop layout - Three-section grid */}
          <div className="hidden md:grid md:grid-cols-3 items-center">
            
            {/* Left section - Logo (1/3) */}
            <div className="flex justify-center">
              <a href="/" className="flex items-center group">
                <div className="relative">
                  <img 
                    src="/ddAsset 3.svg" 
                    alt="Castaway Studios" 
                    className="h-12 w-auto transition-all duration-300 group-hover:scale-110"
                    style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(100%) saturate(1000%) hue-rotate(270deg) brightness(1.2)' }}
                  />
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#B316D5' }}></div>
                </div>
              </a>
            </div>

            {/* Center section - Navigation tabs (1/3) */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {links.map(({ href, label }, index) => {
                  const linkClasses = [
                    'nav-link-home',
                    'nav-link-games', 
                    'nav-link-team',
                    'nav-link-careers',
                    'nav-link-contact'
                  ];
                  
                  return (
                    <a
                      key={href}
                      href={href}
                      className={`relative px-6 py-3 font-medium transition-all duration-300 rounded-lg border border-transparent ${linkClasses[index]}`}
                      style={{ color: '#F5F5F5' }}
                    >
                      <span className="relative z-10">{label}</span>
                      <div className="bg-overlay absolute inset-0 rounded-lg opacity-0 transition-all duration-300"></div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right section - Social media icons (1/3) */}
            <div className="flex justify-center">
              <div className="flex space-x-3">
                {socialLinks.map(({ href, icon, label }, index) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-transparent social-icon-${index}`}
                    style={{ 
                      backgroundColor: 'rgba(245, 245, 245, 0.1)',
                      color: '#F5F5F5'
                    }}
                    aria-label={label}
                  >
                    <SocialIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile layout - Logo and hamburger on same level */}
          <div className="md:hidden flex items-center justify-between">
            {/* Logo on the left */}
            <a href="/" className="flex items-center group">
              <div className="relative">
                <img 
                  src="/ddAsset 3.svg" 
                  alt="Castaway Studios" 
                  className="h-10 w-auto transition-all duration-300 group-hover:scale-110"
                  style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(100%) saturate(1000%) hue-rotate(270deg) brightness(1.2)' }}
                />
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: '#B316D5' }}></div>
              </div>
            </a>

            {/* Hamburger menu on the right */}
            <button
              className="focus:outline-none p-2 rounded-lg transition-all duration-300 hamburger-btn"
              style={{ color: '#F5F5F5' }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
        </div>

        {/* Mobile menu (only when open) */}
        {open && (
          <div className="md:hidden shadow-md border-t" style={{ backgroundColor: 'rgba(27, 3, 27, 0.95)', borderColor: '#B316D5' }}>
            <div className="flex flex-col space-y-2 p-4">
              {/* Mobile navigation links */}
              {links.map(({ href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium mobile-nav-link-${index}`}
                  style={{ color: '#F5F5F5' }}
                >
                  {label}
                </a>
              ))}
              
              {/* Mobile social links */}
              <div className="pt-4 border-t" style={{ borderColor: '#B316D5' }}>
                <p className="text-sm mb-3 px-4" style={{ color: '#F5F5F5' }}>Follow us</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map(({ href, icon, label }, index) => (
                    <a
                      key={icon}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 mobile-social-icon-${index}`}
                      style={{ 
                        backgroundColor: 'rgba(245, 245, 245, 0.1)',
                        color: '#F5F5F5'
                      }}
                      aria-label={label}
                    >
                      <SocialIcon icon={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
