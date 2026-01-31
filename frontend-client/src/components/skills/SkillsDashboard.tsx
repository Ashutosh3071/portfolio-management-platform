import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getAllSkills } from "../../api/skillApi";
import { Skill } from "../../models/Skill";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const SkillsDashboard: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllSkills()
      .then((data) => setSkills(data))
      .finally(() => setLoading(false));
  }, []);

  const data = {
    labels: skills.map((s) => s.name),
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: skills.map((s) => s.proficiency),
        backgroundColor: "rgba(59, 130, 246, 0.7)", // Tailwind blue-500
      },
    ],
  };

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600 dark:text-gray-300">
        Loading skills...
      </div>
    );
  }

  return (
    <div
      className="
        w-3/4 mx-auto mt-6 p-6
        bg-white dark:bg-gray-900
        text-black dark:text-white
        rounded-lg shadow
      "
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Skills Dashboard
      </h2>

      {skills.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No skills available
        </p>
      ) : (
        <Bar data={data} />
      )}
    </div>
  );
};

export default SkillsDashboard;
