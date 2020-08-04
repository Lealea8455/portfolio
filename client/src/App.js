import React, {Fragment} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Routes from './components/routing/Routes';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

function App() {
  return (
    <Router>
      <div  id='wrapper'>
        <div className='inner'>
        <Navbar/>
          <Switch>
              <Route component={Routes} />
          </Switch>
        </div>
        {/* <Footer /> */} <div className='footer'>Footer</div>
      </div>
    </Router>
  );
}

export default App;
