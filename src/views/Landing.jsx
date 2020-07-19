import React from 'react';
import '../styles/Landing.css';
import github from '../images/github.svg';
import mail from '../images/mail.svg';
import linkedin from '../images/linkedin.svg';

function Landing() {
  return (
    <div className="Landing">
      <section className="section-a">
        <div className="space" />
        <h1>VICENTE ESPINOSA</h1>
        <div className="description">
          <p>Chilean based software engineering student looking for an opportunity to innovate and create new stuff.</p>
        </div>
        <div className="contact">
          <a href="https://github.com/vtespinosa/"><img src={github} alt="Github"/></a>
          <a href="/"><img src={mail} alt="Mail"/></a>
          <a href="https://www.linkedin.com/uas/login?_l=es"><img src={linkedin} alt="Linkedin"/></a>
        </div>
      </section>
    </div>
  );
}

export default Landing;
