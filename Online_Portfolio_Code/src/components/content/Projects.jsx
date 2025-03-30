import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
      <section id="projects" className="min-h-screen p-8">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto mb-10">
            {/* Heading */}
            <h2 className="text-2xl font-bold mb-8">
              <span className="w-3 h-3 bg-black inline-block mr-4"></span>
              Featured Projects
            </h2>

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1 */}
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {/* Image */}
                <img
                  src={"/Processing App.png"}
                  alt="Processing App"
                  className="mb-8"
                />
                <h3 className="text-xl font-bold mb-2"> Processing App </h3>
                <p className="text-gray-600 mb-4">
                  A fun interactable processing sketch that reads data from a
                  text file containing select information about my day-to-day
                  schedule.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Processing", "Excel", "Procreate"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Feature 1 */}
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/pholee/Dear-Data-Diary-Creative-Coding"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              {/* 2 */}
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {/* Image */}
                <img
                  src={"/Portfolio Website.png"}
                  alt="Portfolio Website"
                  className="mb-8"
                />
                <h3 className="text-xl font-bold mb-2">
                  This Portfolio Website
                </h3>
                <p className="text-gray-600 mb-4">
                  Simple portfolio website designed by me.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TailwindCSS", "Figma"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Feature 2 */}
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/pholee/Online-Portfolio"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
              {/* 3 */}
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                {/* Image */}
                <img
                  src={"/CityEngine 2D-Game.png"}
                  alt="CityEngine 2D-Game"
                  className="mb-8"
                />
                <h3 className="text-xl font-bold mb-2">
                  CityEngine 2D-Game
                  <span className="block text-sm text-gray-500">(coming soon)</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  A fresh take on the tale of Little Red Riding Hood in a small,
                  story based 2D-platformer.
                  <span className="text-sm text-gray-500">
                    {" "}Coded using City St.George's, Univerisy of London's own
                    physics engine
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "CityEngine"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* 4 */}
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  Artist's Portfolio
                  <span className="block text-sm text-gray-500">(coming soon)</span>
                </h3>
                <p className="text-gray-600 mb-4"> ... </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TailwindCSS", "Figma"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-400/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* View all button soon*/}
          </div>
        </RevealOnScroll>
      </section>
    );
  };