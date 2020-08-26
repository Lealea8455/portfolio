import React, {Fragment} from 'react'
import '../styles/About.scss';

import dambo1 from '../images/dambo1.png';
import dambo2 from '../images/dambo2.png';
import dambo3 from '../images/dambo3.png';
import dambo4 from '../images/dambo4.png';
import dambo5 from '../images/dambo5.png';
import family from '../images/family.png';
import drawer from '../images/drawer.svg';
import brush from '../images/brush.svg';
import lafa from '../images/lafa.svg';
import movie from '../images/movie.svg';
import Top from './layout/Top';

function About() {
  const title = 'Get to Know Me!';
 
  return (
    <div className='about'>
      <Top title={title}/>
      <div className='main-about'>
      <div className='content'>
        <p>I’m Lea Gront, 27 years old from Petach - Tiqwa, Israel. I live with 
            my fiancé Dani and our perfect dog, Dambo.</p>
          <p>I graduated with a bachelor degree in computer science at HIT and 
              I have 1 year of hands-on experience as a front-end 
              developer from Kissterra.</p>
          <hr />
      </div>
        <div className='circle-about-images'>
          <h3>Meet the Love of My Life</h3>
          <h1>Dambo</h1>
          <div>
            <img src={dambo1} alt='dambo1'/>
            <img src={family} alt='family'/>
            <img src={dambo2} alt='dambo2'/>
          </div>
          <div>
            <img src={dambo3} alt='dambo3'/>
            <img src={dambo4} alt='dambo4'/>
            <img src={dambo5} alt='dambo5'/>
          </div>
        </div>
      </div>
      <hr />
      <div className='bottom-about'>
        <h1>Little Bit More About Me</h1>
        <div className='more-about'>
          <div>
            <div><img src={lafa} alt='lafa shawarma'/></div>
            <p>Never said no to shawarma!</p>
          </div>
          <div>
            <div><img src={brush} alt='brush'/></div>
            <p>Clean freak, what can smell better
               than Bleach right?</p>
          </div>
          <div>
            <div><img src={movie} alt='screen'/></div>
            <p>Anime are the best!</p>
          </div>
          <div>
            <div><img src={drawer} alt='drawer'/></div>
            <p>Love restoring vintage furniture.</p>
          </div>
        </div>
      </div>
      {/* <p>LOVE plants, outdoor activities, cooking, DIY projects and lots of coffee.</p> */}
    </div>
  );
}

export default About;
