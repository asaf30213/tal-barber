import { useEffect, useRef } from 'react';

const ScissorsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);

const services = [
  { name: 'תספורת גברים', desc: 'תספורת מקצועית עם ייעוץ אישי, התאמה מדויקת למבנה הפנים והסגנון שלך.', price: '80' },
  { name: 'עיצוב זקן', desc: 'עיצוב וגילוח זקן מקצועי, עם תשומת לב לכל פרט. תוצאה מושלמת.', price: '50' },
  { name: 'תספורת + זקן', desc: 'חבילה מלאה הכוללת תספורת מעוצבת ועיצוב זקן. החבילה הנפוצה ביותר.', price: '120' },
  { name: 'גילוח חם', desc: 'גילוח מסורתי עם מגבת חמה ותער. חוויה קלאסית ברמה הגבוהה ביותר.', price: '60' },
  { name: 'תספורת ילדים', desc: 'תספורת מקצועית לילדים באווירה נעימה וסבלנית. מתאים לכל הגילאים.', price: '60' },
  { name: 'חבילת חתן', desc: 'חבילה מיוחדת ליום הגדול. תספורת, עיצוב זקן, טיפוח ותכנון הסגנון.', price: '200' },
];

export default function Services() {
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">מחירון</span>
          </div>
          <h2 className="section-title">השירותים <span>שלנו</span></h2>
        </div>
      </div>

      <div className="services-grid reveal" ref={ref}>
        {services.map(s => (
          <div className="service-card" key={s.name}>
            <div className="service-icon"><ScissorsIcon /></div>
            <h3 className="service-name">{s.name}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-price">{s.price} &#8362;</div>
          </div>
        ))}
      </div>
    </section>
  );
}
