import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className='page-header__logo'>logo</div>
      <div className='page-header__menu'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
      </div>
    </header>
  )
}

export default Navbar
