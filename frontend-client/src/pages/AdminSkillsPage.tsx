import React from "react";
import SkillsDashboard from "../components/skills/SkillsDashboard";

const AdminSkillsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-4">
        Admin – Skills Management
      </h1>

      {/* Later you will add Add/Edit/Delete here */}
      <SkillsDashboard />
    </div>
  );
};

export default AdminSkillsPage;
