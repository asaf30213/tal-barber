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
          <img
            src={`${import.meta.env.BASE_URL}tal-about.jpg`}
            alt="Tal Cohen"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
