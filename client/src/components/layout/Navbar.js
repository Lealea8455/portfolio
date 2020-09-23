import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Me</Link></li>
        <li><Link to='/skills'>My Skills</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>

      {/* <!-- MENU TOGGLE BUTTON --> */}
      <a href="#nav" className="nav__toggle" role="button" aria-                    expanded="false" aria-controls="menu">
         <svg className="menuicon" xmlns="http://www.w3.org/2000/svg"               width="50" height="50" viewBox="0 0 50 50">
          <title>Toggle Menu</title>
          <g>
            <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
            <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
            <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
            <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
            <circle className="menuicon__circle" r="23" cx="25" cy="25" />
          </g>
        </svg>
      </a>
    </header>
  )
}

export default Navbar;
