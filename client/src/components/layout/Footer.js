import React from 'react'
import SocialIcons from '../SocialIcons';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-data'>
        <p>Lea Gront</p>
        <SocialIcons />
      </div>
      <div className='footer-menu'>
        <Link to='/about'>About Me</Link>
        <Link to='/skills'>My Skills</Link>
        <Link to='/contact'>Contact</Link>
     </div>
    </div>
  )
}

export default Footer
