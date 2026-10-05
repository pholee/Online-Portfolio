import { Link } from "react-router";
import { archiveProjects } from "../../data/projects";
import { ProjectThumb } from "../devices/ProjectDevice";

export const Archive = () => {
  return (
    <section
      id="archive"
      aria-labelledby="archive-title"
      className="border-t border-line pt-[clamp(56px,8vw,96px)] pb-[clamp(96px,13vw,168px)]"
    >
      <div className="flex justify-between items-baseline gap-4 mb-[clamp(28px,4vw,44px)]">
        <h2 id="archive-title" className="text-[.95rem] font-medium">
          Archive <span className="text-text-3">—</span>
        </h2>
        <span className="font-mono text-[.74rem] text-text-3">Sketches, side projects and process</span>
      </div>

      <ul className="grid grid-cols-2 min-[560px]:grid-cols-3 min-[900px]:grid-cols-4 gap-[clamp(12px,1.6vw,20px)]">
        {archiveProjects.map((project) => (
          <li key={project.slug} id={project.slug} className="thumb">
            {/* Image only — title and details live on the case study page */}
            <Link to={`/work/${project.slug}`} aria-label={project.title} className="block">
              <div className="thumb-img">
                <ProjectThumb thumb={project.thumb} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
