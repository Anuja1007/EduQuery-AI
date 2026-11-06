import {
  LayoutDashboard,
  Bell,
  FileText,
  MessageCircle,
  CalendarDays
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>EduQuery AI</h2>

      <nav>
        <a href="#">
          <LayoutDashboard size={18} />
          Dashboard
        </a>

        <a href="#">
          <Bell size={18} />
          Notices
        </a>

        <a href="#">
          <FileText size={18} />
          Study Materials
        </a>

        <a href="#">
          <CalendarDays size={18} />
          Timetable
        </a>

        <a href="#">
          <MessageCircle size={18} />
          AI Assistant
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;