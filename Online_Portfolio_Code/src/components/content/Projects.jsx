import { Link } from "react-router";
import { featuredProjects } from "../../data/projects";
import { ProjectDevice } from "../devices/ProjectDevice";

export const Projects = () => {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="grid gap-[clamp(96px,15vw,200px)] pt-[clamp(96px,14vw,184px)] pb-[clamp(112px,15vw,200px)]"
    >
      {featuredProjects.map((project, index) => {
        // Alternate the device left / right, like a spread
        const flip = index % 2 === 1;
        return (
          <article
            key={project.slug}
            id={project.slug}
            className={`grid grid-cols-1 items-center gap-9 min-[820px]:gap-[clamp(32px,6vw,88px)] ${
              flip
                ? "min-[820px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                : "min-[820px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            }`}
          >
            <Link
              to={`/work/${project.slug}`}
              aria-label={`Open ${project.title}`}
              className={`device-stage block min-w-0 ${flip ? "min-[820px]:order-2" : ""}`}
            >
              <ProjectDevice device={project.device} />
            </Link>

            <div className="max-w-[30rem]">
              <h2 className="text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.1] tracking-[-.02em] font-normal mb-[.35em]">
                {project.title}
              </h2>
              <p className="font-mono text-[.74rem] tracking-[.02em] text-text-3 mb-5">
                {project.projectType} · {project.isSoon ? `Coming ${project.year}` : project.year}
              </p>
              <p className="text-text-2 mb-6 max-w-[42ch]">{project.teaser}</p>
              <Link
                to={`/work/${project.slug}`}
                className="inline-flex items-center bg-text-1 text-background font-medium text-[.9rem] leading-none px-[1.4em] py-[.85em] rounded-full transition-transform hover:-translate-y-px"
              >
                See more
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
