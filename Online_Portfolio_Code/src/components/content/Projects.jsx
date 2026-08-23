import { Link } from "react-router";
import { RevealOnScroll } from "../RevealOnScroll";
import { projects } from "../../data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-[var(--band-y)]">
      <RevealOnScroll>
        <div className="max-w-[var(--container)] mx-auto px-[var(--pad)]">
          {/* Heading */}
          <div className="flex items-baseline justify-between gap-4 mb-[var(--gap-section)] flex-wrap">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
              Selected Work
            </h2>
            <p className="font-mono text-xs tracking-widest uppercase text-text-3">
              2024 — 2026
            </p>
          </div>

          {/* Project rows */}
          <div className="border-t border-text-1/10">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className={`group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.5rem_1fr_auto] gap-x-5 gap-y-2 items-center py-[var(--gap-row-project)] border-b border-text-1/10 ${project.isSoon ? "opacity-70" : ""
                  }`}
              >
                <span className="font-mono text-xs text-text-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl group-hover:text-accent-text transition-colors">
                  {project.title}
                </span>
                <span className="col-start-2 sm:col-start-3 font-mono text-xs sm:text-right text-text-2">
                  {project.statusLabel && (
                    <span className="block text-text-1 font-medium mb-1">
                      {project.statusLabel}
                    </span>
                  )}
                  {project.projectType}
                </span>
              </Link>
            ))}
          </div>

          {/* View all */}
          <div className="flex justify-end pt-[clamp(1.5rem,3vw,2rem)]">
            <a className="font-mono text-sm uppercase tracking-wide cursor-pointer hover:text-accent-text transition-colors">
              All Projects <span className="text-accent-text">&rarr;</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
