import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 p-4 border-t">
      <p className="text-sm">&reg; {new Date().getFullYear()} Castaway Studios. All rights reserved.</p>
    </footer>
  );
}