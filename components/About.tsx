import { certifications, education, profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section about-section">
      <p className="statement">{profile.philosophy}</p>

      <div className="about-grid">
        <div>
          <p className="small-title">This is me.</p>
          <h2>Hi, I&apos;m Adnan.</h2>
        </div>
        <div className="about-copy">
          <p>{profile.about}</p>
          <div className="info-pair">
            <span>Education</span>
            <p>
              {education.degree}
              <br />
              {education.school} - {education.year}
            </p>
          </div>
          <div className="cert-list">
            {certifications.map((certification) => (
              <span key={certification}>{certification}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
