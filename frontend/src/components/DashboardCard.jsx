
function DashboardCard({ title, value, description, icon: Icon, color }) {
  return (
    <div className="dashboard-card">

      <div className="card-top">
        <span className="card-title">{title}</span>

        <div className={`card-icon ${color}`}>
          <Icon size={22} />
        </div>
      </div>

      <h2>{value}</h2>

      <p>{description}</p>

    </div>
  );
}

export default DashboardCard;
