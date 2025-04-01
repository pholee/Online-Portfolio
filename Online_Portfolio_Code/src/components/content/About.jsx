import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Node.js", "Python", "Django"];
  const workExperience = [
    {
      role: "Course Representative",
      company:
        "City St.George's, University of London & University of Westminster",
      period: "2023 - Present",
      description:
        "Collected and analyzed feedback from students, summarizing and presenting key insights during Student-Staff Liaison meetings.",
    },
    {
      role: "UKSEDS National Rocketry Championship 2025",
      company: "City St.George's, University of London",
      period: "Nov 2024 - Present",
      description:
        "Constructed and soldered flight circuits. Developed data collection software to access remote flight information.",
    },
    {
      role: "IEEE End of Line competition 2024",
      company: "City St.George's, University of London",
      period: "Oct 2024 - Dec 2024",
      description:
        "Led a team in a robotics competition to build and code an autonomous robot using arduino.",
    },
    {
      role: "Data Analysis Internship",
      company: "Meta",
      period: "Oct 2024 - Oct 2024",
      description:
        "Conducted exploratory data analysis on a set of data, producing a professional report based on a given business scenario.",
    },
  ];

  return (
    <section id="about" className="min-h-screen p-8">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8">About me</h2>

          {/* About me info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="md:col-span-1 flex flex-col gap-6">
              {/* Short intro & skills */}

              {/* Row 1 */}
              <div className="p-6 rounded-xl border-text-1/10 border">
                {/* Skills grid */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Frontend skills */}
                  <div className="rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-accent-text/10 text-accent-text py-1 px-3 rounded-full text-sm hover:bg-accent-text/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Backend skills */}
                  <div className="rounded-xl">
                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-accent-text/10 text-accent-text py-1 px-3 rounded-full text-sm hover:bg-accent-text/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              {/* Education */}
              <div className="p-6 rounded-xl border-text-1/10 border">
                <h3 className="text-xl font-bold mb-4"> Education </h3>
                <ul className="list-disc list-inside text-text-2 space-y-2">
                  <li>
                    <span className="font-semi-bold">
                      BSc in Computer Science
                    </span>{" "}
                    - City St.George's University of London (2024-present)
                  </li>
                  <li>
                    Relevant Coursework: Systems Architecture, Operating
                    Systems, Data Structures and Algorithms...
                  </li>
                </ul>
              </div>
            </div>

            {/* Columns 2 & 3 */}
            <div className="md:col-span-2">
              <div className="relative">
                {/* Central line */}
                <div className="absolute left-1/2 w-0.5 h-full bg-accent-bg transform -translate-x-1/2"></div>

                {/* Timeline items */}
                <div className="space-y-1">
                  {workExperience.map((job, index) => (
                    <div
                      key={index}
                      className={`relative flex ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                      }`}
                      style={{ marginTop: index === 0 ? "0" : "-3rem" }}
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute top-8 w-3 h-3 bg-accent-bg rounded-full ${
                          index % 2 === 0
                            ? "left-1/2 -ml-1.5"
                            : "right-1/2 -mr-1.5"
                        }`}
                      ></div>

                      {/* Job Details */}
                      <div
                        className={`w-5/12 p-4 rounded-lg ${
                          index % 2 === 0
                            ? "ml-4 mr-auto text-left"
                            : "mr-4 ml-auto text-right"
                        }`}
                      >
                        <h4 className="font-semibold text-md md:text-lg">
                          {job.role}
                        </h4>
                        <p className="text-sm/4 md:text-sm text-text-3 mb-2">
                          {job.company} • {job.period}
                        </p>
                        <p className="text-sm md:text-md text-text-2">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};