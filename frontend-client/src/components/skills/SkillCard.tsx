import { Skill } from "../../types/Skill";
import { motion } from "framer-motion";

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-br from-slate-900 to-slate-800 
                 border border-slate-700 rounded-2xl p-5 shadow-lg"
    >
      {/* Skill Name */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-white">
          {skill.name}
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
          {skill.category}
        </span>
      </div>

      {/* Progress */}
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
        />
      </div>

      <p className="text-right text-xs text-gray-400 mt-1">
        {skill.level}% proficiency
      </p>
    </motion.div>
  );
};

export default SkillCard;
