export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line" />
          <span className="hero-eyebrow-text">Barbershop - Gesher Haziv</span>
          <div className="hero-eyebrow-line" />
        </div>

        <h1 className="hero-title">
          <span>הסגנון</span> שמדבר<br />בשבילך
        </h1>

        <p className="hero-subtitle">
          מספרה מקצועית בקיבוץ גשר הזיו. תספורות גברים, עיצוב זקן, וחוויה שמותאמת בדיוק בשבילך.
        </p>

        <div className="hero-actions">
          <button className="btn-accent" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            קביעת תור
          </button>
          <a href="#services" className="btn-outline">השירותים שלנו</a>
        </div>

        <div className="hero-stats">
          <div>
            <span className="hero-stat-num">2,000<span>+</span></span>
            <span className="hero-stat-label">לקוחות מרוצים</span>
          </div>
          <div>
            <span className="hero-stat-num">8<span>+</span></span>
            <span className="hero-stat-label">שנות ניסיון</span>
          </div>
          <div>
            <span className="hero-stat-num">5<span>.0</span></span>
            <span className="hero-stat-label">דירוג Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
