import SkillsSection from "../components/skills/SkillsSection";
import SectionTitle from "../components/common/SectionTitle";
import { Skill } from "../types/Skill";

const skills: Skill[] = [
  { id: 1, name: "React", category: "Frontend", level: 90 },
  { id: 2, name: "TypeScript", category: "Frontend", level: 85 },
  { id: 3, name: "Tailwind CSS", category: "Frontend", level: 88 },

  { id: 4, name: "Java", category: "Backend", level: 85 },
  { id: 5, name: "Spring Boot", category: "Backend", level: 80 },
  { id: 6, name: "MySQL", category: "Backend", level: 78 },

  { id: 7, name: "Git", category: "Tools", level: 75 },
  { id: 8, name: "Docker", category: "Tools", level: 65 },
  { id: 9, name: "Postman", category: "Tools", level: 80 }
];

const SkillsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle
        title="Technical Skills"
        subtitle="Technologies I use to build scalable and modern applications"
      />

      <SkillsSection
        title="Frontend Development"
        skills={skills.filter(s => s.category === "Frontend")}
      />

      <SkillsSection
        title="Backend Development"
        skills={skills.filter(s => s.category === "Backend")}
      />

      <SkillsSection
        title="Tools & Platforms"
        skills={skills.filter(s => s.category === "Tools")}
      />
    </div>
  );
};

export default SkillsPage;
