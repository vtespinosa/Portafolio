import React from 'react';
import {
  Description, School, Work, Language, Event, Phone, Mail, RecordVoiceOver, SportsBasketball, VerifiedUser
} from '@material-ui/icons';

import '../../styles/resume.css';

function Resume() {
  return (
    <div className="Resume main-container">
      {/* <h1 className="section-title">Resume</h1> */}

      <div className="important-info">
        <div className="personal-info">
          <div className="data">
            <Event />
            <p>24/11/1998</p>
          </div>

          <div className="data">
            <Phone />
            <p>+56975397461</p>
          </div>

          <div className="data">
            <Mail />
            <p>vtespinosa@uc.cl</p>
          </div>
        </div>

        <div className="extra-info">
          <div className="header">
            <RecordVoiceOver />
            <h2>Skills</h2>
          </div>

          <div className="info-container">
            <div className="item">
              <strong>React JS</strong>
              <p>Advanced</p>
            </div>
            <div className="item">
              <strong>Python</strong>
              <p>Advanced</p>
            </div>
            <div className="item">
              <strong>HTML/CSS</strong>
              <p>Advanced</p>
            </div>
            <div className="item">
              <strong>Ruby on Rails</strong>
              <p>Advanced</p>
            </div>
            <div className="item">
              <strong>Node JS</strong>
              <p>Advanced</p>
            </div>
            <div className="item">
              <strong>PostgreSQL</strong>
              <p>Intermediate</p>
            </div>
            <div className="item">
              <strong>AWS</strong>
              <p>Intermediate</p>
            </div>
            <div className="item">
              <strong>C</strong>
              <p>Intermediate</p>
            </div>
            <div className="item">
              <strong>Docker</strong>
              <p>Novice</p>
            </div>
            <div className="item">
              <strong>CI/CD</strong>
              <p>Novice</p>
            </div>
          </div>

          <div className="extra-info">
            <div className="header">
              <Language />
              <h2>Languages</h2>
            </div>

            <div className="info-container">
              <div className="item">
                <strong>Spanish</strong>
                <p>Native</p>
              </div>
              <div className="item">
                <strong>English</strong>
                <p>Advanced</p>
              </div>
            </div>
          </div>

          <div className="extra-info">
            <div className="header">
              <SportsBasketball />
              <h2>Hobbies</h2>
            </div>

            <div className="info-container">
              <div className="item">
                <strong>Rugby</strong>
              </div>
              <div className="item">
                <strong>Basketball</strong>
              </div>
              <div className="item">
                <strong>Hiking</strong>
              </div>
              <div className="item">
                <strong>Guitar</strong>
              </div>
            </div>
          </div>

          <div className="extra-info">
            <div className="header">
              <VerifiedUser />
              <h2>Certifications</h2>
            </div>

            <div className="info-container">
              <div className="item">
                <strong>Toefl (2019)</strong>
                <ul>
                  <li><strong>Total Score:</strong> 102/120</li>
                  <li><strong>Reading:</strong> 27/30</li>
                  <li><strong>Listening:</strong> 27/30</li>
                  <li><strong>Speaking:</strong> 23/30</li>
                  <li><strong>Writing:</strong> 25/30</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button className="main-button">
          Download Resume
        </button>
      </div>

      <div className="info">
        <div className="section">
          <div className="header">
            <Description fontSize="large" />
            <h2>Summary</h2>
          </div>
          <p>
            Dedicated and passionate software engineering student with real life 
            experience. Stands out for his proactivity and work ethic to acomplish 
            objectives within schedule and quality expectations
          </p>
        </div>

        <div className="section">
          <div className="header">
            <Work fontSize="large" />
            <h2>Work Experience</h2>
          </div>
          <div className="section-element">
            <strong>Larbos <span className="right-text">(March 2021 - Present)</span></strong><br/>
            <ul>
              <li>Developed full-stack web application for coorporative gifts, helping 
                the company to transition to e-commerce
              </li>
              <li>Deployed application using cloud computing technologies</li>
            </ul>
          </div>
          <div className="section-element">
            <strong>Mentorcheck <span className="right-text">(January 2021 - Present)</span></strong><br/>
            <ul>
              <li>
                Developed full-stack web application which displays mentorships in a user 
                friendly way and allows to rate and comment to give feedback for future use
              </li>
              <li>Refactored code from original developer</li>
              <li>Deployed application using cloud computing technologies</li>
            </ul>
          </div>
          <div className="section-element">
            <strong>Grado 10 <span className="right-text">(August 2020 - February 2021)</span></strong><br/>
            <ul>
              <li>
                Designed and developed full-stack web application for a tourisim agency, 
                renewing its image and website.
              </li>
              <li>
                Digitalized the companies processes, allowing online reservations and payments
              </li>
              <li>Deployed application using cloud computing technologies</li>
            </ul>
          </div>
          <div className="section-element">
            <strong>Pontificia Universidad Católica de Chile <span className="right-text">(August 2019 - December 2020)</span></strong><br/>
            <ul>
              <li>Software Engineering Teacher Assistant</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="header">
            <School fontSize="large" />
            <h2>Education</h2>
          </div>
          <div className="section-element">
            <strong>Pontificia Universidad Católica de Chile <span className="right-text">(2017 - Present)</span></strong><br/>
            <ul>
              <li><strong>Major</strong> in Software Engineering</li>
              <li><strong>Minor</strong> in Data Science and Analytics</li>
            </ul>
          </div>
          <div className="section-element">
            <strong>The Grange School, Chile <span className="right-text">(2003-2016)</span></strong><br/>
            <ul>
              <li>School color captain for all roundar behaviour and leadership</li>
              <li>Rugby full color for excelent performance and being a role model</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;