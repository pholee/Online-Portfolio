import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getProjectBySlug, getNextProject } from "../../data/projects";
import { ProjectDevice } from "../devices/ProjectDevice";
import { CaseStudySections } from "./CaseStudySections";

export const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  // Back lands on this project's row / thumbnail, not the top of the page.
  const goBack = () => navigate("/", { state: { scrollTo: `#${slug}` } });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") navigate("/", { state: { scrollTo: `#${slug}` } });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, slug]);

  if (!project) {
    return (
      <section className="p-8 min-h-dvh flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-2 mb-4">That project doesn&apos;t exist.</p>
          <Link to="/" className="text-accent underline">
            Back home
          </Link>
        </div>
      </section>
    );
  }

  const next = getNextProject(slug);

  return (
    <section key={slug} className="pt-[clamp(24px,4vw,48px)] pb-16">
      <button
        type="button"
        onClick={goBack}
        aria-label="Back to all work"
        className="inline-grid place-items-center w-11 h-11 -ml-3 cursor-pointer text-text-3 hover:text-text-1 transition-colors"
      >
        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden="true">
          <path
            d="M12.5 1.5 1.5 13l11 11.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Facts + device */}
      <div className="animate-rise mt-[clamp(24px,5vw,64px)] grid grid-cols-1 min-[820px]:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-[clamp(32px,6vw,96px)] items-center">
        <div className="text-[.95rem] leading-[1.45]">
          <div className="mb-8">
            <h1 className="text-base font-semibold">{project.title}</h1>
            <div>
              {project.projectType} · {project.isSoon ? `Coming ${project.year}` : project.year}
            </div>
          </div>

          <p className="text-text-2 max-w-[36ch] mb-8">{project.intro}</p>

          <div className="text-text-3 mb-8">
            <div className="font-mono text-[.7rem] tracking-[.06em] uppercase mb-1.5">Tools</div>
            {project.tools.map((tool) => (
              <div key={tool}>{tool}</div>
            ))}
          </div>

          {project.linkHref && (
            <a
              href={project.linkHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex gap-[.4em] text-text-2 hover:text-text-1 transition-colors"
            >
              {project.linkLabel}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[.15em] group-hover:-translate-y-[.15em]">
                ↗
              </span>
            </a>
          )}
        </div>

        <div className="min-w-0 max-[819px]:-order-1">
          <ProjectDevice device={project.device} />
        </div>
      </div>

      {/* Story — the project's content blocks */}
      <div className="mt-[clamp(80px,12vw,160px)]">
        <CaseStudySections sections={project.sections} />
      </div>

      {/* Next project, or back home at the end of the list */}
      <div className="mt-[clamp(80px,12vw,140px)] border-t border-line pt-6 flex justify-between gap-4 text-[.95rem]">
        {next ? (
          <>
            <span className="text-text-3">Next</span>
            <Link to={`/work/${next.slug}`} className="group text-text-2 hover:text-text-1 transition-colors">
              {next.title}{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[.25em]">
                →
              </span>
            </Link>
          </>
        ) : (
          <Link to="/" className="group ml-auto text-text-2 hover:text-text-1 transition-colors">
            Back to home{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-[.25em]">
              →
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};
