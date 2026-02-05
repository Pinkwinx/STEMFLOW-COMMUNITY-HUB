import React from 'react'
import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-root">
      <div className="about-inner">
        <header className="about-hero">
          <img src={reactLogo} alt="logo" className="about-logo" />
          <h1 className="about-title">About STEMFLOW Community</h1>
          <p className="about-lead">We empower students, mentors, and makers with resources, projects, and community events to learn and build together.</p>
          <div className="about-ctas">
            <Link to="/projects" className="btn primary">Explore Projects</Link>
            <Link to="/contact" className="btn ghost">Contact Us</Link>
          </div>
        </header>

        <section className="about-mission">
          <h2>Our mission</h2>
          <p>To make STEM learning accessible and collaborative by providing hands-on projects, curated resources, and mentorship opportunities for learners at every level.</p>
        </section>

        <section className="about-stats">
          <div className="stat">
            <div className="stat-number">1.2k+</div>
            <div className="stat-label">Members</div>
          </div>
          <div className="stat">
            <div className="stat-number">340+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat">
            <div className="stat-number">85</div>
            <div className="stat-label">Events</div>
          </div>
        </section>

        <section className="about-team">
          <h2>Meet some contributors</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="avatar">MN</div>
              <div className="team-name">Maria Nguyen</div>
              <div className="team-role">Founder & Programmer</div>
            </div>
            <div className="team-card">
              <div className="avatar">GK</div>
              <div className="team-name">Golda Kals-Lamptey</div>
              <div className="team-role">Founder & Mentor</div>
            </div>
            <div className="team-card">
              <div className="avatar">ET</div>
              <div className="team-name">Enkh Turtogtokh</div>
              <div className="team-role">Founder & Comunity Lead</div>
            </div>
          </div>
        </section>

        <section className="about-cta-band">
          <h3>Join the community</h3>
          <p>Contribute a project, join a workshop, or help mentor a student. Everyone is welcome.</p>
          <div style={{ marginTop: 12 }}>
            <Link to="/contact" className="btn primary">Get involved</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
