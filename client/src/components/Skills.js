import React from 'react'
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
          <p>Have hands-on experience as a Full-Stack developer in C# .NET, MVC, SQL server, JS(ES6), HTML, CSS, SCSS, jQuery, Bootstrap.  </p>
          <p>I develop many different side-projects that include C# .NET CORE, Node.js, Express, MongoDB, React, Redux, etc.</p>
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
          <div><p>C#, .NET & .NET CORE</p></div>
          <div><p>TDD - NUnit, jest</p></div>
          <div><p>MVC</p></div>
          <div><p>SQL Server</p></div>
        </div>
      </div>
      {/*Display on mobile*/}
      <div className='language-mobile'>
          <div><p>JS(ES6)</p></div>
          <div><p>HTML</p></div>
          <div><p>CSS</p></div>
          <div><p>Bootstrap</p></div>
          <div><p>Node.js</p></div>
          <div><p>Express</p></div>
          <div><p>MongoDB</p></div>
          <div><p>Git</p></div>
          <div><p>Responsive web design</p></div>
          <div><p>React</p></div>
          <div><p>Redux</p></div>
          <div><p>jQuery</p></div>
          <div><p>C#, .NET</p></div>
          <div><p>TDD - NUnit, jest</p></div>
          <div><p>MVC</p></div>
          <div><p>SQL Server</p></div>
      </div>
    
    
    </div>
  )
}

export default Skills;