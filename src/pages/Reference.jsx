import React from "react";
import "./Reference.css";

export default function References() {
  return (
    <div className="references-page">
      <h1>References</h1>

      {/* WORK LOG */}
      <section className="section">
        <h2>Work Log</h2>
        <ul className="work-log">
          <li>Designed UI layout for main pages</li>
          <li>Implemented interactive components</li>
          <li>Integrated PDF reference viewer</li>
          <li>Tested site for usability and performance</li>
        </ul>
      </section>

      {/* COPYRIGHT CHECKLIST */}
      <section className="section">
        <h2>Copyright Checklist</h2>
        <ul className="checklist">
          <li>All images are either original or properly credited</li>
          <li>No copyrighted music or video without permission</li>
          <li>External libraries follow their licenses</li>
          <li>Sources are cited where required</li>
        </ul>
      </section>

      {/* PDF VIEWER */}
      <section className="section">
        <h2>Reference Document</h2>

        <div className="pdf-container">
          <object
            data="/pdfs/reference.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              PDF could not be displayed.
              <a href="/pdfs/reference.pdf"> Download instead</a>
            </p>
          </object>
        </div>
      </section>
    </div>
  );
}
