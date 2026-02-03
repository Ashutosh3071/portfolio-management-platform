import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6 space-y-10">

        {/* ABOUT ME */}
        <section className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="text-gray-700 leading-relaxed">
            I am an aspiring Full Stack Developer with hands-on experience in
            building secure and scalable web applications using Spring Boot,
            React, and modern frontend technologies. I enjoy solving real-world
            problems and continuously improving my technical skills.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Bachelor’s Degree in Computer Science</li>
            <li>Relevant coursework: Data Structures, DBMS, Web Technologies</li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <p className="text-gray-700">
            Software Developer Intern — Worked on backend APIs, frontend
            dashboards, authentication, and database integration using Spring
            Boot and React.
          </p>
        </section>

        {/* CAREER OBJECTIVE */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Career Objective</h2>
          <p className="text-gray-700">
            To secure a challenging position as a Full Stack Developer where I
            can apply my skills, learn continuously, and contribute to impactful
            software solutions.
          </p>
        </section>

        {/* TECHNOLOGIES */}
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Java", "Spring Boot", "React", "MySQL", "JWT", "Tailwind CSS"].map(
              (tech) => (
                <div
                  key={tech}
                  className="border rounded py-2 text-gray-700"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
