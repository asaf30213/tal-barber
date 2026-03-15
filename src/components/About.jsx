import { useEffect, useRef } from 'react';

const features = [
  'תספורות מעוצבות בהתאמה אישית לכל לקוח',
  'עיצוב זקן מקצועי עם תשומת לב לכל פרט',
  'חוויית לקוח יוקרתית באווירה ביתית',
  'שימוש במוצרים מקצועיים בלבד',
];

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-grid reveal" ref={ref}>
        <div>
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">אודות</span>
          </div>
          <h2 className="section-title">
            הספר שלך<br />ב<span>גשר הזיו</span>
          </h2>
          <p className="about-text">
            טל כהן, ספר מקצועי עם ניסיון של שנים בתחום. המספרה ממוקמת ברחוב נתיב היערה בקיבוץ גשר הזיו ומציעה חוויית תספורת ברמה הגבוהה ביותר. כל לקוח מקבל יחס אישי, ייעוץ מקצועי והתאמה מושלמת לסגנון שלו.
          </p>
          <div className="about-features">
            {features.map(f => (
              <div className="about-feature" key={f}>
                <div className="about-feature-dot" />
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="about-image">
          <div className="about-image-placeholder">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(200,164,90,0.15)" strokeWidth="1">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
