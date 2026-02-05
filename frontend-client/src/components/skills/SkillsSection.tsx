import SkillCard from "./SkillCard";
import { Skill } from "../../types/Skill";

type Props = {
  title: string;
  skills: Skill[];
};

const SkillsSection = ({ title, skills }: Props) => {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold text-white mb-6">
        {title}
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {skills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
