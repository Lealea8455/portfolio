import React, {Fragment} from 'react'
import Top from './layout/Top';
import skillsImg from '../images/skills.svg';
import '../styles/Skills.scss';

function Skills() {

  const title = 'Skills & Experience';

  return (
    <div className='skills'>
      <Top title={title}/>
      <div className='main-skills'>
        <img src={skillsImg} alt='skills' />
        <div className='text'>
          <p>The main area of my experience is front end development (client side of the web).</p>
          <p>I have also backend experience with C# .NET,  And Node.js mongoDB from side projects and open source contribution.</p>
        </div>
      </div>
      <hr />
      <h2>Languages I speak</h2>
      <div className='languages'>
        <div className='item-wrap'>
          <div><p>JS(ES6)</p></div>
          <div><p>HTML</p></div>
          <div><p>CSS</p></div>
          <div><p>Bootstrap</p></div>
        </div>
        <div className='item-wrap'>
          <div><p>Responsive web design</p></div>
          <div><p>React</p></div>
          <div><p>Redux</p></div>
          <div><p>jQuery</p></div>
        </div>
        <div className='item-wrap'>
          <div><p>Node.js</p></div>
          <div><p>Express</p></div>
          <div><p>MongoDB</p></div>
          <div><p>Git</p></div>
        </div>
        <div className='item-wrap'>
          <div><p>C#, .NET / .NET Core</p></div>
          <div><p>TDD - NUnit, jest</p></div>
        </div>
      </div>
      <hr />
      <h2>Familiar with</h2>
      <div className='item-wrap'>
        <div><p>MVC</p></div>
        <div><p>SQL Server</p></div>
        <div><p>Jenkins</p></div>
      </div>
    </div>
  )
}

export default Skills;