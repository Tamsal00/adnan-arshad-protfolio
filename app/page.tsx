import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { MenuOverlay } from "@/components/MenuOverlay";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Starfield } from "@/components/Starfield";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Starfield />
      <MenuOverlay />
      <a className="email-rail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
