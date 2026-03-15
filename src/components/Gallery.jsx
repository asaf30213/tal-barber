import { useEffect, useRef } from 'react';

const galleryItems = [
  { label: 'פייד קלאסי' },
  { label: 'תספורת טקסטורה' },
  { label: 'עיצוב זקן' },
  { label: 'סקין פייד' },
  { label: 'תספורת + זקן' },
  { label: 'גילוח חם' },
  { label: 'סגנון מודרני' },
  { label: 'חבילת חתן' },
];

export default function Gallery() {
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">עבודות</span>
        </div>
        <h2 className="section-title">הגלריה <span>שלנו</span></h2>
      </div>

      <div className="gallery-grid reveal" ref={ref}>
        {galleryItems.map((item, i) => (
          <div className="gallery-item" key={i}>
            <div className="gallery-item-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(200,164,90,0.12)" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div className="gallery-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
