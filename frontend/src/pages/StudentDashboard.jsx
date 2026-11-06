import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import NoticeCard from "../components/NoticeCard";

function StudentDashboard() {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <h1>Welcome, Student!</h1>
        <p>Here's what's happening in your college.</p>

        <div className="dashboard-grid">

          <DashboardCard
            title="Total Notices"
            value="12"
            description="Available announcements"
          />

          <DashboardCard
            title="Upcoming Exams"
            value="3"
            description="Examinations scheduled"
          />

          <DashboardCard
            title="Study Materials"
            value="24"
            description="Available resources"
          />

        </div>

        <h2>Recent Announcements</h2>

        <NoticeCard
          title="End Semester Examination"
          category="Examination"
          date="05 November 2026"
        />

        <NoticeCard
          title="Assignment Submission"
          category="Academic"
          date="06 November 2026"
        />

      </main>

    </div>
  );
}

export default StudentDashboard;