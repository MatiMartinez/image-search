import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container">
      <div className="about-content">
        <div>
          <h5 className="mb-3">Images Search Project</h5>
          <p className="mb-3">
            Image Search is a web application that provides photos from the
            Pexels API. Web app using ReactJS & Grid CSS.
          </p>
          <p className="mb-5">
            <a
              href="https://github.com/MatiMartinez/image-search"
              target="_blank"
              rel="noopener noreferrer"
              className="link-repo"
            >
              GITHUB REPO
            </a>
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
