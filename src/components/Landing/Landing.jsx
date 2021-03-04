import React from 'react';
import { GitHub, LinkedIn, Mail, ExpandMore } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring'

import Skills from './Skills';
import Contact from './Contact';
import '../../styles/Landing.css';

function Landing() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  function scrollSkills() {
    document.getElementById('section-b').scrollIntoView({ behavior: "smooth" });
  }

  function scrollContact() {
    document.getElementById('section-c').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="Landing">
      <animated.section className="section-a" style={props}>
        <div className="space" />

        <div className="landing text">
          <h1>VICENTE ESPINOSA</h1>
          <div className="description">
            Chilean based software engineering student looking for an opportunity to innovate and allways learn something new.
          </div>
        </div>

        <div className="contact">
          <a href="https://github.com/vtespinosa" className="contact-item" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          <button type="button" className="contact-item transparent-button" onClick={scrollContact}>
            <Mail />
          </button>
          <a href="https://www.linkedin.com/in/vicente-espinosa-ba4738206/" className="contact-item" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </div>

        <div className="down">
          <ExpandMore onClick={scrollSkills} />
        </div>
      </animated.section>

      <Skills />
      <Contact />
    </div>
  );
}

export default Landing;
