import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profileimage.png';

function About() {
  return (
    <div className="container">
      <div className="about-section">
        {/* Profile Image */}
        <div className="image-wrapper">
          <img src={profileImage} alt="Richard Pillaca" />
        </div>

        {/* Desktop Icons + Intro */}
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/RikepilB"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-pillaca/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Richard Pillaca</h1>
          <p>
            <strong>Data Analyst</strong>
          </p>

          <div className="professional-summary">
            <p
              className="summary-text"
              style={{ fontSize: "0.94rem", lineHeight: 1.4 }}
            >
              Professional with an international perspective and interests in
              technology and finance. Proficient in Python, SQL, and
              visualization tools; experienced in research and software
              engineering. Proven track record leading projects, delivering
              excellent customer service, and collaborating effectively in
              teams. Fluent in English, Spanish, and learning French.
            </p>
          </div>

          <div className="education-section">
            <p className="education" style={{ fontSize: "1.13rem" }}>
              <strong></strong>
              <strong>Bsc.Computer Science and Economics — University of British Columbia</strong>
            </p>
          </div>
        </div>
        {/* end .content */}

        {/* Mobile Icons */}
        <div className="mobile_social_icons">
          <a
            href="https://github.com/RikepilB"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-pillaca/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      {/* end .about-section */}
    </div>
    /* end .container */
  );
}

export default About;
