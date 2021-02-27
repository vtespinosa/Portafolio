import React from 'react';
import { GitHub, OpenInBrowser } from '@material-ui/icons';

function Card({ project }) {
  return(
    <div className="project card">
      <div className={`logo-container ${project.name}`}>
        {project.logo ? <img src={project.logo} alt={project.name}/> : 'Grado 10'}
      </div>
      <div className="information">
        <div className="tags">
          {
            project.tags.map(tag => <div className="tag" key={tag}>{tag}</div>)
          }
        </div>

        <div className="description">{project.description}</div>

        <div className="actions">
          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="main-button">
            <span>View Code</span>
            <GitHub />
          </a>

          <a href={project.url} target="_blank" rel="noopener noreferrer" className="main-button">
            <span>View Live</span>
            <OpenInBrowser />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;