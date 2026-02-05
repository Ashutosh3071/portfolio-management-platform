import { useEffect, useState } from "react";
import { Skill } from "../../types/Skill";
import SkillCard from "./SkillCard";
import SectionTitle from "../common/SectionTitle";
import { getAllSkills } from "../../api/skillsApi";
import { motion } from "framer-motion";

const SkillsDashboard = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllSkills()
      .then((data: Skill[]) => setSkills(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading skills...</p>;
  }

  return (
  <div className="px-6 py-12">
    <SectionTitle
      title="Skills"
      subtitle="Technologies & tools I work with"
    />

    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12
          }
        }
      }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
  </div>
);
}
export default SkillsDashboard;
