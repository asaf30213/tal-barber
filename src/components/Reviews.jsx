import { useEffect, useRef } from 'react';

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="#c8a45a">
    <path d="M6 1l1.3 2.8 3.1.4-2.2 2.2.5 3.1L6 8l-2.7 1.5.5-3.1L1.6 4.2l3.1-.4L6 1z" />
  </svg>
);

const reviews = [
  {
    text: '"טל הוא ספר מדהים. תמיד יוצא מרוצה, תשומת לב לכל פרט. המספרה הכי טובה באזור."',
    avatar: 'א',
    name: "אלון מ'",
    date: '2024',
  },
  {
    text: '"הגעתי בפעם הראשונה ומיד הרגשתי בבית. תספורת מושלמת, אווירה נעימה, ומחירים הוגנים."',
    avatar: 'י',
    name: "ירון כ'",
    date: '2024',
  },
  {
    text: '"טל פשוט יודע מה הוא עושה. כבר שנתיים שאני מגיע אליו ולא מחליף. ממליץ בחום."',
    avatar: 'ד',
    name: "דניאל ש'",
    date: '2024',
  },
  {
    text: '"המקום הכי מקצועי באזור הגליל המערבי. שירות אישי, תוצאה מצוינת בכל פעם."',
    avatar: 'ר',
    name: "רועי א'",
    date: '2025',
  },
  {
    text: '"הבן שלי פחד מספרים עד שהגענו לטל. סבלני, מקצועי, והילד יוצא עם חיוך כל פעם."',
    avatar: 'מ',
    name: "מיכל ל'",
    date: '2025',
  },
  {
    text: '"תספורת חתן מושלמת. טל דאג לכל פרט ופרט. כל החברים שאלו איפה הסתפרתי."',
    avatar: 'ע',
    name: "עומר ד'",
    date: '2024',
  },
];

export default function Reviews() {
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
    <section className="reviews" id="reviews">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-label">
          <div className="section-label-line" />
          <span className="section-label-text">ביקורות</span>
        </div>
        <h2 className="section-title">מה <span>אומרים</span> עלינו</h2>
      </div>

      <div className="reviews-grid reveal" ref={ref}>
        {reviews.map(r => (
          <div className="review-card" key={r.name}>
            <div className="review-stars">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="review-text">{r.text}</p>
            <div className="review-author">
              <div className="review-avatar">{r.avatar}</div>
              <div>
                <span className="review-name">{r.name}</span>
                <span className="review-date">{r.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
