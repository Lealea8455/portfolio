import React, {Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Landing() {
  return (
    <Fragment>
      <h1>Hey!! I'm Lea</h1>
      <p>I am a junior Full-stack developer. Graduated with a bachelor degree in computer science. <br/>
        Have 1 year of hands-on experience as a front-end developer, and now I'm looking for my next big challenge.</p> 
      <p>Well-organized person, problem solver with high attention to details. Friendly and have great social skills. <br/>
         I love web development. On my free time, I develope different web projects, take online courses and always looking for something interesting. 
         Not afraid to explore and learn new technologies!
      </p>

      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100003286624486" target="_blank" rel="noopener noreferrer">
          <span><FontAwesomeIcon icon={['fab', 'facebook-f']} /></span>
        </a>
        <a href="https://www.linkedin.com/in/lea-gront/" target="_blank" rel="noopener noreferrer">
          <span><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
        </a>
        <a href="https://github.com/Lealea8455" target="_blank" rel="noopener noreferrer">
          <span><FontAwesomeIcon icon={['fab', 'github']} /></span>
        </a>
      </div>
    </Fragment>
  )
}

export default Landing
