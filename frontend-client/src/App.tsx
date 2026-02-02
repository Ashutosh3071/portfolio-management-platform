import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SkillsDashboard from "./components/skills/SkillsDashboard";
import Navbar from "./components/common/Navbar";
import ChatBox from "./components/chat/ChatBox";
import AnalyticsDashboard from "./components/analytics/AnalyticsDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-4">
        <button
          onClick={logout}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>

      <SkillsDashboard />
      <ChatBox />
      <AnalyticsDashboard />
    </>
  );
}

export default App;
