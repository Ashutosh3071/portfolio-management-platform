import { useEffect, useState } from "react";
import { getAllProjects } from "../api/projectApi";
import { Project } from "../models/Project";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProjects()
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading projects...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        <section className="text-center">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-gray-600 mt-2">
            Projects fetched dynamically from backend
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded shadow"
            >
              <h3 className="font-semibold text-lg">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>

              <p className="text-sm mt-2">
                <b>Tech Stack:</b> {project.techStack}
              </p>

              <p className="text-sm">
                <b>Client:</b> {project.clientName}
              </p>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
};

export default ProjectsPage;
