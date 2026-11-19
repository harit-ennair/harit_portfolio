import { ExternalLink } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedTimeline } from "@/components/animated-timeline";
import { SkillBadges } from "@/components/skill-badges";
import { ContactSection } from "@/components/contact-section";
import { ScrollProgress } from "@/components/scroll-progress";
import { EducationGallery } from "@/components/education-gallery";
import { educationPhotos } from "@/data/education-photos";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />

        <section id="about" className="about section wrap">
          <AnimatedSection direction="left" className="section-rail">
            <span>About</span>
            <span>01 / Profile</span>
          </AnimatedSection>
          <div className="section-content">
            <AnimatedSection className="section-topline">
              <h2>
                GOOD SOFTWARE
                <br />
                STARTS WITH
                <br />
                THE PROBLEM.
              </h2>
              <span className="line-stroke" />
            </AnimatedSection>
            <div className="about-columns">
              <AnimatedSection delay={0.1}>
                <p className="about-lead">
                  I turn complex requirements into clear, useful digital
                  experiences.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="body-copy">
                <p>
                  I’m a full-stack web developer and YouCode graduate. My work
                  spans interfaces and backend systems, with experience in Java,
                  Spring Boot, Angular, Laravel, and React.
                </p>
                <p>
                  I value thoughtful collaboration, continuous learning, and
                  the details that make an application dependable.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p className="about-note">
                  20+ web &amp; software projects
                  <br />
                  Agile / Scrum collaboration
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="projects" className="work section">
          <div className="wrap">
            <AnimatedSection className="section-heading">
              <span>Selected work</span>
              <h2>
                BUILT WITH
                <br />
                PURPOSE.
              </h2>
              <p>A closer look at the systems and applications I’ve built.</p>
            </AnimatedSection>
            <div className="project-list">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
            </div>
            <AnimatedSection className="projects-footer">
              <span>Explore more of my work</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile <ExternalLink size={16} aria-hidden="true" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        <section id="experience" className="resume section wrap">
          <AnimatedSection direction="left" className="section-rail">
            <span>Experience</span>
            <span>02 / Practice</span>
          </AnimatedSection>
          <div className="section-content">
            <AnimatedSection className="section-topline">
              <h2>
                WORK &amp;
                <br />
                LEARNING.
              </h2>
              <span className="line-stroke" />
            </AnimatedSection>
            <div className="resume-layout">
              <div className="resume-column">
                <h3>Experience</h3>
                <AnimatedTimeline>
                  {experience.map((job) => (
                    <article className="resume-item" key={job.company}>
                      <div className="resume-meta">
                        <span>{job.period}</span>
                        <span>{job.location}</span>
                      </div>
                      <div>
                        <h4>{job.role}</h4>
                        <p className="resume-company">{job.company}</p>
                        <p>{job.description}</p>
                      </div>
                    </article>
                  ))}
                </AnimatedTimeline>
              </div>
              <div className="education-column">
                <h3>Education</h3>
                <AnimatedTimeline>
                  {education.map((item, index) => (
                    <article className="education-item" key={item.title}>
                      <div className="resume-meta">
                        {item.period && <span>{item.period}</span>}
                      </div>
                      <h4>{item.title}</h4>
                      <p className="resume-company">{item.school}</p>
                      <p>{item.detail}</p>
                      <EducationGallery
                        title={item.title}
                        photos={educationPhotos[index]}
                      />
                    </article>
                  ))}
                </AnimatedTimeline>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="wrap skills-layout">
            <AnimatedSection className="skills-heading">
              <span>Capabilities</span>
              <h2>
                TOOLS FOR
                <br />
                THE TASK.
              </h2>
              <p>A versatile toolkit for considered, end-to-end solutions.</p>
            </AnimatedSection>
            <div className="skills-list">
              <SkillBadges groups={skillGroups} />
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <a href="#top">
            Harit Ennair<span>.</span>
          </a>
          <p>Full-Stack Web Developer · Casablanca</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
