export const profile = {
  name: "Harit Ennair",
  role: "Full-Stack Web Developer",
  location: "Casablanca, Morocco",
  email: "harit.enn@gmail.com",
  github: "https://github.com/harit-ennair",
  linkedin: "https://www.linkedin.com/in/harit-ennair/",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    company: "TCOMEVENT", role: "Full-Stack Web Developer", location: "Casablanca", period: "June 2026 — Present",
    description: "Developing and maintaining full-stack solutions shaped by business and client requirements. Designing features, improving performance, and solving technical issues with an Agile team.",
  },
  {
    company: "Aptiv", role: "Full-Stack Web Developer Intern", location: "Tangier", period: "May 2025 — July 2025",
    description: "Built an internal Laravel platform to help automate technical assessments, from quiz management and online testing to result generation.",
  },
  {
    company: "OCP Group", role: "Mechanical Maintenance Intern", location: "Youssoufia", period: "June 2022 — July 2022",
    description: "Participated in equipment inspection, diagnostics, and preventive and corrective maintenance, strengthening problem-solving and teamwork skills.",
  },
];

export const projects = [
  {
    name: "SupplyChainX", type: "Backend engineering", description: "A modular RESTful backend for supply chain management, connecting procurement, production, and distribution.",
    details: "Built with role-based access, JWT, Spring AOP, DTOs and mappers, Hibernate, centralized exception handling, automated tests, and CI.",
    tags: ["Java 17", "Spring Boot 3", "MySQL", "Spring Security", "JWT", "Docker", "GitHub Actions", "SonarQube", "JaCoCo"],
    url: "https://github.com/harit-ennair/SupplyChainX", visual: "supply",
  },
  {
    name: "Aptiv Quiz Application", type: "Full-stack application", description: "A platform for managing technical assessments, with multi-role authentication, quiz management, and progress dashboards.",
    details: "An internal application designed to make the assessment process more straightforward for the people using it.",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript"],
    url: "https://github.com/harit-ennair/Aptiv_Quiz_Application", visual: "quiz",
  },
  {
    name: "Inspire-Environment", type: "Backend engineering", description: "A Spring Boot application for managing students, staff, activities, and attendance.",
    details: "Includes authentication and role management, with a Java backend and MySQL database.",
    tags: ["Java 17", "Spring Boot", "Spring Security", "Spring Data JPA", "MySQL", "JWT", "Docker"],
    url: "https://github.com/harit-ennair/Inspire-Environment", visual: "inspire",
  },
];

export const skillGroups = [
  { title: "Backend", items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "PHP", "Laravel", "REST APIs", "MVC"] },
  { title: "Frontend", items: ["Angular", "React", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Blade"] },
  { title: "Data & modeling", items: ["PostgreSQL", "MySQL", "SQL", "UML", "ERD"] },
  { title: "Tools & quality", items: ["Docker", "GitHub Actions", "SonarQube", "JaCoCo", "JUnit", "Maven", "Git", "GitHub", "Jira", "Agile / Scrum"] },
  { title: "Design", items: ["Figma", "Illustrator"] },
];

export const education = [
  { title: "Full-Stack Web Development Certificate", detail: "Java / Angular stack", school: "YouCode · Mohammed VI Polytechnic University (UM6P)", period: "2024 — 2026" },
  { title: "Nkoon by Cultur.Ed Program", detail: "Critical thinking, communication, creativity, and collaborative project management.", school: "Mohammed VI Polytechnic University (UM6P)", period: "" },
];

