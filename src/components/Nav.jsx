import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SocialIcon = ({ icon }) => {
    const iconPaths = {
      twitter: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
      instagram: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11v11h-11z M9 22h6c5 0 9-4 9-9V9c0-5-4-9-9-9H9C4 0 0 4 0 9v4c0 5 4 9 9 9z",
      linkedin: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z",
      discord: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"
    };

    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background-primary/95 backdrop-blur-md shadow-lg border-b border-accent-violet/20' 
          : 'bg-background-primary/80 backdrop-blur-sm'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="group flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="/ddAsset 3.svg" 
                    alt="Castaway Studios" 
                    className="h-10 w-auto transition-all duration-300 group-hover:scale-110"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <div className="absolute inset-0 bg-accent-violet/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
                {/* <span className="text-xl font-bold text-gradient-violet-pink hidden sm:block">
                  CASTAWAY STUDIOS
                </span> */}
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link-${link.label.toLowerCase()} relative px-4 py-2 rounded-lg transition-all duration-300 group`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="bg-overlay absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 border-2 border-transparent social-icon-${index}`}
                  style={{ 
                    backgroundColor: 'rgba(245, 245, 245, 0.1)',
                    color: '#F5F5F5'
                  }}
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hamburger-btn p-2 rounded-lg bg-accent-violet/10 text-accent-violet transition-all duration-300"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 border-t border-accent-violet/20">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link-${index} block px-4 py-3 rounded-lg text-text-primary transition-all duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-accent-violet/20">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mobile-social-icon-${index} p-3 rounded-lg bg-accent-violet/10 text-accent-violet transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <SocialIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
