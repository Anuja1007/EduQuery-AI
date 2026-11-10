
import {
  LayoutDashboard,
  Bell,
  FileText,
  CalendarDays,
  MessageCircle,
  Settings,
  LogOut,
  GraduationCap,
  Users
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">
          <GraduationCap size={25} />
        </div>
        <div>
          <h2>EduQuery AI</h2>
          <span>SMART CAMPUS</span>
        </div>
      </div>

      <p className="sidebar-heading">WORKSPACE</p>

      <nav className="sidebar-nav">
        <a href="#dashboard" className="nav-link active">
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </a>

        <a href="#notices" className="nav-link">
          <Bell size={19} />
          <span>Notices</span>
        </a>

        <a href="#materials" className="nav-link">
          <FileText size={19} />
          <span>Study Materials</span>
        </a>

        <a href="#timetable" className="nav-link">
          <CalendarDays size={19} />
          <span>Timetable</span>
        </a>

        <a href="#students" className="nav-link">
          <Users size={19} />
          <span>Students</span>
        </a>

        <a href="#assistant" className="nav-link">
          <MessageCircle size={19} />
          <span>AI Assistant</span>
          <span className="ai-badge">AI</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <p className="sidebar-heading">PREFERENCES</p>

        <a href="#settings" className="nav-link">
          <Settings size={19} />
          <span>Settings</span>
        </a>

        <a href="#logout" className="nav-link">
          <LogOut size={19} />
          <span>Logout</span>
        </a>

        <div className="sidebar-profile">
          <div className="profile-avatar">S</div>
          <div className="profile-info">
            <strong>Student Name</strong>
            <span>Computer Engineering</span>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;
