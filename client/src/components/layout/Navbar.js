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
    </header>
  )
}

export default Navbar;
