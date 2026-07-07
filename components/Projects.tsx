import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <SectionLabel>Selected Projects</SectionLabel>

      <div className="projects-list">
        {projects.map((project, index) => {
          const Icon = project.icon;
          const title = project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          );

          const preview = (
            <>
              {project.previewImage ? (
                <img src={project.previewImage} alt={`${project.title} preview`} />
              ) : (
                <Icon size={46} />
              )}
              <p>{project.description}</p>
              <ArrowUpRight size={22} />
            </>
          );

          return (
            <article className="project-item" key={project.title}>
              <span className="project-number">_{String(index + 1).padStart(2, "0")}.</span>
              <div className="project-main">
                <h2>{title}</h2>
                <p className="project-client">{project.client}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              {project.href ? (
                <a className="project-preview" href={project.href} target="_blank" rel="noreferrer">
                  {preview}
                </a>
              ) : (
                <div className="project-preview" aria-hidden="true">
                  {preview}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
