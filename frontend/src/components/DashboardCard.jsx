function DashboardCard({ title, value, description }) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{description}</p>
    </div>
  );
}

export default DashboardCard;