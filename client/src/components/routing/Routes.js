import React, { Suspense } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from '../layout/Home';
const About = React.lazy(() => import('../About'));
const Projects = React.lazy(() => import('../Projects'));
const Contact = React.lazy(() => import('../Contact'));
const Skills = React.lazy(() => import('../Skills'));

function Routes() {
  return (
    <section>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>  
        <Route path='/skills' component={Skills}/> 
        <Route path='/projects' component={Projects}/> 
        <Route path='/contact' component={Contact}/> 
      </Switch>    
    </Suspense>
    </section>
  )
}

export default Routes
