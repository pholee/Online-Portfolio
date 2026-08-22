import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { RevealOnScroll } from "../RevealOnScroll";
import { getProjectBySlug, getNextProject } from "../../data/projects";

export const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <section className="p-8 min-h-dvh flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-2 mb-4">That project doesn&apos;t exist.</p>
          <Link to="/" className="text-accent-text underline">
            Back home
          </Link>
        </div>
      </section>
    );
  }

  const next = getNextProject(slug);
  const titleLines = project.titleBreak || [project.title];

  return (
    <section className="py-[clamp(1rem,4vw,2rem)]">
      <div className="max-w-[var(--container)] mx-auto px-[var(--pad)]">
        <RevealOnScroll key={slug}>
          {/* Ghost title */}
          <h1 className="text-outline font-display font-black uppercase leading-[0.94] tracking-[-0.01em] text-[clamp(2.4rem,9vw,6rem)] pb-[var(--gap-section)] break-words">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-start gap-[clamp(1.5rem,4vw,3rem)] py-6 border-y border-text-1/10 my-[var(--gap-section)]">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wide text-text-3 mb-2">
                Role
              </h4>
              <p>{project.role}</p>
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wide text-text-3 mb-2">
                Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs border border-text-1/15 rounded-full px-3 py-1"
                  >
                    {tool.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            {project.linkHref && (
              <a
                href={project.linkHref}
                target="_blank"
                rel="noreferrer"
                className="ml-auto font-mono text-sm uppercase tracking-wide self-center hover:text-accent-text transition-colors"
              >
                {project.linkLabel} <span className="text-accent-text">&rarr;</span>
              </a>
            )}
          </div>

          {/* Intro */}
          <p className="text-[clamp(1.1rem,2.2vw,1.35rem)] max-w-[42ch] mb-[var(--gap-stack)]">
            {project.intro}
          </p>

          {/* Gallery */}
          <p className="font-mono text-xs uppercase tracking-wide text-text-3 mb-3">
            Placeholder imagery — swap in real screenshots.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2 mb-[var(--gap-stack)] [scrollbar-width:thin]">
            {project.gallery.map((caption, i) => (
              <div
                key={caption}
                className="gallery-placeholder shrink-0 w-[78vw] max-w-140 aspect-4/3 rounded border border-text-1/10 flex items-end"
              >
                <span className="font-mono text-xs uppercase tracking-wide p-3">
                  Fig. {String(i + 1).padStart(2, "0")} — {caption}
                </span>
              </div>
            ))}
          </div>

          {/* Body section */}
          <div className="max-w-[60ch] mb-[var(--gap-stack)]">
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4">
              {project.sectionHeading}
            </h3>
            <p className="text-text-2 leading-relaxed">{project.sectionText}</p>
          </div>

          {/* Quote */}
          <blockquote className="border-l-2 border-accent-text pl-[clamp(1.25rem,3vw,2rem)] max-w-[52ch] mb-[var(--gap-stack)]">
            <p className="font-display font-medium text-xl sm:text-2xl leading-snug mb-3">
              {project.quoteText}
            </p>
            <span className="font-mono text-xs uppercase tracking-wide text-text-3">
              {project.quoteAttr}
            </span>
          </blockquote>

          {/* Next project */}
          <div className="border-t border-text-1/10 pt-[var(--gap-stack)] pb-[clamp(3rem,7vw,4.5rem)]">
            <Link to={`/work/${next.slug}`} className="group block">
              <span className="font-mono text-xs uppercase tracking-wide text-text-3 block mb-3">
                Next Project
              </span>
              <span className="font-display font-extrabold leading-none text-4xl sm:text-6xl group-hover:text-accent-text transition-colors">
                {next.title}
              </span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
