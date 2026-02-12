import React from "react";
import "./Reference.css";

import workLog from "../assets/worklog.pdf";
import copyrightChecklist from "../assets/copyright.pdf";

export default function References() {
  return (
    <main className="references-root">
      <header className="references-header">
        <h1>References</h1>
        <p>Documentation, sources, and technologies used in this project.</p>
      </header>

      {/* PDFs ROW */}
      <section className="pdf-row">
        <div className="ref-card">
          <h2>Work Log</h2>
          <iframe src={workLog} title="Work Log" className="pdf-viewer" />
        </div>

        <div className="ref-card">
          <h2>Copyright Checklist</h2>
          <iframe src={copyrightChecklist} title="Copyright Checklist" className="pdf-viewer" />
        </div>
      </section>

      {/* Code Stack */}
      <section className="single-row">
        <div className="ref-card">
          <h2>Code Stack</h2>
          <p>This website is built using React, a declarative JavaScript library for building component-based user interfaces, and Vite, a next-generation frontend tool that ensures lightning-fast development and optimized production builds. By leveraging JSX and JavaScript, we’ve created a dynamic, responsive experience that allows for seamless navigation across the hub. All styling is authored in Vanilla CSS and HTML5, utilizing modern layout techniques like CSS Grid and Flexbox to ensure the site remains lightweight and performant without the overhead of external CSS frameworks.</p>
        </div>
      </section>

      {/* Libraries */}
      <section className="single-row">
        <div className="ref-card">
          <h2>Additional Libraries Utilized</h2>
          <ul>
            <li>Framer Motion: Facilitates spring-based UI animations and declarative entrance effects for page elements, ensuring smooth transitions as components mount.</li>
            <li>GSAP: Orchestrates high-performance timeline sequencing and complex scroll-triggered interactions that require precise timing.</li>
            <li>React Router: Enables declarative routing for React applications, allowing navigation between different views and components.</li>
            <li>Lenis: Provides smooth, high-performance scrolling behavior for web applications, enhancing user experience across devices.</li>
            <li>OGL: Offers a lightweight WebGL library for creating interactive 3D graphics in the browser.</li>
            <li>Postprocessing: Adds advanced visual effects like bloom, depth of field, and motion blur to enhance the visual quality of 3D scenes.</li>
            <li>React: A JavaScript library for building reusable UI components and managing application state efficiently.</li>
            <li>Three: A JavaScript 3D library that provides a simple and powerful API for creating and rendering 3D scenes in the browser.</li>
          </ul>
        </div>
      </section>

      {/* Images */}
      <section className="single-row">
        <div className="ref-card">
          <h2>Image Links</h2>
          <p>All images used in this project are from are from creative commons or free stock image sites</p>
          <ul>
            <li><a href="https://dashboardicons.com/icons/reactjs" target="_blank">Placeholder</a></li>
            <li><a href="https://www.flaticon.com" target="_blank">Placeholder</a></li>
            <li><a href="https://undraw.co" target="_blank">Placeholder</a></li>
            <li><a href="https://dashboardicons.com/icons/reactjs" target="_blank">Placeholder</a></li>
            <li><a href="https://www.flaticon.com" target="_blank">Placeholder</a></li>
            <li><a href="https://undraw.co" target="_blank">Placeholder</a></li>
            <li><a href="https://dashboardicons.com/icons/reactjs" target="_blank">Placeholder</a></li>
            <li><a href="https://www.flaticon.com" target="_blank">Placeholder</a></li>
            <li><a href="https://undraw.co" target="_blank">Placeholder</a></li>
            <li><a href="https://dashboardicons.com/icons/reactjs" target="_blank">Placeholder</a></li>
            <li><a href="https://www.flaticon.com" target="_blank">Placeholder</a></li>
            <li><a href="https://undraw.co" target="_blank">Placeholder</a></li>
          </ul>
        </div>
      </section>
      <section className="single-row">
        <div className="ref-card">
          <h2>MIT License</h2>
        </div>
      </section>
    </main>
  )
}