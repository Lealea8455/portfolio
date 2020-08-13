import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Skills from '../Skills';
import Home from '../layout/Home';

function Routes() {
  return (
    <section>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>  
        <Route path='/skills' component={Skills}/> 
        <Route path='/projects' component={Projects}/> 
        <Route path='/contact' component={Contact}/> 
      </Switch>    
    </section>
  )
}

export default Routes
