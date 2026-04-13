import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { getDownloadsCount, getVisitorsCount } from "./statsApi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    downloads: 0,
    visitors: 0
  });

  useEffect(() => {
    let isMounted = true;

    const loadStats = async () => {
      try {
        const [downloads, visitors] = await Promise.all([
          getDownloadsCount(),
          getVisitorsCount(),
        ]);

        if (isMounted) {
          setStats({ downloads, visitors });
        }
      } catch (error) {
        console.error("Failed to load dashboard stats", error);
      }
    };

    loadStats();

    const handleStatsUpdated = () => {
      loadStats();
    };

    window.addEventListener("portfolio-stats-updated", handleStatsUpdated);

    return () => {
      isMounted = false;
      window.removeEventListener("portfolio-stats-updated", handleStatsUpdated);
    };
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
          <h2 className="dashboard-title">👁 Visitors</h2>
          <p className="dashboard-value">{stats.visitors}</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;