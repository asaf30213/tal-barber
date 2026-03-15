const links = [
  { href: '#about', text: 'אודות' },
  { href: '#services', text: 'שירותים' },
  { href: '#gallery', text: 'גלריה' },
  { href: '#reviews', text: 'ביקורות' },
  { href: '#booking', text: 'יצירת קשר' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">TAL <span>COHEN</span></div>
        <div className="footer-links">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.text}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>קיבוץ גשר הזיו, רחוב נתיב היערה</span>
        <span>&copy; {new Date().getFullYear()} Tal Cohen Barbershop. כל הזכויות שמורות.</span>
      </div>
    </footer>
  );
}
