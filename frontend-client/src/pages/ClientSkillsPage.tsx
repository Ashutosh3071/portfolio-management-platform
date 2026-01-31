import React from "react";
import SkillsDashboard from "../components/skills/SkillsDashboard";

const ClientSkillsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-4">
        Client – Skills Overview
      </h1>

      <SkillsDashboard />
    </div>
  );
};

export default ClientSkillsPage;
