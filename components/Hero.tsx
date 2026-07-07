import { ArrowUpRight, Download } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">{profile.headline}</p>
        <h1 className="mega-title">
          <span>AI/ML</span>
          <strong>Engineer</strong>
        </h1>
        <p className="hero-text">
          Hi! I&apos;m <strong>{profile.name}</strong>. {profile.summary}
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={`mailto:${profile.email}`}>
            Let&apos;s Talk
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="secondary-button" href="/api/cv">
            Download CV
            <Download size={18} aria-hidden="true" />
          </a>
          <p className="availability">
            <span />
            {profile.availability}
          </p>
        </div>
      </div>

      <div className="hero-stats" aria-label="Professional statistics">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
