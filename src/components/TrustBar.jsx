const items = [
  'ציוד מקצועי מהשורה הראשונה',
  'חומרים איכותיים בלבד',
  'אווירה נעימה ואישית',
  'ניסיון של שנים',
  'מחירים הוגנים',
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      {items.map(item => (
        <div className="trust-item" key={item}>
          <div className="trust-dot" />
          {item}
        </div>
      ))}
    </div>
  );
}
