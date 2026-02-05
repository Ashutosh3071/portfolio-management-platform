import SectionTitle from "../components/common/SectionTitle";

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16">

      {/* HERO */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-indigo-500">
          Hi, I’m Ashutosh 👋
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          Full Stack Developer | Java • Spring Boot • React
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mt-20">
        <SectionTitle
          title="What I Work With"
          subtitle="Technologies & tools I use daily"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-900 p-6 rounded">
            <h3 className="text-lg font-semibold text-indigo-400">Backend</h3>
            <p className="text-gray-400 mt-2">
              Java, Spring Boot, REST APIs, JWT, MySQL
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded">
            <h3 className="text-lg font-semibold text-indigo-400">Frontend</h3>
            <p className="text-gray-400 mt-2">
              React, TypeScript, Tailwind CSS
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded">
            <h3 className="text-lg font-semibold text-indigo-400">Tools</h3>
            <p className="text-gray-400 mt-2">
              Git, GitHub, Docker, Postman
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
