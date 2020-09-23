import React, { Fragment, useState, useEffect }  from 'react';
import {Link} from 'react-router-dom';
import myImage from '../../images/me.jpg';
import boneIcon from '../../images/bone.svg';
import calendarIcon from '../../images/calendar.svg';
import coffeeIcon from '../../images/coffee.svg';
import desktop from '../../images/desktop.png';
import tags from '../../images/tags.svg';
import mail from '../../images/mail.svg';
import fingerprint from '../../images/fingerprint.svg';
import SocialIcons from '../SocialIcons';
import plantIcon from '../../images/plant.png';

function Home() {

  const [age, setAge] = useState(0);

  useEffect(() => {
    calculateAge("1992/11/15");
  });

  const calculateAge = (dateString) => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    setAge(age);
  }

  return (
    <Fragment>
      <div className='home-top'>
        <div className='center'>
          <p>Hello!</p>
            <h1>I'm Lea Gront</h1>
            <SocialIcons />
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
            <p>{age} Years Old</p>
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
          <div className='plant-icon'>
            <div className='icon-wrapper'>
              <img src={plantIcon} alt='plant icon'/>
            </div>
            <p>Love Plants</p>
          </div>
     
        </div>
        <hr />
        <div className='junior-developer'>
          <div className='desktop'><img src={desktop} alt='desktop'/></div>
          <div className='context'>
            <h1>I am a junior Full-stack developer</h1>
            <p>Graduated with a bachelor degree in computer science. <br/>
              Have 1 year of hands-on experience as a Full-Stack developer, and now I'm looking for my next big challenge.</p> 
            <p>Well-organized person, problem solver with high attention to details. Friendly and have great social skills. <br/>
              I love web development. On my free time, I develope different web projects, take online courses and always looking for something interesting. 
            </p>
            <h4>Not afraid to explore and learn new technologies!</h4>
          </div>
        </div>
        <hr />
        <div className='menu-circles'>
            <Link to='/skills'>
              <img src={tags} alt='tags'></img>
              <p>My Skills </p>
            </Link>
            <Link to='/about'>
              <img src={fingerprint} alt='fingerprint'></img>
              <p>Get To Know Me </p>
            </Link>
            <Link to='/contact'>
            <img src={mail} alt='mail'></img>
              <p>Contact Me </p>
            </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;
