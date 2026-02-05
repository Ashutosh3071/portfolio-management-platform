const ProjectsPreview = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="bg-slate-800 p-6 rounded-xl hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl mb-2">
                Project {i}
              </h3>
              <p className="text-slate-400 text-sm">
                Short project description goes here.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
