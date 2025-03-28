import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Node.js", "Python", "Django"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 bg-clip-text text-transparent to-cyan-400 text-center">
            About me
          </h2>

          <div className="rounded-xl p-8 border-blue/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-600 mb-6">
              Blah blah blah blah blah blah blah
            </p>

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

          {/* Education and Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <span className="font-semibold">BSc in Computer Science</span>{" "}
                  - City St.George's University of London (2024-present)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>
            </div>
            {/* Experience */}
            <div className="p-6 rounded-xl border-black/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Work Experience</h3>
              <div className="space-y-4 text-gray-600">
                {/* 1 */}
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Job Name at ABC Corp (2025-present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>
                {/* 2 */}
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at DEF Corp (2025-present){" "}
                  </h4>
                  <p>
                    Assisted in building frontend components and integrating
                    REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
