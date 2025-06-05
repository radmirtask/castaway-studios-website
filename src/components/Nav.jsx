import React from 'react';

export default function Nav() {
  return (
    <nav>
      {/* Placeholder: Add logo and menu links here later */}
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/games" className="hover:underline">Games</a></li>
        <li><a href="/team" className="hover:underline">Team</a></li>
        <li><a href="/careers" className="hover:underline">Careers</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}