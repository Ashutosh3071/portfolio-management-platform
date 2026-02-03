import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Hi, I’m <span className="text-blue-600">Ashutosh Sahoo</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Aspiring Full Stack Developer building modern web applications
              using Spring Boot, React, and secure architectures.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded">
                View My Work
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">
                Contact Me
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/hero-dev.svg"
              alt="Developer Illustration"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
          {[
            { title: "Projects Showcase", desc: "Explore my portfolio projects" },
            { title: "Skills Dashboard", desc: "Track technical proficiency" },
            { title: "Work Experience", desc: "View professional journey" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded shadow text-center"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border rounded p-4">
                <h3 className="font-semibold">Portfolio Management Platform</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Full stack project with Spring Boot & React.
                </p>
                <button className="mt-4 text-blue-600">View Project →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Get In Touch
          </h2>

          <form className="bg-white p-6 rounded shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border p-2 rounded"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
