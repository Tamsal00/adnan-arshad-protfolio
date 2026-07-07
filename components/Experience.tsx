import { SectionLabel } from "@/components/SectionLabel";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <SectionLabel>My Experience</SectionLabel>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={`${experience.company}-${experience.title}`}>
            <p className="company">{experience.company}</p>
            <h2>{experience.title}</h2>
            <p className="period">
              {experience.period} / {experience.location}
            </p>
            <ul>
              {experience.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
