"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  staggerFadeUp,
  viewport,
} from "@/lib/animations";

export type ProjectType = {
  name: string;
  type: string;
  description: string;
  details: string;
  tags: string[];
  url: string;
  visual: string;
};

function ProjectArtwork({ visual }: { visual: string }) {
  return (
    <div
      className={`project-artwork artwork-${visual}`}
      aria-hidden="true"
    >
      {visual === "supply" ? (
        <>
          <div className="art-topline">
            <span>SupplyChainX</span>
            <span>Project illustration</span>
          </div>
          <div className="supply-art">
            <span className="supply-mark">
              SC<span>X</span>
            </span>
            <div className="supply-flow">
              <span>Procurement</span>
              <span>Production</span>
              <span>Distribution</span>
            </div>
          </div>
          <div className="art-bottomline">
            <span>Supply chain</span>
            <span>Java / Spring Boot</span>
          </div>
        </>
      ) : visual === "quiz" ? (
        <>
          <div className="art-topline">
            <span>Aptiv Quiz Application</span>
            <span>Project illustration</span>
          </div>
          <div className="quiz-art">
            <div className="quiz-symbol">?</div>
            <div className="quiz-words">
              <span>Assessments</span>
              <span>Quizzes</span>
              <span>Results</span>
            </div>
          </div>
          <div className="art-bottomline">
            <span>Technical assessments</span>
            <span>Laravel / PHP</span>
          </div>
        </>
      ) : (
        <>
          <div className="art-topline">
            <span>Inspire Environment</span>
            <span>Project illustration</span>
          </div>
          <div className="inspire-art">
            <div className="inspire-emblem">
              <span>IE</span>
            </div>
            <div className="inspire-words">
              <span>Students</span>
              <span>Activities</span>
              <span>Attendance</span>
            </div>
          </div>
          <div className="art-bottomline">
            <span>Education management</span>
            <span>Java / Spring Boot</span>
          </div>
        </>
      )}
    </div>
  );
}

export function ProjectCard({
  project,
}: {
  project: ProjectType;
  index: number;
}) {
  return (
    <motion.article
      className="project-item"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport.default}
    >
      <div className="project-title">
        <p className="project-type">{project.type}</p>
        <h3>{project.name}</h3>
        <a
          className="project-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub{" "}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>

      <ProjectArtwork visual={project.visual} />

      <div className="project-copy">
        <p>{project.description}</p>
        <p>{project.details}</p>
        <motion.div
          className="project-tags"
          aria-label="Technologies"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport.default}
        >
          {project.tags.map((tag) => (
            <motion.span key={tag} variants={staggerFadeUp}>
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}
