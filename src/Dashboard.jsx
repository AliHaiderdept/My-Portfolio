import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    downloads: 0,
    bookings: 0,
    visitors: 0
  });

  useEffect(() => {
    fetch("http://localhost:8000/admin/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="dashboard">
      <h2 className="dash">Dashboard</h2>
      <div className="dashboard-grid">
      
        <div className="dashboard-card">
          <h2 className="dashboard-title"> Downloads</h2>
          <p className="dashboard-value">{stats.downloads}</p>
        </div>

        <div className="dashboard-card">
          <h2 className="dashboard-title"> Bookings</h2>
          <p className="dashboard-value">{stats.bookings}</p>
        </div>

        <div className="dashboard-card">
          <h2 className="dashboard-title">👁 Visitors</h2>
          <p className="dashboard-value">{stats.visitors}</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;