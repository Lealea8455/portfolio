import React, { Fragment } from 'react';
import myImage from '../../images/me.png';
import facebookIcon from '../../images/facebook-icon.svg';
import githubIcon from '../../images/github-icon.svg';
import linkedInIcon from '../../images/linkedIn-icon.svg';
import boneIcon from '../../images/bone.svg';
import calendarIcon from '../../images/calendar.svg';
import coffeeIcon from '../../images/coffee.svg';
import movieIcon from '../../images/movie.svg';
import desktop from '../../images/desktop.png';

function Home() {
  return (
    <Fragment>
      <div className='home-top'>
        <div className='center'>
          <p>Hello!</p>
            <h1>I'm Lea Gront</h1>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100003286624486" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt='facebook icon' /></a>
              <a href="https://www.linkedin.com/in/lea-gront/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt='linkedin icon'/></a>
              <a href="https://github.com/Lealea8455" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt='github icon' /></a>
            </div>
            <div className='personal-image'>
              <img src={myImage} alt='me' />
            </div>
        </div>
      </div>
      <div className='main-section-wrapper'>
        <div className='top-icons'>
          <div className='calendar-icon'>
            <div className='icon-wrapper'>
              <img src={calendarIcon} alt='calendar icon'/>
            </div>
            <p>27 Years Old</p>
          </div>
          <div className='movie-icon'>
            <div className='icon-wrapper'>
              <img src={movieIcon} alt='movie icon'/>
            </div>
            <p>Love Movies</p>
          </div>
          <div className='coffee-icon'>
            <div className='icon-wrapper'>
              <img src={coffeeIcon} alt='coffee icon'/>
            </div>
            <p>Addicted To Coffee</p>
          </div>
          <div className='bone-icon'>
            <div className='icon-wrapper'>
              <img src={boneIcon} alt='bone icon'/>
            </div>
            <p>Crazy About Dogs</p>
          </div>
        </div>
        <hr />
        <div className='junior-developer'>
          <div className='desktop'><img src={desktop} /></div>
          <div className='context'>
            <h1>I am a junior Full-stack developer</h1>
            <p>Graduated with a bachelor degree in computer science. <br/>
              Have 1 year of hands-on experience as a front-end developer, and now I'm looking for my next big challenge.</p> 
            <p>Well-organized person, problem solver with high attention to details. Friendly and have great social skills. <br/>
              I love web development. On my free time, I develope different web projects, take online courses and always looking for something interesting. 
            </p>
            <h4>Not afraid to explore and learn new technologies!</h4>
          </div>
        </div>
        <hr />
      </div>
    </Fragment>
  )
}

export default Home;

// <a href="https://www.facebook.com/profile.php?id=100003286624486" target="_blank" rel="noopener noreferrer">
// <span><FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
// </a>
// <a href="https://www.linkedin.com/in/lea-gront/" target="_blank" rel="noopener noreferrer">
// <span><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
// </a>
// <a href="https://github.com/Lealea8455" target="_blank" rel="noopener noreferrer">
// <span><FontAwesomeIcon icon={['fab', 'github']} /></span>
// </a>