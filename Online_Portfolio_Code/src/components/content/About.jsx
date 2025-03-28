import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Node.js", "Python", "Django"];
  const workExperience = [
    {
      role: "Software Engineer",
      company: "ABC Corp",
      period: "2025 - Present",
      description:
        "Developed and maintained microservices for cloud-based applications, enhancing performance and scalability.",
    },
    {
      role: "Frontend Developer Intern",
      company: "DEF Corp",
      period: "2024 - 2025",
      description:
        "Assisted in building reusable frontend components and integrating REST APIs using React and TailwindCSS.",
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "2023 - 2024",
      description:
        "Designed and developed responsive websites for clients, improving user engagement and performance.",
    },
  ];

  return (
    <section id="about" className="min-h-screen p-8">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 bg-clip-text text-transparent to-cyan-400 text-center">
            About me
          </h2>

          {/* About me info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-row-1 md:grid-row-2 gap-6">

              {/* Short intro & skills */}
              <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-600 mb-6">
                  Blah blah blah blah blah blah blah
                </p>

                {/* Skills grid*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Frontend skills */}
                  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Backend skills */}
                  <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Education </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <span className="font-semibold">
                      BSc in Computer Science
                    </span>{" "}
                    - City St.George's University of London (2024-present)
                  </li>
                  <li>
                    Relevant Coursework: Data Structures, Web Development, Cloud
                    Computing...
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6">Timeline</h3>
              <div className="relative border-l-2 border-blue-200 pl-6 space-y-6">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-8 top-2 w-3 h-3 bg-blue-200 rounded-full"></div>

                    {/* Job Details */}
                    <h4 className="font-semibold text-lg">{job.role}</h4>
                    <p className="text-sm text-gray-500">
                      {job.company} • {job.period}
                    </p>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
