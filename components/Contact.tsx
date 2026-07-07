import { ArrowUpRight, GitFork, Star } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export function Contact() {
  return (
    <footer id="contact" className="section contact-section">
      <p>Have an AI project in mind?</p>
      <a className="contact-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <a className="credits" href={profile.github} target="_blank" rel="noreferrer">
        Design & built for {profile.name}
      </a>
      <div className="footer-stats" aria-label="Repository stats">
        <span>
          <Star size={18} aria-hidden="true" />
          209
        </span>
        <span>
          <GitFork size={18} aria-hidden="true" />
          52
        </span>
      </div>
      <div className="footer-links">
        {socials.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            {label}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
}
