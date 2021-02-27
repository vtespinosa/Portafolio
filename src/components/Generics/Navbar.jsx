import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Close, Menu, GitHub, LinkedIn } from '@material-ui/icons';

function Navbar() {
  const [path, setPath] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('white')
  const history = useHistory();

  useEffect(() => {
    history.listen((location, action) => {
      setPath(location.pathname);
    });
  }, [history]);

  useEffect(() => {
    if (path === '/') {
      setColor('white');
    } else {
      setColor('black');
    }
    setOpen(false);
  }, [path])

  useEffect(() => {
    if (window.innerWidth < 800) {
      const nav = document.getElementsByClassName('nav-right')[0];
      if (open) {
        nav.style.transform = 'translateX(0)';
      } else {
        nav.style.transform = 'translateX(-110%)';
      }
    }
  }, [open])

  return(
    <div className="navbar" style={{ backgroundColor: (open && window.innerWidth < 800) ? '#171A25' : '' }}>
      <div className="nav-left">
        <Link className="logo" to="/" style={{ color: open ? 'white' : color }}>VE</Link>
      </div>
      <div className="nav-menu" style={{ color: open ? 'white' : color }}>
        {open ? <Close onClick={() => setOpen(!open)} /> : <Menu onClick={() => setOpen(!open)} />}
      </div>
      <div className="nav-right">
        <Link className={`nav-link${path === '/' ? ' active' : ''}`} to="/" style={{ color: window.innerWidth > 800 ? color : 'white' }}>
          ABOUT
        </Link>
        <Link className={`nav-link${path === '/projects' ? ' active' : ''}`} to="/projects" style={{ color: window.innerWidth > 800 ? color : 'white' }}>
          PROJECTS
        </Link>

        <div className="nav-contact">
          <a href="https://github.com/vtespinosa" className="contact-item" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
          <a href="https://cl.linkedin.com/" className="contact-item" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;