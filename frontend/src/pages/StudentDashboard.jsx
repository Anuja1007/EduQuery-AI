import {
  Bell,
  BookOpen,
  CalendarDays,
  Users,
  FileText,
  BrainCircuit,
  Clock,
  Search,
  Sparkles,
  ArrowRight,
  Upload,
  GraduationCap
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import NoticeCard from "../components/NoticeCard";

function StudentDashboard() {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        {/* TOP BAR */}
        <header className="topbar">

          <span className="breadcrumb">
            Home / Dashboard
          </span>

          <div className="topbar-right">

            <button className="top-icon">
              <Search size={19} />
            </button>

            <button className="top-icon notification-btn">
              <Bell size={19} />
              <span className="notification-dot"></span>
            </button>

            <div className="top-profile">
              <div className="top-avatar">S</div>
              <span>Student</span>
            </div>

          </div>
        </header>

        {/* WELCOME BANNER */}
        <section className="welcome-section">

          <div>
            <p className="welcome-label">
              YOUR ACADEMIC SPACE
            </p>

            <h1>Welcome back, Student! 👋</h1>

            <p className="welcome-description">
              Everything happening in your college, all in one place.
            </p>
          </div>

          <div className="welcome-illustration">
            <GraduationIcon />
          </div>

        </section>

        {/* STATISTICS */}
        <section className="dashboard-stats">

          <DashboardCard
            title="Total Notices"
            value="12"
            description="College announcements"
            icon={Bell}
            color="blue"
          />

          <DashboardCard
            title="Upcoming Exams"
            value="03"
            description="Scheduled examinations"
            icon={CalendarDays}
            color="purple"
          />

          <DashboardCard
            title="Study Materials"
            value="24"
            description="Available resources"
            icon={BookOpen}
            color="green"
          />

        </section>

        {/* QUICK ACTIONS */}
        <section className="quick-actions-section">

          <div className="section-header">
            <div>
              <h2>Quick Actions</h2>
              <p>Access your academic resources quickly.</p>
            </div>
          </div>

          <div className="quick-actions-grid">

            <button className="quick-action">
              <div className="action-icon blue">
                <Bell size={21} />
              </div>
              <span>View Notices</span>
            </button>

            <button className="quick-action">
              <div className="action-icon purple">
                <Upload size={21} />
              </div>
              <span>Study Materials</span>
            </button>

            <button className="quick-action">
              <div className="action-icon orange">
                <CalendarDays size={21} />
              </div>
              <span>View Timetable</span>
            </button>

            <button className="quick-action">
              <div className="action-icon green">
                <BrainCircuit size={21} />
              </div>
              <span>Ask EduQuery AI</span>
            </button>

          </div>
        </section>

        {/* MAIN DASHBOARD GRID */}
        <section className="dashboard-content">

          {/* ANNOUNCEMENTS */}
          <div className="announcements-section">

            <div className="section-header">
              <div>
                <h2>Recent Announcements</h2>
                <p>Stay updated with college information.</p>
              </div>

              <a href="#notices" className="view-all">
                View all <ArrowRight size={15} />
              </a>
            </div>

            <div className="notice-list">

              <NoticeCard
                title="End Semester Examination"
                category="Examination"
                date="05 Nov 2026"
                description="The end semester examination timetable has been announced."
              />

              <NoticeCard
                title="Assignment Submission"
                category="Academic"
                date="06 Nov 2026"
                description="Submit your pending assignments before the deadline."
              />

              <NoticeCard
                title="College Holiday Announcement"
                category="General"
                date="04 Nov 2026"
                description="Important information about the upcoming college holiday."
              />

            </div>

          </div>

          {/* RIGHT PANEL */}
          <aside className="right-panel">

            <div className="ai-card">

              <div className="ai-card-icon">
                <Sparkles size={24} />
              </div>

              <span className="ai-label">YOUR SMART ASSISTANT</span>

              <h3>Meet EduQuery AI</h3>

              <p>
                Have questions about notices, examinations or
                college information? Your AI assistant is here to help.
              </p>

              <button className="ai-button">
                Ask a Question
                <ArrowRight size={17} />
              </button>

            </div>

            {/* EVENTS */}
            <div className="events-card">

              <div className="section-header">
                <h3>Upcoming Events</h3>
                <CalendarDays size={19} />
              </div>

              <div className="event-item">

                <div className="event-date">
                  <strong>15</strong>
                  <span>DEC</span>
                </div>

                <div>
                  <h4>Theory Examinations</h4>
                  <p><Clock size={13} /> Examination schedule</p>
                </div>

              </div>

              <div className="event-item">

                <div className="event-date purple-date">
                  <strong>05</strong>
                  <span>DEC</span>
                </div>

                <div>
                  <h4>Practical Examinations</h4>
                  <p><Clock size={13} /> Examination schedule</p>
                </div>

              </div>

            </div>

          </aside>

        </section>

        <footer className="dashboard-footer">
          © 2026 EduQuery AI · Your Campus, One Smart Platform.
        </footer>

      </main>

    </div>
  );
}

function GraduationIcon() {
  return (
    <div className="welcome-icon">
      <GraduationCap size={65} />
    </div>
  );
}

export default StudentDashboard;
