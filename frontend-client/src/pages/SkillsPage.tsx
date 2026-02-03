import React from "react";
import SkillsDashboard from "../components/skills/SkillsDashboard";

const SkillsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* PAGE HEADER */}
        <section className="text-center">
          <h1 className="text-3xl font-bold">Skills</h1>
          <p className="text-gray-600 mt-2">
            Overview of my technical skills and proficiency levels
          </p>
        </section>

        {/* SKILLS DASHBOARD (CHART) */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Skill Proficiency
          </h2>
          <SkillsDashboard />
        </section>

        {/* SKILL CATEGORIES */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Skill Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>REST APIs</li>
                <li>JWT Security</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML & CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Tools & Database</h3>
              <ul className="list-disc ml-5 text-gray-700">
                <li>MySQL</li>
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>Maven</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SkillsPage;
