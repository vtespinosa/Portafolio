import React from 'react';
import {useSpring, animated} from 'react-spring'
import '../styles/Landing.css';
import github from '../images/github.svg';
import mail from '../images/mail.svg';
import linkedin from '../images/linkedin.svg';
import down from '../images/down.svg';
import js from '../images/js.png';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import node from '../images/node.png';
import psql from '../images/psql.png';
import koa from '../images/koa.svg';
import python from '../images/Python.png';
import xd from '../images/xd.png';
import bgithub from '../images/github_black.svg';

function Landing() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  function scrollSkills() {
    document.getElementById('section-b').scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="Landing">
      <animated.section className="section-a" style={props}>
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
        <div className="down">
          <button type="button" onClick={scrollSkills}><img src={down} alt="icon"/></button>
        </div>
      </animated.section>
      <section className="section-b" id="section-b">
        <h1>SKILLS</h1>
        <div className="skills-container">
          <div className="skill">
            <img src={js} alt="JS"/>
            <p>Javascript</p>
          </div>
          <div className="skill">
            <img src={html} alt="HTML"/>
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src={css} alt="CSS"/>
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src={react} alt="React"/>
            <p>React</p>
          </div>
          <div className="skill">
            <img src={node} alt="Node"/>
            <p>Node js</p>
          </div>
          <div className="skill">
            <img src={psql} alt="PSQL"/>
            <p>PostgreSQL</p>
          </div>
          <div className="skill">
            <img src={koa} alt="Koa"/>
            <p>Koa js router</p>
          </div>
          <div className="skill">
            <img src={python} alt="Python"/>
            <p>Python</p>
          </div>
          <div className="skill">
            <img src={xd} alt="XD"/>
            <p>Adobe XD</p>
          </div>
          <div className="skill">
            <img src={bgithub} alt="Github"/>
            <p>Github</p>
          </div>
        </div>
      </section>
      <section className="section-c">
        <h1>Contact</h1>
        <div className="contact-form">
          <div className="field">
            <p>Name</p>
            <input type="text"/>
          </div>
          <div className="field">
            <p>Email</p>
            <input type="text"/>
          </div>
          <div className="field">
            <p>Message</p>
            <input type="text"/>
          </div>
          <div className="submit">
            <button type="button">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
