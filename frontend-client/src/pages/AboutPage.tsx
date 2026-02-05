import SectionTitle from "../components/common/SectionTitle";
import FocusCard from "../components/common/FocusCard";
import TimelineItem from "../components/common/TimelineItem";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16 px-4">

      {/* INTRO */}
      <section className="mb-20">
        <SectionTitle
          title="About Me"
          subtitle="Who I am and what I do"
        />

        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          I’m a passionate full stack developer focused on building
          scalable, secure, and maintainable web applications.
          I enjoy solving real-world problems using clean architecture
          and modern technologies.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="mb-20">
        <SectionTitle
          title="Education"
          subtitle="My academic journey"
        />

        <div className="border-l border-slate-700 pl-6 space-y-10">
          <TimelineItem
            year="2022 – 2026"
            title="B.Tech in Computer Science"
            place="Your College / University Name"
            description="Focused on software engineering, data structures,
            operating systems, databases, and full stack development."
          />

          <TimelineItem
            year="2020 – 2022"
            title="Higher Secondary (12th)"
            place="Your School Name"
            description="Science stream with focus on mathematics and computer science."
          />
        </div>
      </section>

      {/* EXPERIENCE / INTERESTS */}
      <section className="mb-20">
        <SectionTitle
          title="What I Focus On"
          subtitle="Skills & interests"
        />

        <div className="grid md:grid-cols-3 gap-6">
          <FocusCard
            title="Backend Development"
            text="Designing secure REST APIs, authentication systems,
            and scalable server-side logic."
          />
          <FocusCard
            title="Frontend Development"
            text="Building responsive, accessible, and modern user interfaces."
          />
          <FocusCard
            title="System Design"
            text="Clean architecture, database design, and performance optimization."
          />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
