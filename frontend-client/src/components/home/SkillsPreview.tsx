const SkillsPreview = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Java", "Spring Boot", "React", "Angular"].map(skill => (
            <div
              key={skill}
              className="bg-slate-800 p-6 rounded-xl text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
