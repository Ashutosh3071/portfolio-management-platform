const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="text-indigo-500">Ashutosh Sahoo</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Full Stack Developer | Java • Spring Boot • React • Angular
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-600 hover:border-indigo-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
