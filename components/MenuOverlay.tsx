"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile, socials } from "@/data/portfolio";

const menuLinks = [
  { label: "Home", href: "#home", color: "#f5b82e" },
  { label: "About Me", href: "#about", color: "#3f8cff" },
  { label: "Stack", href: "#stack", color: "#34d1bf" },
  { label: "Experience", href: "#experience", color: "#2ef765" },
  { label: "Projects", href: "#projects", color: "#6a74ff" },
  { label: "Contact", href: "#contact", color: "#ff6a8a" }
];

export function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <>
      <button
        className="menu-button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={34} /> : <Menu size={34} />}
      </button>

      <aside className={`menu-panel ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="menu-grid">
          <div>
            <p className="menu-kicker">Social</p>
            <div className="menu-list">
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="menu-kicker">Menu</p>
            <nav className="menu-list" aria-label="Main navigation">
              {menuLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <span className="menu-dot" style={{ backgroundColor: link.color }} />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="menu-contact">
          <p className="menu-kicker">Get in touch</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </aside>

      <button
        className={`menu-backdrop ${isOpen ? "is-open" : ""}`}
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
