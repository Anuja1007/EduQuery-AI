
import {
  FileText,
  CalendarDays,
  ArrowUpRight
} from "lucide-react";

function NoticeCard({ title, category, date, description }) {
  return (
    <div className="notice-card">

      <div className="notice-icon">
        <FileText size={21} />
      </div>

      <div className="notice-content">

        <div className="notice-meta">
          <span className="notice-category">{category}</span>

          <span className="notice-date">
            <CalendarDays size={13} />
            {date}
          </span>
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

      </div>

      <button className="notice-action" aria-label="View notice">
        <ArrowUpRight size={19} />
      </button>

    </div>
  );
}

export default NoticeCard;
