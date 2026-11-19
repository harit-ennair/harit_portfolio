import { ExternalLink, Mail } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import { Accent, Reveal } from "@/components/reveal";
import { education, experience, navigation, profile, projects, skillGroups } from "@/data/portfolio";

function ProjectArtwork({ visual }: { visual: string }) {
  return <div className={`project-artwork ${visual === "supply" ? "artwork-supply" : "artwork-quiz"}`} aria-label="Abstract project illustration">
    <span className="artwork-label">Conceptual visual</span>
    {visual === "supply" ? <div className="supply-diagram" aria-hidden="true"><span /><span /><span /><i /><i /></div> : <div className="quiz-diagram" aria-hidden="true"><span /><span /><span /><span /></div>}
    <span className="artwork-caption">{visual === "supply" ? "Procurement / Production / Distribution" : "Assessments / Quizzes / Results"}</span>
  </div>;
}

function Project({ project }: { project: (typeof projects)[number] }) {
  return <article className="project-item">
    <div className="project-title"><p className="project-type">{project.type}</p><h3>{project.name}</h3><a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">View on GitHub <ExternalLink size={16} aria-hidden="true" /></a></div>
    <ProjectArtwork visual={project.visual} />
    <div className="project-copy"><p>{project.description}</p><p>{project.details}</p><div className="project-tags" aria-label="Technologies">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
  </article>;
}

export default function Home() {
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="wrap nav-layout"><a className="brand" href="#top" aria-label="Harit Ennair, home">HARIT<br />ENNAIR<span>.</span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk <Mail size={16} aria-hidden="true" /></a><MobileMenu /></div></header>
    <main id="main">
      <section id="top" className="hero wrap">
        <div className="hero-label"><strong>Harit Ennair</strong><span>Full-Stack<br />Web Developer</span><span>Casablanca, Morocco</span></div>
        <div className="hero-main"><Reveal onLoad><h1><span>THOUGHTFUL</span><span>CODE.</span><span className="headline-shift">MEANINGFUL</span><span className="headline-shift">EXPERIENCES.</span></h1></Reveal><div className="hero-bottom"><p>I’m Harit, a full-stack web developer building reliable applications that bring good ideas to life.</p><div className="hero-actions"><a href="#projects">View projects</a><a href="#contact">Get in touch</a></div></div></div>
        <Accent />
      </section>
      <section id="about" className="about section wrap"><div className="section-rail"><span>About</span><span>01 / Profile</span></div><div className="section-content"><div className="section-topline"><h2>GOOD SOFTWARE<br />STARTS WITH<br />THE PROBLEM.</h2><span className="line-stroke" /></div><div className="about-columns"><p className="about-lead">I turn complex requirements into clear, useful digital experiences.</p><div className="body-copy"><p>I’m a full-stack web developer and YouCode graduate. My work spans interfaces and backend systems, with experience in Java, Spring Boot, Angular, Laravel, and React.</p><p>I value thoughtful collaboration, continuous learning, and the details that make an application dependable.</p></div><p className="about-note">20+ web &amp; software projects<br />Agile / Scrum collaboration</p></div></div></section>
      <section id="projects" className="work section"><div className="wrap"><div className="section-heading"><span>Selected work</span><h2>BUILT WITH<br />PURPOSE.</h2><p>A closer look at the systems and applications I’ve built.</p></div><div className="project-list">{projects.map((project) => <Reveal key={project.name}><Project project={project} /></Reveal>)}</div><div className="projects-footer"><span>Explore more of my work</span><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub profile <ExternalLink size={16} aria-hidden="true" /></a></div></div></section>
      <section id="experience" className="resume section wrap"><div className="section-rail"><span>Experience</span><span>02 / Practice</span></div><div className="section-content"><div className="section-topline"><h2>WORK &amp;<br />LEARNING.</h2><span className="line-stroke" /></div><div className="resume-layout"><div className="resume-column"><h3>Experience</h3>{experience.map((job) => <article className="resume-item" key={job.company}><div className="resume-meta"><span>{job.period}</span><span>{job.location}</span></div><div><h4>{job.role}</h4><p className="resume-company">{job.company}</p><p>{job.description}</p></div></article>)}</div><div className="education-column"><h3>Education</h3>{education.map((item) => <article className="education-item" key={item.title}><div className="resume-meta">{item.period && <span>{item.period}</span>}</div><h4>{item.title}</h4><p className="resume-company">{item.school}</p><p>{item.detail}</p></article>)}</div></div></div></section>
      <section id="skills" className="skills section"><div className="wrap skills-layout"><div className="skills-heading"><span>Capabilities</span><h2>TOOLS FOR<br />THE TASK.</h2><p>A versatile toolkit for considered, end-to-end solutions.</p></div><div className="skills-list">{skillGroups.map((group) => <div className="skill-row" key={group.title}><h3>{group.title}</h3><p>{group.items.map((item, index) => <span key={item}>{item}{index < group.items.length - 1 && <span aria-hidden="true"> / </span>}</span>)}</p></div>)}</div></div></section>
      <section id="contact" className="contact section wrap"><div className="section-rail"><span>Contact</span><span>03 / Connect</span></div><div className="section-content"><div className="contact-top"><h2>LET’S MAKE<br />SOMETHING<br />THAT MATTERS.</h2><div className="contact-square" aria-hidden="true"><span>✳</span></div></div><div className="contact-bottom"><p>Have a project in mind or just want to connect? I’d love to hear from you.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ExternalLink size={15} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLink size={15} aria-hidden="true" /></a></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="wrap footer-inner"><a href="#top">Harit Ennair<span>.</span></a><p>Full-Stack Web Developer · Casablanca</p><a href="#top">Back to top</a></div></footer>
  </>;
}
