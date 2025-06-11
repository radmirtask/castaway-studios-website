import { useState, useEffect, useRef } from 'react';
import './BurgerMenu.css';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'home', href: '/' },
    { name: 'games', href: '/games' },
    { name: 'team', href: '/team' },
    { name: 'careers', href: '/careers' },
    { name: 'about us', href: '/about' }
  ];

  const highlightItems = [
    { name: 'contact us', href: '/contact', highlight: true }
  ];

  const handleNavClick = (item) => {
    setActiveTab(item.name);
    setIsOpen(false);
  };

  return (
    <>
      <button
        ref={buttonRef}
        className={`burger-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`burger-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
        <nav className="burger-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`burger-nav-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </a>
          ))}
          
          {highlightItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`burger-nav-item highlight ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.name}
            </a>
          ))}
          
          <div className="burger-social">
            <a href="#" className="social-link">
              <img src="/global/uil_facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className="social-link">
              <img src="/global/material-symbols_mail.svg" alt="Email" />
            </a>
            <a href="#" className="social-link">
              <img src="/global/mdi_linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </nav>
      </div>

      {isOpen && <div className="burger-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
