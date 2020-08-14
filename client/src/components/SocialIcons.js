import React from 'react'
import facebookIcon from '../images/facebook-icon.svg';
import githubIcon from '../images/github-icon.svg';
import linkedInIcon from '../images/linkedIn-icon.svg';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=100003286624486" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt='facebook icon' /></a>
      <a href="https://www.linkedin.com/in/lea-gront/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt='linkedin icon'/></a>
      <a href="https://github.com/Lealea8455" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt='github icon' /></a>
    </div>
  )
}

export default SocialIcons
