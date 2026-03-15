import { useState } from 'react';

const links = [
  { href: '#about', text: 'אודות' },
  { href: '#services', text: 'שירותים' },
  { href: '#gallery', text: 'גלריה' },
  { href: '#reviews', text: 'ביקורות' },
  { href: '#booking', text: 'יצירת קשר' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">TAL <span>COHEN</span></div>

      <div className="nav-links">
        {links.map(l => (
          <a key={l.href} href={l.href}>{l.text}</a>
        ))}
        <a href="#booking" className="nav-cta">קביעת תור</a>
      </div>

      <button
        className={`nav-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="תפריט"
      >
        <span /><span /><span />
      </button>

      {open && (
        <div className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.text}</a>
          ))}
          <a href="#booking" className="nav-cta" onClick={() => setOpen(false)}>קביעת תור</a>
        </div>
      )}
    </nav>
  );
}
