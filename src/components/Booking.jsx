import { useEffect, useRef } from 'react';

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z"/>
  </svg>
);

export default function Booking() {
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
    <section className="booking" id="booking">
      <div className="booking-grid reveal" ref={ref}>
        <div>
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">קביעת תור</span>
          </div>
          <h2 className="booking-title">
            מוכנים ל<span>סגנון</span><br />החדש שלכם?
          </h2>
          <p className="booking-text">
            קבעו תור עוד היום ותגיעו למספרה הכי מקצועית באזור גשר הזיו.
            ייעוץ אישי וחוויה ברמה הגבוהה ביותר.
          </p>
          <div className="booking-info">
            <div className="booking-info-item">
              <div className="booking-info-icon"><LocationIcon /></div>
              <a href="https://maps.google.com/?q=Gesher+Haziv+Nativ+Hayaara" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>קיבוץ גשר הזיו, רחוב נתיב היערה</a>
            </div>
            <div className="booking-info-item">
              <div className="booking-info-icon"><ClockIcon /></div>
              א'-ה' 09:00-20:00 | ו' 08:00-14:00
            </div>
            <div className="booking-info-item">
              <div className="booking-info-icon"><PhoneIcon /></div>
              <a href="tel:0587306008" style={{ direction: 'ltr', color: 'inherit' }}>058-730-6008</a>
            </div>
          </div>
        </div>

        <div className="booking-form-card">
          <div className="form-title">קביעת תור</div>
          <div className="form-sub">נחזור אליכם בהקדם</div>
          <div className="form-row">
            <input className="form-input" type="text" placeholder="שם מלא" />
            <input className="form-input" type="text" placeholder="טלפון" />
          </div>
          <div className="form-group">
            <select className="form-input" defaultValue="">
              <option value="" disabled>סוג השירות</option>
              <option>תספורת גברים</option>
              <option>עיצוב זקן</option>
              <option>תספורת + זקן</option>
              <option>גילוח חם</option>
              <option>תספורת ילדים</option>
              <option>חבילת חתן</option>
            </select>
          </div>
          <div className="form-group">
            <select className="form-input" defaultValue="">
              <option value="" disabled>מתי נוח לך?</option>
              <option>בוקר (09:00-12:00)</option>
              <option>צהריים (12:00-16:00)</option>
              <option>אחה"צ (16:00-20:00)</option>
            </select>
          </div>
          <button className="form-submit">קביעת תור</button>
          <a href="https://wa.me/972587306008?text=%D7%94%D7%99%D7%99%20%D7%98%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%AA%D7%95%D7%A8" target="_blank" rel="noopener noreferrer" className="form-wa">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 00-6.07 10.47L1 15l3.63-.94A7 7 0 108 1zm0 12.6a5.6 5.6 0 01-2.85-.78l-.2-.12-2.16.56.57-2.1-.13-.22A5.6 5.6 0 118 13.6z"/>
            </svg>
            שלח הודעה בוואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
