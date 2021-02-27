import React from 'react';
import Card from './Card';
import { projects } from './projects';

import '../../styles/portafolio.css';

function Portafolio() {
  return (
    <div className="Portafolio">
      <div className="container">
        <h1 className="section-title">My Work</h1>

        <div className="projects-container">
          {
            projects.map(project => <Card project={project} key={project.key} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Portafolio;