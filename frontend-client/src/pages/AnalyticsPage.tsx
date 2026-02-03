import AnalyticsDashboard from "../components/analytics/AnalyticsDashboard";

const AnalyticsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          System Analytics
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Overview of skills, chat activity, and usage statistics
        </p>

        <div className="bg-white p-6 rounded shadow">
          <AnalyticsDashboard />
        </div>

      </div>
    </div>
  );
};

export default AnalyticsPage;
