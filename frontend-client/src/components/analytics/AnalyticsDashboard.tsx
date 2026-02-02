import { useEffect, useState } from "react";
import { getAnalytics, AnalyticsStats } from "../../api/analyticsApi";

const AnalyticsDashboard = () => {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);

  useEffect(() => {
    getAnalytics().then(setStats);
  }, []);

  if (!stats) {
    return <p className="text-center mt-6">Loading analytics...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        System Analytics
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded text-center">
          <p className="text-lg font-semibold">Skills</p>
          <p className="text-2xl">{stats.totalSkills}</p>
        </div>

        <div className="bg-green-100 p-4 rounded text-center">
          <p className="text-lg font-semibold">Messages</p>
          <p className="text-2xl">{stats.totalMessages}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded text-center">
          <p className="text-lg font-semibold">User Messages</p>
          <p className="text-2xl">{stats.userMessages}</p>
        </div>

        <div className="bg-purple-100 p-4 rounded text-center">
          <p className="text-lg font-semibold">AI Messages</p>
          <p className="text-2xl">{stats.aiMessages}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
