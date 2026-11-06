function NoticeCard({ title, category, date }) {
  return (
    <div className="notice-card">
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
}

export default NoticeCard;