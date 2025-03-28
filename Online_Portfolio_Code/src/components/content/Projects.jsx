import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
      <section id="projects" className="min-h-screen p-8">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <h2 className="text-2xl font-bold mb-8">
              <span className="w-3 h-3 bg-black inline-block mr-4"></span>
              Featured Projects
            </h2>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1 */}
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> Processing App </h3>
                <p className="text-gray-600 mb-4"> Description </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Processing", "Excel", "Procreate"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
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
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  This Portfolio Website
                </h3>
                <p className="text-gray-600 mb-4"> Description </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TailwindCSS", "Figma"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
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
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  CityEngine 2D-Game
                  <span className="text-sm"> (coming soon)</span>
                </h3>
                <p className="text-gray-600 mb-4"> Description </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "CityEngine"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* 4 */}
              <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">
                  Artist's Portfolio
                  <span className="text-sm"> (coming soon)</span>
                </h3>
                <p className="text-gray-600 mb-4"> Description </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "TailwindCSS", "Figma"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
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