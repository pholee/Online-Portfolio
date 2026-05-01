import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const developmentSkills = ["Python", "Java", "SQL", "HTML/CSS", "React", "TailwindCSS"];
  const toolsSkills = ["Git", "Figma"];
  const workExperience = [
    {
      role: "UX Designer",
      company: "Koffeecup",
      period: "Aug 2025 - present",
      description:
        "Designing wireframes and user flows for digital experiences (including mobile and VR games), also building a shared component library to streamline development for the previously mentioned.",
    },
    {
      role: "UX Design Intern",
      company: "Koffeecup",
      period: "Jun 2025 - Aug 2025",
      description:
        "Designing wireframes and user flows for digital experiences (including mobile and VR games), also building a shared component library to streamline development for the previously mentioned.",
    },
    {
      role: "UKSEDS National Rocketry Championship 2025",
      company: "City St.George's, University of London",
      period: "Nov 2024 - Jun 2025",
      description:
        "Constructed and soldered flight circuits. Developed data collection software to access remote flight information.",
    },

  ];

  return (
    <section id="about" className="md:mb-16 p-8">
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">About me</h2>

          {/* About me info grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
            {/* Column 1 */}
            <div className="md:col-span-1 flex flex-col gap-6">
              {/* Short intro & skills */}

              {/* Row 1 */}
              <div className="p-6 rounded-xl border-text-1/10 border">
                {/* Skills grid */}
                <div className="grid grid-cols-1 gap-6">
                  {/* Frontend skills */}
                  <div className="rounded-xl">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {developmentSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-accent-text/10 text-accent-text py-1 px-3 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Backend skills */}
                  <div className="rounded-xl">
                    <h3 className="text-lg sm:text-xl font-bold mb-4">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {toolsSkills.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-accent-text/10 text-accent-text py-1 px-3 rounded-full text-xs sm:text-sm"
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
                <h3 className="text-lg sm:text-xl font-bold mb-4"> Education </h3>
                <ul className="list-disc list-inside text-text-2 text-sm sm:text-md space-y-2">
                  <p>
                    <span className=" text-text-1 font-semi-bold">
                      BSc in Computer Science
                    </span>
                    - City St.George&apos;s University of London 
                    (2024-2028)
                  </p>
                </ul>
              </div>
            </div>

            {/* Columns 2 & 3 */}
            {/* Timeline */}
            <div className="md:col-span-2">
              <div className="relative mt-16 md:mt-0 sm:px-8 md:px-4">
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
                        className={`w-5/12 rounded-lg ${
                          index % 2 === 0
                            ? "mr-auto text-left"
                            : "ml-auto text-right"
                        }`}
                      >
                        <h4 className="font-semibold text-sm sm:text-md md:text-lg">
                          {job.role}
                        </h4>
                        <p className="text-xs sm:text-sm md:text-sm text-text-3 mb-2">
                          {job.company} • {job.period}
                        </p>
                        <p className="text-xs sm:text-sm md:text-md text-text-2">
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