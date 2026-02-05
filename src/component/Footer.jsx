import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-title">STEMFLOW Community Hub</div>
          <div className="footer-desc">Build, learn, and share — community projects, resources, and events.</div>
        </div>

       

        <div className="footer-meta">
          <div className="socials">
            <a href="https://github.com/Pinkwinx/STEMFLOW-COMMUNITY-HUB" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="copyright">© {new Date().getFullYear()} STEMFLOW Community</div>
        </div>
      </div>
    </footer>
  )
}
