import React from 'react'
import './Projects.css'
import Orb from '../component/OrbBackground';

const projects = [
  {
    title: "CRISPR Injection Simulator",
    desc: "Interactive engineering tool to visualize gene-editing injections.",
    tags: ["Biotech", "Engineering"],
    link: "#"
  },
  {
    title: "AscendOS",
    desc: "Custom telemetry + GUI system for data visualization and control.",
    tags: ["Software", "Aerospace"],
    link: "#"
  },
  {
    title: "STEMFlow Community Hub",
    desc: "Resource-sharing platform for STEM students.",
    tags: ["Web", "Education"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <>
        <section className="hero-wrapper">
      <div className="hero-bg">
        <Orb
    hoverIntensity={2}
    rotateOnHover
    hue={0}
    forceHoverState={false}
    backgroundColor="#000000"
/>
      </div>
      <div className="hero-overlay" />
    
      <div className="hero-content">
        <h2 className="hero-top-title">Projects</h2>
        <p className="hero-top-sub">
          Placeholder text
        </p>
      </div>
    </section>
    {/* PROJECT GRID */}
      <section className="projects-section">
        <h2>Featured Work</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-card-top">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>

              <div className="project-tags">
                {p.tags.map((tag, j) => (
                  <span key={j}>{tag}</span>
                ))}
              </div>

              <a href={p.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
