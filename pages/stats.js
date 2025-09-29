// pages/stats.jsx
import { useEffect, useState } from "react";

export default function Stats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/stats");
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  }, []);

  if (!stats) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg px-8 pt-6 pb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Stats</h2>
        <p className="mb-2">Total Views: {stats.totalViews}</p>
        <p>Unique Visitors: {stats.uniqueVisitors}</p>
      </div>
    </div>
  );
}
