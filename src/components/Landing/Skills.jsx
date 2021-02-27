import React from 'react';

import DataScience from '../../images/DataScience.svg';
import FrontEnd from '../../images/FrontEnd.svg';
import BackEnd from '../../images/BackEnd.svg';

function Skills() {
  return(
    <section className="section-b" id="section-b">
      <div className="container">
        <h1 className="section-title">Skills</h1>

        <div className="skills-container">
          <div className="skill card">
            <img src={BackEnd} alt="Back End"/>
            <h2>Back-end Developer</h2>
            <p className="skill-description">
              I strongly belive that a well designed, performance orientated and 
              scalable backend is a key to success for any modern application.
            </p>
            <h4>Technologies:</h4>
            <p>
              Django <br/>
              Node JS <br/>
              Ruby on Rails <br/>
              PostgreSQL <br/>
              AWS (EC2, Auto Scaling)
            </p>
          </div>
          <div className="skill card">
            <img src={FrontEnd} alt="Front End"/>
            <h2>Front-end Developer</h2>
            <p className="skill-description">
              I value how attractive and user friendly an application is. That's 
              why I work to achieve these qualities and deliver the best interfaces.
            </p>
            <h4>Technologies:</h4>
            <p>
              React JS <br/>
              React Native <br/>
              HTML / CSS <br/>
              Material UI <br/>
              AWS (s3, Cloudfront)
            </p>
          </div>
          <div className="skill card">
            <img src={DataScience} alt="Data Science"/>
            <h2>Data Scientist</h2>
            <p className="skill-description">
              I want to take advantage of the enourmus potential of data and help 
              identify patterns, adquire knowledge and make the best desicions.
            </p>
            <h4>Technologies:</h4>
            <p>
              Python <br/>
              Numpy + Pandas <br/>
              Matplotlib + Seaborn <br/>
              d3 JS <br/>
              AWS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;