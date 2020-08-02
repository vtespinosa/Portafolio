import React from 'react';
import { Description, School, Work, Language, Event, Phone, Mail } from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';
import '../styles/resume.css';
import profile from '../images/profile.JPG';

function Resume() {
  return (
    <div className="Resume">
      <div className="space" />
      <div className="flex-container">
        <div className="important-info">
          <img src={profile} alt="Profile Pic" />
          <h2>Vicente Espinosa</h2>
          <div className="data">
            <SvgIcon component={Event} />
            <p>24/11/1998</p>
          </div>
          <div className="data">
            <SvgIcon component={Phone} />
            <p>+56975397461</p>
          </div>
          <div className="data">
            <SvgIcon component={Mail} />
            <p>vtespinosa@uc.cl</p>
          </div>
          <div className="data">
            <button type="button">Download Resume</button>
          </div>
        </div>
        <div className="info">
          <div className="section">
            <div className="header">
              <SvgIcon component={Description} fontSize="large" />
              <h2>Summary</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias rerum repellat eaque quam ipsam repudiandae sunt aut aperiam officiis minus ex, mollitia consequatur quidem repellendus, deleniti, temporibus assumenda distinctio.</p>
          </div>
          <div className="section">
            <div className="header">
              <SvgIcon component={School} fontSize="large" />
              <h2>Education</h2>
            </div>
            <ul>
              <li>
                <strong>The Grange School, Chile <span className="right-text">2003-2016</span></strong><br/>
                Honors: Color captain, Full Color, First XV vice-captain<br/>
              </li>
              <li>
                <strong>Sutton Valence School, England <span className="right-text">2015</span></strong><br/>
                Student Exchange to England
              </li>
              <li>
                <strong>Pontificia Universidad Católica de Chile <span className="right-text">2017 - Today</span></strong><br/>
                Major in Software Engineering and minor in Data Science and Analytics<br/>
                Honors: selected in rugby 7s team for Universities National Championship
              </li>
            </ul>
          </div>
          <div className="section">
            <div className="header">
              <SvgIcon component={Work} fontSize="large" />
              <h2>Work Experience</h2>
            </div>
            <ul>
              <li>
                <strong>Sparta <span className="right-text">2017</span></strong><br/>
                Christmas staff support
              </li>
              <li>
                <strong>Pontificia Universidad Católica de Chile <span className="right-text">2019</span></strong><br/>
                Software Engineering Teacher Assistant
              </li>
              <li>
                <strong>Implementos S.A <span className="right-text">2020</span></strong><br/>
                University work placement, optimizing the product reception, storage and delivery
              </li>
            </ul>
          </div>
          <div className="section">
            <div className="header">
              <SvgIcon component={Language} fontSize="large" />
              <h2>Languages</h2>
            </div>
            <ul>
              <li>
                <strong>Spanish</strong><br/>
                Native language
              </li>
              <li>
                <strong>English</strong><br/>
                Fluent speaking, reading and listening.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;