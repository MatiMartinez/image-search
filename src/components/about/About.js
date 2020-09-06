import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="about-content">
        <div>
          <h5 className="mb-3">Images Search Project</h5>
          <p className="mb-5">
            Image Search is a web application that provides photos from the
            Pexels API. Web app using ReactJS.
          </p>
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://images.pexels.com/lib/api/pexels.png"
              alt="pexels-img"
              className="pexels-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
