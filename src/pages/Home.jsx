import React from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import './Home.css'
import FloatingLines from '../component/LineBackground'

export default function Home() {
  return (
    <div className="home-root">
      <div className="home-background" aria-hidden="true">
        <FloatingLines
          linesGradient={["#6C63FF", "#1C77C3", "#4DFFF3"]}
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[6,5,6]}
          lineDistance={[6,4,8]}
          parallax={true}
          parallaxStrength={0.18}
          animationSpeed={1}
          mixBlendMode="screen"
        />
      </div>

      <section className="home-hero-top" aria-hidden="false">
        <div className="hero-top-inner">
          <h2 className="hero-top-title">STEMFLOW Community Hub</h2>
          <p className="hero-top-sub">Build, learn, and share with hands-on projects and community mentorship.</p>
          <div className="hero-top-ctas">
            <Link to="/projects" className="btn primary">Explore Projects</Link>
            <Link to="/resources" className="btn ghost">Browse Resources</Link>
          </div>
        </div>
      </section>

      <header className="home-main">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title reveal">
              Build, Learn, and Share with STEMFLOW Community
            </h1>
            <p className="hero-sub reveal delay-1">
              Hands-on projects, curated resources, and community events designed to help learners and mentors build real skills together.
            </p>

            <div className="hero-ctas reveal delay-2">
              <Link to="/projects" className="btn primary">Explore Projects</Link>
              <Link to="/resources" className="btn ghost">Browse Resources</Link>
            </div>

            <div className="hero-stats reveal delay-3" aria-hidden="true">
              <div className="stat">
                <div className="stat-number">340+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">1.2k+</div>
                <div className="stat-label">Members</div>
              </div>
              <div className="stat">
                <div className="stat-number">85</div>
                <div className="stat-label">Events</div>
              </div>
            </div>
          </div>

          <div className="hero-media" aria-hidden="true">
            <div className="illustration">
              <img src={reactLogo} alt="" className="hero-logo-deco" />
              <div className="card">Example Project</div>
            </div>
          </div>
        </div>
      </header>

      <section className="home-features">
        <div className="feature">
          <h3>Interactive Projects</h3>
          <p>Browse hands-on projects contributed by the community. Learn by doing with step-by-step guides.</p>
        </div>
        <div className="feature">
          <h3>Curated Resources</h3>
          <p>High-quality tutorials, articles, and learning paths for students and mentors.</p>
        </div>
        <div className="feature">
          <h3>Community Events</h3>
          <p>Join workshops, hackathons, and mentorship sessions to grow your skills and network.</p>
        </div>
      </section>

      <section className="home-cta-band">
        <h2>Ready to contribute?</h2>
        <p>Create an account, submit a project, or start a discussion — everyone is welcome.</p>
        <div style={{ marginTop: 12 }}>
          <Link to="/projects" className="btn primary">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
