// /Users/entheos/Documents/Backyard Bounty/pages/stats.js
import { useEffect, useState } from "react";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/stats");
        const data = await res.json();
        setStats(data);
      } catch {
        setError("Stats are unavailable right now.");
      }
    };
    fetchStats();
  }, []);

  if (!stats) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg px-8 pt-6 pb-8">
        <h2 className="text-2xl font-semibold mb-4">Website Stats</h2>
        {error && <p className="mb-3 text-sm text-red-700 theme-night:text-red-300">{error}</p>}
        {stats?.available === false && (
          <p className="mb-3 text-sm opacity-80">
            Redis is not configured or could not be reached, so these are fallback values.
          </p>
        )}
        <p className="mb-2">Total Views: {stats.totalViews}</p>
        <p>Unique Visitors: {stats.uniqueVisitors}</p>
      </div>
    </div>
  );
}
