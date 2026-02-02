import SkillsDashboard from "../components/skills/SkillsDashboard";
import ChatBox from "../components/chat/ChatBox";
import AnalyticsDashboard from "../components/analytics/AnalyticsDashboard";

const DashboardPage = () => {
  return (
    <div className="space-y-10 p-6">

      <section>
        <h1 className="text-2xl font-bold mb-4">Skills Overview</h1>
        <SkillsDashboard />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">Live Chat</h1>
        <ChatBox />
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-4">System Analytics</h1>
        <AnalyticsDashboard />
      </section>

    </div>
  );
};

export default DashboardPage;
