import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import Landing from '../layout/Landing';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Skills from '../Skills';

function Routes() {
  return (
    <section>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/about' component={About}/>  
        <Route path='/skills' component={Skills}/> 
        <Route path='/projects' component={Projects}/> 
        <Route path='/contact' component={Contact}/> 
      </Switch>    
    </section>
  )
}

export default Routes
